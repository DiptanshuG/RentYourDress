# Dress Rental Website

## How to Set Up GO and EntGO Server-Side Environment

**Step 1:** Download and install GO in the system by running the command `https://golang.org/dl/` in the cmd terminal.

**Step 2:** Create folder structure for your project:
- Go inside your desired workspace directory (e.g., `C:\Users\YOUR_USER_NAME\Documents\`) and create a directory (e.g., `go-workspace`).
- Inside the `go-workspace` directory, create subdirectories: `src`, `bin`, and `pkg`.
- Go inside the `src` directory and create a folder for your project (e.g., `rentyourdress`).
- Inside the `rentyourdress` folder, create subdirectories called `client` and `server`.
- Since we are setting up the environment for the server, go inside the `server` folder.

**Step 3:** Create a folder called `ent` inside the `server` folder.

**Step 4:** Now create a folder named `schema` inside the `ent` folder.

**Step 5:** Inside the `server` (backend root directory of the project) folder, run the command `go get entgo.io/ent@latest` to download and install the latest version of the "ent" library in Go.

**Step 6:** Now creating a database connection:
- Download XAMPP using this link [Download XAMPP](https://www.apachefriends.org/index.html) (XAMPP is a software bundle that includes Apache, MySQL, PHP, and Perl for local web server development).
- Download and install phpMyAdmin GUI tool [Download phpMyAdmin](https://www.phpmyadmin.net/).
- Extract the phpMyAdmin files inside the `htdocs` folder inside the XAMPP folder.
- You will see the `phpMyAdmin-5.2.1-all-languages` folder; inside it, find the file named `config.sample.inc.php`.
- Make a copy of `config.sample.inc.php` and rename the copied file to `config.inc.php`, then edit the configuration (related to PORT, USERNAME, PASSWORD, HOST, etc.).
- In XAMPP control panel, click on the "Config" button of Apache and then click on phpmyadmin (`config.inc.php`), and match your credentials (e.g., PORT, USERNAME, PASSWORD, HOST, etc.).
- Similarly, click on the "Config" button of MySQL and then click on `my.ini`, and match your credentials (e.g., PORT, USERNAME, PASSWORD, HOST, etc.).
- Start both servers and open MySQL Admin by clicking on the "Admin" button of MySQL.
- If you are unable to open it, check and match the above credentials (e.g., PORT, USERNAME, PASSWORD, HOST, etc.).
- If opened successfully, create your database (e.g., `rent_your_dress`).

**Step 7:** Configure Database Connection in `main.go`:
- Use the appropriate MySQL driver for Go (e.g., `go-sql-driver/mysql`).
- Establish the database connection in `main.go`, and handle errors gracefully.

(Note: The provided steps assume a Windows environment. For other operating systems, the steps may vary slightly.)
