# 🧠 DEV NOTES – Vaibhao Hatwar

> My personal memory bank for MERN stack development.  
> Learn fast, forget smart, revisit faster. 🔁

---

## ⚛️ React Basics & Gotchas

- 🔄 `useEffect(() => {}, [])` runs once when component mounts.
- ⚠️ `.map()` must return JSX:

  ✅ Correct:
  ```jsx
  memos.map(memo => (
    <div>{memo.title}</div>
  ))
  ```

  ❌ Incorrect:
  ```jsx
  memos.map(memo => {
    <div>{memo.title}</div>
  })
  ```

- Always add a `key` prop when mapping:
  ```jsx
  <div key={memo._id}></div>
  ```

- `useState` updates are asynchronous — avoid using `console.log()` immediately after `setState`.

---

## 🌐 Axios & API Integration

- Axios GET request:
  ```js
  const res = await axios.get("http://localhost:5001/api/memos");
  setMemos(res.data);
  ```

- On rate limit (429), show fallback UI:
  ```js
  if (error.response?.status === 429) setIsRateLimited(true);
  ```

---

## 📅 Date Formatting

- Correct method:
  ```js
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  ```

- ❌ Wrong: `toLocalDateString` → Typo! Method doesn’t exist.

---

## 🔐 CORS & Middleware Setup (Express)

- CORS should be applied **before** all routes:
  ```js
  app.use(cors({ origin: "http://localhost:5173" }));
  ```

- Recommended middleware order in Express:
  1. CORS
  2. Body parser (`express.json()`)
  3. Custom middleware (rate limiter, logger, etc.)
  4. Routes
  5. 404 fallback

---

## 🚀 Git Commit Examples

- ✅ Clean commit message:
  ```
  chore(server): configure CORS and add Upstash rate limiter (testing)
  ```

- Common prefixes:
  - `feat:` → new feature
  - `fix:` → bug fix
  - `chore:` → config or cleanup
  - `refactor:` → restructure code

---

## 📦 NPM & Vite Tips

- Start dev server:
  ```bash
  npm run dev
  ```

- Install common packages:
  ```bash
  npm install axios react-router-dom
  ```

---

## 🧘‍♂️ Dev Mindset

- Learn → Note → Revisit → Build → Teach
- Don’t try to remember everything. Document it and review regularly.

> **"Abhyāsena tu Kaunteya vairāgyeṇa cha gṛhyate"**  
> _– Bhagavad Gita 6.35_  
> *"O Kaunteya (Arjuna), by practice and detachment, the mind can be controlled."*

---

🔱 *Har Har Mahadev!* — Code with clarity, focus, and fearless intent.