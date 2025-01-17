"use client";
import { useSearchParams } from "next/navigation";
import styles from "./ShopDetails.module.scss";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/hooks";
import Header from "../../template/Shared/Header/Header";
import Image from "next/image";
import background from "../../../../public/collections/navigation_backgound.jpg";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import DesignContainer from "../../template/Shared/DesignContainer/DesignContainer";
import Footer from "../../template/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import AddProduct from "../../template/AddProduct/AddProduct";
import DisplayProducts from "../../template/DisplayProducts/DisplayProducts";
import CurrentComponent from "../../template/CurrentComponent/CurrentComponent";
import { MdOutlineArrowDropDown } from "react-icons/md";
import down_arrow from "../../../../public/down arrow.png";
import test from "../../../../public/slider1.jpg";
import { listDisplay } from "../../../lib/slices/categorySlice";
import { allBrand } from "../../../lib/slices/brandSlice";
import { subcategoryList } from "../../../lib/slices/subCategorySlice";

const ShopDetails = () => {
  const { productInfo } = useAppSelector((state) => state.productSlice);
  const { categoryInfo } = useAppSelector((state) => state.categorySlice);
  const { subCategoryInfo } = useAppSelector((state) => state.subCategorySlice);
  const { brandInfo } = useAppSelector((state) => state.brandSlice);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const dispatch = useAppDispatch();

  const [activeComponent, setActiveComponent] = useState(1);


  type ShopFields = {
    shop_name: string,
    shop_details: string,
    contact: string,
    shop_location: string,
    facebook: string,
    instagram: string,
    image_show: string,
  };

  useEffect(() => {
    dispatch(listDisplay());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allBrand());
  }, [dispatch]);

  useEffect(() => {
    dispatch(subcategoryList());
  }, [dispatch]);
  return (
    <div className={styles.shop_details_page_setup}>
      <Header />
      <div className={styles.banner_section}>
        <div className={styles.background_image_container}>
          <Image
            src={background}
            alt=""
            fill
            className={styles.background_image_design}
          />
        </div>
        <div className={styles.short_intro_container}>
          {/* Shop identity */}
          <div className={styles.left_section}>
            {/* Logo */}
            <div className={styles.logo_container}>
              <Image src={test} alt="" fill className={styles.logo_design} />
            </div>

            {/* Shop title */}
            {/* <div className={styles.shop_name_design}>{my_shop.shop_name}</div> */}
            <div>rating</div>
            <div className={styles.selling_status}>Remarks | 200 sell</div>
          </div>

          {/* Shop Description */}
          <div className={styles.middle_section}>
            {/* {my_shop.shop_details} */}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nobis earum, nihil adipisci quos expedita aliquam assumenda, minus
              illo dolores, dolore nam dicta iste officia. Hic, temporibus! Sit
              sapiente, eveniet quis atque odit rerum numquam, repudiandae
              repellendus beatae, quibusdam ipsam eaque! Unde facilis amet,
              nulla asperiores suscipit consequatur! Eius adipisci laborum
              dolores quam alias sunt dolorem. Architecto,
            </span>
          </div>

          {/* Contact Details */}
          <div className={styles.right_section}>
            <div className={styles.title}>Follow Us</div>
            <div className={styles.social_media_link}>
              <SiInstagram className={styles.contact_icon_design} />
              <FaFacebook className={styles.contact_icon_design} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaPhone className={styles.phone_design} />
              {/* {my_shop.contact} */}
            </div>
          </div>
        </div>
      </div>
      <DesignContainer heading={""}>
        <div className={styles.state_navigation}>
          <div
            className={styles.each_state}
            onClick={() => {
              setActiveComponent(1);
            }}
          >
            Add Product
          </div>
          <div
            className={styles.each_state}
            onClick={() => {
              setActiveComponent(2);
            }}
          >
            View Product
          </div>
          <div
            className={`${styles.active_class}  ${
              activeComponent === 1
                ? styles.active_class1
                : styles.active_class2
            }`}
          >
            <MdOutlineArrowDropDown className={styles.icon_design} />
          </div>
        </div>

        {/* <CurrentComponent holdState={holdState} /> */}
        {activeComponent === 1 && (
          <AddProduct
            categoryInfo={categoryInfo}
            brandInfo={brandInfo}
            subCategoryInfo={subCategoryInfo}
          />
        )}
        {activeComponent === 2 && (
          <DisplayProducts
            categoryInfo={categoryInfo}
            brandInfo={brandInfo}
            productInfo={productInfo}
          />
        )}
      </DesignContainer>
      <Footer />
    </div>
  );
};

export default ShopDetails;
