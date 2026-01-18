# Tracking Project – Next.js & RESTful API

## Project Overview

This is a tracking application built with Next.js and TypeScript. The goal of this project is to demonstrate scalable project structure and RESTful API design using file-based routing.

---

## Folder Structure

```
src/
├── app/          # Routes, layouts, and API handlers
├── components/   # Reusable UI components
├── lib/          # Utility functions and helpers
```

---

## RESTful API Design

The backend API is implemented using Next.js App Router under the `app/api/` directory.

### API Routes

```
/api/tasks
/api/tasks/[id]
```

---

## HTTP Methods & Actions

| Method | Route           | Description       |
| ------ | --------------- | ----------------- |
| GET    | /api/tasks      | Fetch all tasks   |
| POST   | /api/tasks      | Create a new task |
| GET    | /api/tasks/[id] | Fetch task by ID  |
| PUT    | /api/tasks/[id] | Update a task     |
| DELETE | /api/tasks/[id] | Delete a task     |

---

## Sample Requests

```bash
curl http://localhost:3000/api/tasks
```

```bash
curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title":"New Task"}'
```

---

## API Test Evidence

![API Test](./api-1.png)
![API Test](./api-2.png)

---

Frontend Integration

The frontend fetches task data from the internal REST API using the Fetch API. This demonstrates how Next.js can serve as both the frontend and backend within a single project, improving developer experience and simplifying deployment.

## Reflection

Using file-based routing for API endpoints makes the backend predictable and easy to maintain. Consistent naming and proper HTTP status codes reduce integration errors and help the application scale as more features are added.
