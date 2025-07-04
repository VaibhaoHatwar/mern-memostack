import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import MemoDetailPage from "./pages/MemoDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <>
      <button onClick={() => toast.success("congrats!")} className="text-white bg-emerald-500 p-4 m-4 rounded outline none">Click Me!</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/memo/:id" element={<MemoDetailPage />} />
      </Routes>
    </>
  );
};

export default App;
