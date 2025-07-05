import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import MemoDetailPage from "./pages/MemoDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest">
      <button
        onClick={() => toast.success("congrats!")}
        className="btn btn-primary"
      >
        Click Me!
      </button>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/memo/:id" element={<MemoDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
