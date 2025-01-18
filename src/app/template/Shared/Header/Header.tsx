"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "../../../../../public/apparel_logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { GoArrowSwitch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { page_navigation } from "../../../utils/demoData";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [openCartModal, setOpenCartModal] = useState(false);
  const [availableItems, setAvailableItems] = useState([]);

  const deleteCartItem = (id: number) => {
    const updatedItems = availableItems.filter((item, index) => index !== id);
    setAvailableItems(updatedItems);
    localStorage.setItem("cartState", JSON.stringify(updatedItems));
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartState"));
    setAvailableItems(data);
  }, [openCartModal, setAvailableItems]);
  // console.log(availableItems)
  return (
    <div className={styles.header_section}>
      {/* Resposive design of header */}

      {/* Header upper section */}
      <div className={styles.header_top_section}>
        {/* Project Logo */}
        <div className={styles.logo_container}>
          <Image
            src={logo}
            alt=""
            priority={true}
            className={styles.logo_design}
          />
        </div>

        {/* Product Search bar */}
        <div className={styles.search_product_section}>
          <input
            className={styles.textbar}
            type="text"
            name="search_products"
            id=""
            placeholder="Search Products ...."
          />
          <IoSearchOutline style={{ fontSize: "20px" }} />
        </div>

        {/* User purchase related info */}
        <div className={styles.purchase_support_section}>
          <div
            className={styles.product_histry}
            onClick={() => {
              setOpenCartModal(!openCartModal);
            }}
          >
            <BsCart2 style={{ fontSize: "20px" }} />
          </div>
          <div className={styles.product_histry}>
            <GoHeart style={{ fontSize: "20px" }} />
          </div>
          <div className={styles.product_histry}>
            <GoArrowSwitch style={{ fontSize: "20px" }} />
          </div>
        </div>
      </div>

      {/* Header bottom section */}
      <div className={styles.header_bottom_section}>
        <div className={styles.responsive_container}>
          {/* Category section design */}
          <div className={styles.category_title}>
            <RxHamburgerMenu
              style={{ fontSize: "20px", marginRight: "10px" }}
            />
            <div>Category</div>
            <IoIosArrowDown
              className={styles.down_arrow_design}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>

          {/* Routing */}
          <div className={styles.routing_section}>
            {page_navigation.map((page, index) =>
              page.route ? (
                <div key={index} className={styles.main_route_design}>
                  <Link href={page.route} className={styles.text_design}>
                    {page.title}
                  </Link>
                  <div className={styles.border_line}></div>
                </div>
              ) : (
                <div key={index} className={styles.sub_route_design}>
                  <div>{page.title}</div>
                  <IoIosArrowDown
                    className={styles.down_arrow_design}
                    style={{ fontSize: "15px" }}
                  />

                  <div className={styles.display_sub_routes_section}>
                    {page.sub_route.map((sub_page, sub_index) => (
                      <div key={sub_index} style={{ marginBottom: "10px" }}>
                        <Link
                          href={sub_page.sub_route}
                          className={styles.hover_design}
                        >
                          {sub_page.sub_title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {openCartModal ? (
        <div className={styles.overlay_container}>
          <div className={styles.cart_modal_design}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: '10px'
              }}
            >
              <div className={styles.title}>Shopping Cart</div>
              <div
                className={styles.close_button_design}
                onClick={() => {
                  setOpenCartModal(!openCartModal);
                }}
              >
                Close <IoIosClose style={{ fontSize: "24px" }} />
              </div>
            </div>
            {availableItems.map((each, index) => (
              <div key={index} className={styles.item_container}>
                <div className={styles.product_image_container}>
                  <Image
                    src={each.product_image}
                    alt=""
                    fill
                    className={styles.product_image_design}
                  ></Image>
                </div>
                <div className={styles.product_info}>
                  <div className={styles.title}>{each.name}</div>
                  <div>{each.color}</div>
                </div>
                <IoIosClose onClick={() => deleteCartItem(index)} style={{ fontSize: "40px", marginLeft: '10px' }} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
