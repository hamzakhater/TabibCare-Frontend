# API Schemas for TabibCare System

This folder contains JSON schema files representing the structure of data used in the frontend. These schemas are used to define the expected request/response format and the MongoDB data model.

## 🧱 Main Schemas

1. `login.json` – User login credentials
2. `user.json` – User registration and profile
3. `doctor.json` – Doctor profiles and specialties
4. `appointment.json` – Appointment booking and management
5. `prescription.json` – Prescriptions sent from doctors to pharmacies
6. `message.json` – Messages between roles (admin/secretary/doctor/patient)
7. `notification.json` – System notifications (optional)
8. `statistics.json` – Dashboard statistics (e.g., total appointments, patients)

---

## 🚀 Suggested API Endpoints

| Endpoint                | Method | Description                       |
| ----------------------- | ------ | --------------------------------- |
| `/api/login`            | POST   | Login with email/phone + password |
| `/api/users`            | POST   | Register a new user               |
| `/api/users/:id`        | GET    | Get user profile by ID            |
| `/api/doctors`          | GET    | Get list of doctors               |
| `/api/appointments`     | POST   | Book a new appointment            |
| `/api/appointments/:id` | PATCH  | Update appointment status         |
| `/api/prescriptions`    | POST   | Send prescription to pharmacy     |
| `/api/messages`         | POST   | Send a message                    |
| `/api/messages/:userId` | GET    | Fetch messages for a user         |
| `/api/statistics`       | GET    | Fetch admin dashboard stats       |

---

## 📝 Notes for Backend Developer

- Please follow the structure in each JSON file to create Mongoose models (MongoDB).
- All fields used in the frontend are based on these schemas.
- Any additional fields must be discussed with the frontend developer (Hamza).
- All endpoints should return consistent responses (`success`, `data`, `error`).

---

👤 Frontend Developer: **Hamza Abu Khater**  
📧 Contact: [Add contact if needed]
