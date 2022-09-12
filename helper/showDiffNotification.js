import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const errorNotify = (message) => {
  return toast.error(message);
};

export const successNotify = (message) => {
  return toast.success(message);
};
