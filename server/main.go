package main

import (
	"context"
	"log"

	"entgo.io/ent/dialect"
	"entgo.io/ent/dialect/sql"
	controller "github.com/diptanshug/RentYourDress/server/controllers"
	"github.com/diptanshug/RentYourDress/server/ent"
	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
)

func main() {
	// Open a database connection.
	db, err := sql.Open(dialect.MySQL, "root:@tcp(localhost:3306)/rent_your_dress_db")
	if err != nil {
		log.Fatalf("failed opening connection to MySQL: %v", err)
	}
	defer db.Close()

	// Create an Ent client with the database connection.
	client := ent.NewClient(ent.Driver(db))

	// Create a new user.
	ctx := context.Background()

	if err := client.Schema.Create(ctx); err != nil {
		log.Fatalf("failed creating schema: %v", err)
	}

	// Use the new HandleSignUp function from the controller package.
	e := echo.New()

	e.POST("/signup", controller.HandleSignUp(client))
	e.POST("/login", controller.HandleLogin(client))
	// Start the server.
	e.Logger.Fatal(e.Start(":8080"))

}
