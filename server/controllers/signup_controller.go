// controller/signup_controller.go
package controller

import (
	"context"
	"net/http"

	"github.com/diptanshug/RentYourDress/server/ent"
	"github.com/labstack/echo/v4"
)

// SignUpRequest represents the request data for user sign-up.
type SignUpRequest struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

// HandleSignUp handles the user sign-up request.
func HandleSignUp(client *ent.Client) echo.HandlerFunc {
	return func(c echo.Context) error {
		// Parse request data.
		req := new(SignUpRequest)
		if err := c.Bind(req); err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "invalid request data")
		}

		// Create a new user in the database.
		user, err := client.User.Create().
			SetName(req.Name).
			SetEmail(req.Email).
			SetPassword(req.Password).
			Save(context.Background())
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "failed to create user")
		}

		return c.JSON(http.StatusCreated, user)
	}
}
