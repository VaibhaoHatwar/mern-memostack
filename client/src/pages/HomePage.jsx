import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";
import toast from "react-hot-toast"
import MemoCard from "../components/MemoCard";
import api from "../lib/axios";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [memos, setMemos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🧠 Fetch memos on page load
  useEffect(() => {
    const fetchMemos = async (params) => {
      try {
        const res = await api.get("/memos");
        setMemos(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching memos");
        console.log(error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchMemos();
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading memos...</div>}

        {memos.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memos.map((memo) => (
              <MemoCard key={memo._id} memo={memo} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
 
export default HomePage