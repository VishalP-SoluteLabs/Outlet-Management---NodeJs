﻿# Outlet Management Node.js

This project is an outlet management system developed using Node.js. It provides various APIs and supports two main roles: Admin and Outlet Manager. The Outlet Manager is responsible for purchasing products from the Admin and selling them. The system utilizes different relationships to store the data efficiently.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Configure the database connection in the `.env` file.
4. Run the application: `npm start`

## Roles

### Admin

The Admin role has the following capabilities:

- Can change Outlet Status (Active/InActive)
- Get a single Outlet details or all outlet details
- Add a new product by Admin
- Get Aggregated status report of products from different states, city or different outlets

### Outlet Manager

The Outlet Manager role has the following capabilities:

- Buy products from the Admin.
- Sell products to customers.
- Add an outlet
- Get products using filters

## API Endpoints

The application exposes the following API endpoints:

- `POST /auth/signup`: Register a new user (Admin or Outlet Manager).
- `POST /auth/login`: Authenticate and retrieve an access token.
- `GET /admin/outlets`: Retrieve a list of all outlets(Admin only).
- `GET /admin/outlet/:outletId`: Retrieve details of a specific Outlet(Admin only).
- `PATCH /admin/outlets/:outletId`: Change status of an Outlet (Admin only).
- `POST /add-product`: Create a new product (Admin only).
- `GET /admin/products/aggregate-status`: Get aggregated result of product status in city or state (Admin only).
- `POST /outlet/add-outlet`: Add an outlet (Outlet Manager only).
- `POST /outlet/add-outlet-products/:productId`: Process a purchase of product by an Outlet Manager (Outlet Manager only).
- `POST /outlet/sell-outlet-products/:productId`: Process a sales of product by an Outlet Manager (Outlet Manager only).
- `GET /outlet/filer`: Retrieve products using filter (Outlet Manager only).

## Database Relationships

The project utilizes various relationships to store data efficiently:

- **Many-to-Many**: An Outlet Manager can buy multiple products, and a product can be bought by multiple Outlet Managers.

## Technologies Used

The project is built using the following technologies:

- Node.js: JavaScript runtime environment
- Express.js: Web application framework
- MongoDB: NoSQL database for data storage
- Mongoose: MongoDB object modeling for Node.js
- JWT: JSON Web Tokens for authentication
- bcrypt: Password hashing and verification

## Conclusion

The Outlet Management Node.js project provides a robust system for managing outlets, products, etc. With the Admin and Outlet Manager roles, the system offers flexibility and security in managing sales and purchases. The use of various relationships ensures efficient storage and retrieval of data. Feel free to explore and enhance the project as per your requirements.

If you have any further questions or need assistance, please don't hesitate to ask. Happy coding!
