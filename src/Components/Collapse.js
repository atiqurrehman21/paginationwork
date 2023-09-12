import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-1/2 p-8 rounded-lg shadow-lg z-10 transition-transform duration-300 transform scale-100">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">Modal Content Goes Here</p>
            <button
              onClick={toggleModal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
