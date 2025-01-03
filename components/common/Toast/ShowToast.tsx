"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface ShowToastProps {
  message: string;
  type?: "success" | "error";
  icon?: string;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
}

export default function ShowToast({ message, type, icon }: ShowToastProps) {
  useEffect(() => {
    if (type === "success") {
      toast.success(message, {
        icon: icon,
      });
    } else if (type === undefined) {
      toast(message, {
        icon: icon,
        duration: 4000,
        style: {
          height: "65px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "gray",
          textAlign: "center",
        },
      });
    } else {
      toast.error(message, {
        style: {
          height: "65px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "gray",
          textAlign: "center",
        },
        duration: 4000,
      });
    }
  }, [message, type, icon]);

  return null;
}
