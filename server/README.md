# 📝 MemoStack Backend (MERN)

A fast and minimal backend for a full-stack memo-taking app, built with **Node.js**, **Express**, and **MongoDB**. Includes full CRUD functionality and Redis-based rate limiting (Upstash).

---

## 🧩 Tech Stack

| Layer         | Tools & Libraries                          |
|---------------|--------------------------------------------|
| Backend API   | Node.js, Express.js, MongoDB (Mongoose)    |
| Rate Limiting | Redis via Upstash                          |
| Utilities     | Dotenv, CORS, Morgan, ESLint               |
| Dev Tools     | Postman, Git, Nodemon                      |

---

## 📁 Folder Structure

```
mern-memostack/
├── client/         # React frontend
├── server/         # Express backend ← you're here
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── .env.example
│   └── server.js
```

---

## 🚀 Getting Started (Backend)

### 1. Navigate to the backend folder

```bash
cd server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in `/server`:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
REDIS_REST_URL=your_upstash_redis_url
REDIS_REST_TOKEN=your_upstash_redis_token
```

### 4. Start the development server

```bash
npm run dev
```

Runs on: `http://localhost:5001`

---

## 📬 API Endpoints

| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | `/api/memos`     | Get all memos     |
| POST   | `/api/memos`     | Create new memo   |
| GET    | `/api/memos/:id` | Get single memo   |
| PUT    | `/api/memos/:id` | Update memo       |
| DELETE | `/api/memos/:id` | Delete memo       |

---

## 🔒 Rate Limiting

- Powered by Upstash Redis
- Applies per-IP limits to public routes
- Returns `429 Too Many Requests` on limit

---

## 📘 Dev Notes

You can find additional insights and code commentary in the `DEV_NOTES.md` file.

---

## 🧘‍♂️ Final Thought

> *"Abhyāsena tu Kaunteya vairāgyeṇa cha gṛhyate"*  
> *“Through practice and detachment, the mind can be controlled.” – Bhagavad Gita 6.35*

---

## 📄 License

This project is licensed under the **MIT License**.