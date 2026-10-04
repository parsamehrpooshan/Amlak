"use client";

import { FiLogOut } from "react-icons/fi";

import styles from "@/module/LogoutButton.module.css";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <button onClick={signOut} className={styles.button}>
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
