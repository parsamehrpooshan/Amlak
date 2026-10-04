"use client";

import { useRouter } from "next/navigation";
import { sp } from "@/utils/replaceNumber";
import toast from "react-hot-toast";
import styles from "@/module/AdminCard.module.css";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

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
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <Link href={`/buy-residential/${_id}`} className={styles.link}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
      <div className={styles.buttons}>
        <button onClick={publishHandler}>انتشار</button>
        <button onClick={deleteHandler}>
          حذف
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default AdminCard;
