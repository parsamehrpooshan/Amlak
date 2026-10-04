"use client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import styles from "@/module/ShareButton.module.css";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyHandler = () => {
    toast.success("لینک در کلیپ‌ بورد کپی شد");
  };

  return (
    <CopyToClipboard text={url} onCopy={copyHandler}>
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
