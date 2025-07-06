import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const MemoCard = ({ memo, setMemos }) => {
  const deleteHandler = async (e, id) => {
    e.preventDefault(); // get rid of navigation behavior

    if (!window.confirm("Are you sure you want to delete this memo?")) return;

    try {
      await api.delete(`/memos/${id}`);
      setMemos((prev) => prev.filter((memo) => memo._id !== id)); // get rid of deleted one from the array
      toast.success("memo deleted successfully");
    } catch (error) {
      console.log("Error in deleteHandler", error);
      toast.error("Failed to delete memo");
    }
  };

  return (
    <Link
      to={`/memo/${memo._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF90]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{memo.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{memo.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(memo.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => deleteHandler(e, memo._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MemoCard;
