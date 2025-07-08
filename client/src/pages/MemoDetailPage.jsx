import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../lib/axios";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const MemoDetailPage = () => {
  const [memo, setMemo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchMemo = async () => {
      try {
        const res = await api.get(`/memos/${id}`);
        setMemo(res.data);
      } catch (error) {
        console.log("Error in fetching memo", error);
        toast.error("Failed to fetch the memo");
      } finally {
        setLoading(false);
      }
    };

    fetchMemo();
  }, [id]);

  console.log({ memo });

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  const deleteHandler = async () => {
    if (!window.confirm("Are you sure you want to delete this memo?")) return;

    try {
      await api.delete(`/memos/${id}`);
      toast.success("Memo deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting memo:", error);
      toast.error("Failed to delete memo");
    }
  };

  const saveHandler = async () => {
    if (!memo.title.trim() || !memo.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/memos/${id}`, memo);
      
      navigate("/");
    } catch (error) {
      console.log("Error saving the memo:", error);
      toast.error("Failed to update memo");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-5" />
              Back to Memos
            </Link>
            <button
              onClick={deleteHandler}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="size-5" />
              Delete Memo
            </button>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Memo title"
                  className="input input-bordered"
                  value={memo.title}
                  onChange={(e) => setMemo({ ...memo, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Memo content"
                  className="textarea textarea-bordered h-32"
                  value={memo.content}
                  onChange={(e) =>
                    setMemo({ ...memo, content: e.target.value })
                  }
                />
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={saveHandler}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoDetailPage;
