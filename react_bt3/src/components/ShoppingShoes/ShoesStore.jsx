import { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";
import CartShoe from "./CartShoe";

const ShoesStore = () => {
  const [shoesList, setShoesList] = useState(data);
  const [selectedShoe, setSelectedShoe] = useState(null); // sản phẩm được chọn
  const [isModalOpen, setIsModalOpen] = useState(false); // trạng thái mở modal
  const [isCartOpen, setIsCartOpen] = useState(false); // trạng thái mở giỏ hàng
  const [cartItems, setCartItems] = useState([]); // danh sách sản phẩm trong giỏ hàng

  const handleOpenModal = (shoe) => {
    setSelectedShoe(shoe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedShoe(null);
  };

  const onGetCartItems = (shoe) => {
    const shoeAddToCart = {
      maSP: shoe.id,
      tenSP: shoe.name,
      giaSP: shoe.price,
      hinhSP: shoe.image,
      soLuong: 1,
    }

    const newCarts = [...cartItems];
    newCarts.push(shoeAddToCart);
    setCartItems(newCarts);
  }

  return (
    <div>
      <h1 className="text-center text-3xl mt-2">Shoes Shop</h1>
      <CartShoe cartItemsProp = {cartItems}></CartShoe>
      <ProductList shoesListProp={shoesList} onOpenModal={handleOpenModal} onGetCartItems={onGetCartItems}></ProductList>
      {isModalOpen && <Modal shoe={selectedShoe} onClose={handleCloseModal} ></Modal>}
    </div>
  );
};

export default ShoesStore;
