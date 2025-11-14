import React from "react";

const Modal = ({ shoe, onClose }) => {
  if (!shoe) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-transparent bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-5 max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-2xl font-semibold text-gray-900">
            {shoe.name}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src={shoe.image} alt={shoe.name} className="w-full rounded-lg" />
          <div className="space-y-4 text-xl my-auto">
            <p><strong>Alias:</strong> {shoe.alias}</p>
            <p><strong>Price:</strong> {shoe.price} $</p>
            <p><strong>Description:</strong> {shoe.description}</p>
            <p><strong>Short Description:</strong> {shoe.shortDescription}</p>
            <p><strong>Quantity:</strong> {shoe.quantity}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-5 border-t pt-3">
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
