package main

import (
    "context"
    "log"

    "github.com/yashikajain0312/restroApp/server/ent"

    "entgo.io/ent/dialect"
    "entgo.io/ent/dialect/sql"
    _ "github.com/go-sql-driver/mysql"
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

    newUser, err := client.User.
        Create().
        SetName("John Doe").
        SetAge(30).
        Save(ctx)
    if err != nil {
        log.Fatalf("failed creating user: %v", err)
    }

    log.Printf("Created user: %v", newUser)
}