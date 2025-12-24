# FlightAndSearch

A Node.js backend project for managing flight search functionality. This project is structured using MVC principles and modular configuration to handle environment variables, database connections, and application logic.

---

## Project Structure

FlightAndSearch/
├── node_modules/           # Node.js dependencies
├── src/
│   ├── config/             # Configuration files
│   │   ├── db.js           # Database connection configuration
│   │   └── serverConfig.js # Server environment configuration
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Express middlewares
│   ├── models/             # Database models
│   ├── repository/         # Data access layer
│   ├── services/           # Business logic layer
│   ├── utils/              # Utility functions
│   └── index.js            # Entry point of the application
├── .env                    # Environment variables (ignored in git)
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

