# 📝 MERN MemoStack

A simple yet powerful full-stack memo/note-taking app built using the MERN stack (MongoDB, Express, React, Node.js).  
Includes features like memo CRUD, Upstash-powered rate limiting, and clean Tailwind UI.

> Built with 🔥 focus, 👨‍💻 discipline, and 🔱 devotion.  
> _“Abhyāsena tu Kaunteya vairāgyeṇa cha gṛhyate” – Bhagavad Gita 6.35_

---

## 🧩 Tech Stack

| Layer      | Tech Used                         |
|------------|-----------------------------------|
| Frontend   | React, Tailwind CSS, Axios        |
| Backend    | Node.js, Express.js, MongoDB      |
| Rate Limit | Redis via Upstash                 |
| Dev Tools  | Vite, Postman, GitHub, ESLint     |

---

## 📦 Project Structure

```
mern-memostack/
│
├── client/         # React frontend
├── server/         # Express backend
├── DEV_NOTES.md    # Dev log with tips & learnings
└── README.md       # You are here
```

---

## 🚀 Getting Started

### 🔐 Backend Setup

1. Navigate to the server folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in `/server` with:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_uri
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

---

### 🌐 Frontend Setup

1. Navigate to the client folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

Make sure your backend CORS config allows:
```js
origin: "http://localhost:5173"
```

---

## 📘 Developer Notes

Want to see internal dev learnings, React gotchas, and mindset tips?  
→ [Read DEV_NOTES.md](./DEV_NOTES.md)

---

## 📸 Project Preview

> 🚧 UI under construction — screenshots will be added after core features are done

---

## 🙏 Philosophy

> _“Abhyāsena tu Kaunteya vairāgyeṇa cha gṛhyate”_  
> _“With practice and detachment, the mind can be mastered.”_ – Gita 6.35

🔱 *Har Har Mahadev!* – Code with focus. Learn with faith. Ship with strength.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
