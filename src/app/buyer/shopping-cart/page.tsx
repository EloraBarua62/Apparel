"use client";
import { useEffect, useState } from "react";
import DesignContainer from "../../template/Shared/DesignContainer/DesignContainer";
import Header from "../../template/Shared/Header/Header";
import PageNavigation from "../../template/Shared/PageNavigation/PageNavigation";
import styles from "./ShoppingCart.module.scss";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/hooks";
import { allProduct } from "../../../lib/slices/productSlice";

const ShoppingCart = () => {
  const { productInfo } = useAppSelector((state) => state.productSlice);
  const [availableCarts, setAvailableCarts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [querySearch, setQuerySearch] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const info = {
      category_id: selectedCategory,
      size: selectedSizes,
      color: selectedColor,
      rating: selectedRating,
      brand_id: selectedBrand,
      query: querySearch,
    };

    dispatch(allProduct(info));
  }, [
    dispatch,
    querySearch,
    selectedBrand,
    selectedCategory,
    selectedColor,
    selectedRating,
    selectedSizes,
  ]);


  useEffect(() => {
    const cartInfo = JSON.parse(localStorage.getItem("cartState"));
    for (let product of productInfo) {
      for (let cart of cartInfo) {
        if ((product as any).product_id === cart.id) {
          setAvailableCarts([...availableCarts, product]);
        }
      }
    }
    console.log(availableCarts);
  },[]);
  return (
    <div className={styles.shopping_page_setup}>
      <Header />
      <PageNavigation main={"Buyer"} sub={"My Shopping Cart"} />

      <DesignContainer heading={"Cart Details"}>
        <div className={styles.cart_item_display}>
          {availableCarts.map((cart, index) => (
            <div key={index}>{cart.product_name}</div>
          ))}
        </div>
      </DesignContainer>
    </div>
  );
};

export default ShoppingCart;
