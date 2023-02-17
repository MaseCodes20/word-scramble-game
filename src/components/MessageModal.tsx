import { MouseEvent, useRef } from "react";

interface IMessageModal {
  message: string;
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

function MessageModal({ message, isOpen, setIsOpen }: IMessageModal) {
  const modalRef = useRef<HTMLInputElement>(null);

  const closeModal = (e: MouseEvent) => {
    if (e.target === modalRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center h-full w-full bg-gray-700/20"
          onClick={closeModal}
        >
          <div className="bg-white text-black rounded-md p-4">
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageModal;
