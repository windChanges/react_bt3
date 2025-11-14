import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { shoesListProp,onOpenModal,onGetCartItems} = props;

  const renderListShoes = () => {
    return shoesListProp.map((shoe) => {
      return <ProductItem key={shoe.id} shoesListProp={shoe} onOpenModal={onOpenModal} onGetCartItems = {onGetCartItems}></ProductItem>;
    });
  };

  return(
    <div className="grid grid-cols-3 w-[80%] mx-auto mt-5 gap-4">
        {renderListShoes()}
    </div>
  )
};

export default ProductList;
