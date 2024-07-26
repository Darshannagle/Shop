
---

# Shop

**Shop** is a full-featured e-commerce application built using Node.js, Express, and Sequelize. The application provides comprehensive modules for managing the various aspects of an online store, including administration, user management, products, categories, subcategories, cart items, and orders.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Admin Module**: Manage products, categories, subcategories, orders, and users.
- **User Module**: User registration, authentication, profile management.
- **Product Module**: Add, update, delete, and view products.
- **CartItem Module**: Manage items in the user's cart.
- **Category Module**: Organize products into categories.
- **Subcategory Module**: Further organize products within categories.
- **Order Module**: Place and manage orders.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: Sequelize (ORM), MySQL
- **Authentication**: JSON Web Tokens (JWT)


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/shop.git
    cd shop
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Database Setup

1. Create a MySQL database:
    ```sql
    CREATE DATABASE test;
    ```

2. Configure the database connection in `config/connection.js`:
    ```json
    {
      "development": {
        "username": "root",
        "password": null,
        "database": "shop",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
    ```

3. Enable Sequelize Sync by uncommenting line no 16 in index.js:
    ```bash
     sequlize.sync({ force: true }).then(() => console.log("done")).catch((e) => { console.error(e); })

    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The server will be running on `http://localhost:1200`.

## API Endpoints

### Admin

- `POST /admin/login`: Admin login.
- `GET /admin/signup`: signup.

### User

- `POST user/register`: Register a new user.
- `POST user/login`: User login.
- `POST /otp`: verify User account.

### Product

- `GET /product`: Get all products.
- `POST /product`: Add a new product.
- `POST /product/all`: Add  list of products.
- `PUT /product:id`: Update a product.
- `DELETE /product/:id`: Delete a product.

### CartItem

- `GET /cart`: Get all cart items for the user.
- `POST /cart`: Add a new cart item.
- `PUT /cart/:id`: Update a cart item.
- `DELETE /cart/:id`: Delete a cart item.

### Category

- `GET /api/categories`: Get all categories.
- `POST /api/categories`: Add a new category.
- `PUT /api/categories/:id`: Update a category.
- `DELETE /api/categories/:id`: Delete a category.

### Subcategory

- `GET /subcategory/`: Get all subcategories.
- `POST /subcategory/`: Add a new subcategory.
- `PUT /subcategory/:id`: Update a subcategory.
- `DELETE /subcategory/:id`: Delete a subcategory.

### Order

- `GET /order`: Get all orders for the user.
- `POST /order`: Place a new order.
- `GET /order/:id`: Get order details.
- `PUT /order/:id`: Update an order.
- `DELETE /order/:id`: Cancel an order.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize and expand on this template as needed for your project.
