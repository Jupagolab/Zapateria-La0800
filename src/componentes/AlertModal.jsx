import React from "react";
import "./AlertModal.css";

const AlertModal = ({ message, onClose }) => {
  return (
    <div className="fixed w-3/4 top-3/4 left-1/2 rounded -translate-x-1/2 -translate-y-1/2 bg-morado-900 dark:bg-morado-300 p-4 border border-morado-700 shadow-xl transition-all">
      <div className="flex justify-between mx-9 my-auto items-center gap-6 text-center text-morado-300 dark:text-[white]">
        <p>{message}</p>
        <img className="w-10 md:w-12 lg:w-14 xl:w-14 cursor-pointer" src="/check-circle.png" alt="Cerrar" onClick={onClose} />
      </div>
    </div>
  );
};

export default AlertModal;
