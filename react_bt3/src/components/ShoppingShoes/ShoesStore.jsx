import { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";
import CartShoe from "./CartShoe";

const ShoesStore = () => {
  const [shoesList, setShoesList] = useState(data);
  const [selectedShoe, setSelectedShoe] = useState(null); // sản phẩm được chọn
  const [isModalOpen, setIsModalOpen] = useState(false); // trạng thái mở modal
  const [cartItems, setCartItems] = useState([]); // danh sách sản phẩm trong giỏ hàng

  const handleOpenModal = (shoe) => {
    setSelectedShoe(shoe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedShoe(null);
  };

  const findIndexCarts = (maSP) => {
    return cartItems.findIndex((shoe) => shoe.maSP === maSP);
  };

  const onGetCartItems = (shoe) => {
    console.log(shoe);
    const shoeAddToCart = {
      maSP: shoe.id,
      tenSP: shoe.name,
      giaSP: shoe.price,
      hinhSP: shoe.image,
      soLuong: 1,
      thanhTien: shoe.price,
    };

    const newCarts = [...cartItems];
    // tìm vị trí  product có tồn tại trong carts
    const index = findIndexCarts(shoeAddToCart.maSP);
    console.log("index", index);
    if (index !== -1) {
      newCarts[index].soLuong += 1;
      newCarts[index].thanhTien += newCarts[index].giaSP;
    } else {
      newCarts.push(shoeAddToCart);
    }
    setCartItems(newCarts);
  };

  const onUpdateQtyCarts = (maSP, status) => {
    const index = findIndexCarts(maSP);
    if (index !== -1) {
      let newCarts = [...cartItems];
      if (status) {
        newCarts[index].soLuong += 1;
        newCarts[index].thanhTien += newCarts[index].giaSP;
      } else {
        newCarts[index].soLuong -= 1;
        newCarts[index].thanhTien -= newCarts[index].giaSP;
        if (newCarts[index].soLuong === 0) {
          newCarts = newCarts.filter((shoe) => shoe.maSP !== maSP);
        }
      }
      setCartItems(newCarts);
    }
  };

  const onDeleteItemCart = (maSP) => {
    const index = findIndexCarts(maSP);
    let newCarts = [...cartItems];
    newCarts = newCarts.filter((shoe) => shoe.maSP !== maSP);
    setCartItems(newCarts);
  };
  return (
    <div>
      <h1 className="text-center text-3xl mt-2">Shoes Shop</h1>
      <CartShoe
        cartItemsProp={cartItems}
        onUpdateQtyCartsProp={onUpdateQtyCarts}
        onDeleteItemCartProp = {onDeleteItemCart}
      ></CartShoe>
      <ProductList
        shoesListProp={shoesList}
        onOpenModal={handleOpenModal}
        onGetCartItems={onGetCartItems}
      ></ProductList>
      {isModalOpen && (
        <Modal shoe={selectedShoe} onClose={handleCloseModal}></Modal>
      )}
    </div>
  );
};

export default ShoesStore;
