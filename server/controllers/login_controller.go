// controller/login_controller.go
package controller

import (
    "context"
    "net/http"

    "github.com/diptanshug/RentYourDress/server/ent"
    "github.com/diptanshug/RentYourDress/server/ent/user"
    "github.com/labstack/echo/v4"
)

// LoginRequest represents the request data for user login.
type LoginRequest struct {
    Email    string `json:"email"`
    Password string `json:"password"`
}

// HandleLogin handles the user login request.
func HandleLogin(client *ent.Client) echo.HandlerFunc {
    return func(c echo.Context) error {
        // Parse request data.
        req := new(LoginRequest)
        if err := c.Bind(req); err != nil {
            return echo.NewHTTPError(http.StatusBadRequest, "invalid request data")
        }

        // Query the user by email.
        user, err := client.User.Query().
            Where(user.Email(req.Email)). // Use UserEmail instead of UserEmailEQ
            First(context.Background())
        if err != nil {
            return echo.NewHTTPError(http.StatusUnauthorized, "invalid email or password")
        }

        // Validate the password.
        if user.Password != req.Password {
            return echo.NewHTTPError(http.StatusUnauthorized, "invalid email or password")
        }

        // You can add further logic here, like generating and returning a JWT token for authentication.

        return c.JSON(http.StatusOK, "login successfully")
    }
}