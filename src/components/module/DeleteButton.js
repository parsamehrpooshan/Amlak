"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "@/module/DeleteButton.module.css";

function DeleteButton({ _id }) {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${_id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <button onClick={deleteHandler} className={styles.deleteButton}>
      حذف آگهی
      <AiOutlineDelete />
    </button>
  );
}

export default DeleteButton;
