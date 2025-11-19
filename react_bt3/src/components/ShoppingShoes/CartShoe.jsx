import React, { useState } from "react";

const CartShoe = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItemsProp,onUpdateQtyCartsProp,onDeleteItemCartProp } = props;

  // render list Product in Cart
  const renderListProduct = () => {
    return cartItemsProp.map((shoe) => {
      return (
        <tr className="border-b text-center" key={shoe.maSP}>
          <td className="w-[100px] h-[100px]">
            <img src={shoe.hinhSP} alt={shoe.tenSP} />
          </td>
          <td className="text-xl">{shoe.tenSP}</td>
          <td className="text-center">
            <button onClick={() => onUpdateQtyCartsProp(shoe.maSP, false)} className="mr-2 text-2xl">
              -
            </button>
            {shoe.soLuong}
            <button onClick={() => onUpdateQtyCartsProp(shoe.maSP, true)} className="ml-2 text-xl">
              +
            </button>
          </td>
          <td>{shoe.thanhTien}</td>
          <td>
            <button
              onClick={()=> onDeleteItemCartProp(shoe.maSP)}
              type="button"
              className="text-black bg-red-500 box-border border border-transparent hover:bg-red-700 focus:ring-2 focus:ring-black font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

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
          <h2 className="text-2xl font-semibold mb-4 text-center">
            🛒 Giỏ hàng
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-center">
                <th className="border-b p-2">Hình Ảnh</th>
                <th className="border-b p-2">Tên Sản Phẩm</th>
                <th className="border-b p-2">Số Lượng</th>
                <th className="border-b p-2">Giá</th>
                <th className="border-b p-2">Hành động</th>
              </tr>
            </thead>
            <tbody>{renderListProduct()}</tbody>
          </table>
          <div className="flex justify-between items-center">
            <button
              onClick={onClose}
              type="button"
              className="bg-amber-300 rounded-full py-2 px-4 mt-3 hover:bg-amber-500"
            >
              Đóng
            </button>
            <button
              type="button"
              className="bg-green-300 rounded-full py-2 px-4 mt-3 hover:bg-green-500"
            >
              Thanh Toán
            </button>
          </div>
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
