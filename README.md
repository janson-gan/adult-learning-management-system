# Adult Learning / Training Management System

A backend API for an adult learning and training management system built with Node.js, Express, TypeScript, and PostgreSQL using Sequelize ORM. The system supports role-based access control for three main roles: Student, Trainer, and Admin.

---

## Features (MVP)

### Roles and Capabilities

- **Student**
  - Register and Login
  - View available courses
  - Enroll in courses
  - View enrolled courses and results

- **Trainer**
  - Login only (Account created by admin)
  - View courses they teach
  - View students enrolled in their courses
  - Create assignments and submit grades

- **Admin**
  - Login only (Account created by system administrator)
  - Manage users (students, trainers, admins)
  - Create and manage courses
  - Assign trainers to courses
  - View all enrollments and system reports

---

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Validation**: Zod
- **Authentication**: JWT (planned)
- **Security**: Helmet, CORS, Rate Limiting (planned)

---

## Project Structure
```
training_management_system
 |—— backend
 |     |—— Docs/                # Project documentation
 |     |—— logs/                # App and error logging
 |     |—— src/
 |     |    |—— config/         # app config file
 |     |    |—— controllers/    # Route controller handling business logic
 |     |    |—— db/             # Migrations, seeders, models, db connection
 |     |    |—— middlewares/    # Express middlewares (error handling, validation)
 |     |    |—— models/         # Sequelize models
 |     |    |—— routes/         # Route defintion, group by resource
 |     |    |—— types/          # Typescript
 |     |    |—— utils/          # Utility helpers (logger, asyncHandler)
 |     |    |—— validations/    # Zod schema input validation
 |     |    |—— app.ts          # Express apps
 |     |    |—— server.ts       # Server launch script
 |     |
 |     |—— .env                 # Environment variables
 ```