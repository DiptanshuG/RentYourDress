// controller/login_controller.go
package controller

import (
	"context"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/diptanshug/RentYourDress/server/ent"
	"github.com/diptanshug/RentYourDress/server/ent/user"
	"github.com/labstack/echo/v4"
)

// Your JWT secret key (you should keep it secret in production).
var jwtSecret = []byte("your-secret-key")

// LoginRequest represents the request data for user login.
type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// HandleLogin handles the user login request and generates a JWT token.
func HandleLogin(client *ent.Client) echo.HandlerFunc {
	return func(c echo.Context) error {
		// Parse request data.
		req := new(LoginRequest)
		if err := c.Bind(req); err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "invalid request data")
		}

		// Query the user by email.
		user, err := client.User.Query().
			Where(user.Email(req.Email)).
			First(context.Background())
		if err != nil {
			return echo.NewHTTPError(http.StatusUnauthorized, "invalid email or password")
		}

		// Validate the password.
		if user.Password != req.Password {
			return echo.NewHTTPError(http.StatusUnauthorized, "invalid email or password")
		}

		// Create a new JWT token with the user ID as the payload.
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"userId": user.ID,
			"exp":    time.Now().Add(time.Hour * 24).Unix(), // Token expiration time (24 hours).
		})

		// Sign the token with the secret key.
		tokenString, err := token.SignedString(jwtSecret)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "failed to generate token")
		}

		// Return the JWT token as the response.
		return c.JSON(http.StatusOK, map[string]string{
			"token": tokenString,
		})
	}
}
