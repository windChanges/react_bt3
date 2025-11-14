import React, { useState } from "react";

const CartShoe = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItemsProp } = props;
  // Component con hiển thị modal
  const CartModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-transparent bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-[800px] relative shadow-lg animate-fade-in">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
          >
            ✖
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-center">🛒 Giỏ hàng</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Hình Ảnh</th>
                <th className="border-b p-2">Tên Sản Phẩm</th>
                <th className="border-b p-2">Số Lượng</th>
                <th className="border-b p-2">Giá</th>
                <th className="border-b p-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="w-[100px] h-[100px]"> <img src="http://svcy3.myclass.vn/images/adidas-prophere.png" alt="" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Icon giỏ hàng */}
      <div
        onClick={() => setIsOpen(true)}
        className="fixed top-10 right-40 text-2xl bg-gray-200 rounded-full px-10 py-3 cursor-pointer hover:bg-gray-300 transition"
      >
        <i className="fa-solid fa-cart-shopping"></i>
      </div>

      {/* Modal giỏ hàng */}
      {isOpen && <CartModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default CartShoe;
