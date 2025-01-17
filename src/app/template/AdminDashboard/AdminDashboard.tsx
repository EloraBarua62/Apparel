'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AdminDashboard.module.scss";
import Image from "next/image";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { TbCategoryPlus } from "react-icons/tb";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { IoRibbonOutline } from "react-icons/io5";


const AdminDashboard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
    const dashboard_navigation = [
      {
        title: "Home",
        route: "/admin/dashboard/main",
        icon: <AiOutlineDashboard />,
      },
      {
        title: "Order",
        route: "/admin/dashboard/order",
        icon: <FiShoppingCart />,
      },
      {
        title: "Category",
        route: "/admin/dashboard/category",
        icon: <TbCategoryPlus />,
      },
      {
        title: "Brand",
        route: "/admin/dashboard/brand",
        icon: <IoRibbonOutline />,
      },
      {
        title: "Sellers",
        route: "/admin/dashboard/seller",
        icon: <LiaPeopleCarrySolid />,
      },
      {
        title: "Customers",
        route: "/admin/dashboard/customers",
        icon: <MdOutlinePeopleAlt />,
      },
      {
        title: "Stores",
        route: "/admin/dashboard/stores",
        icon: <BsShop />,
      },
      {
        title: "Products",
        route: "/admin/dashboard/all-product",
        icon: <AiOutlineShopping />,
      },
      {
        title: "Commission",
        route: "/admin/dashboard/commission",
        icon: <BsCashCoin />,
      },
      {
        title: "Shipping",
        route: "/admin/dashboard/shipping",
        icon: <LiaShippingFastSolid />,
      },
      {
        title: "Profile",
        route: "/admin/dashboard/profile",
        icon: <CgProfile />,
      },
    ];

  return (
    <div
      className={`${styles.admin_dashboard_container} ${
        openMenu ? styles.open_dashboard : styles.close_dashboard
      }`}
    >
      <div
        className={styles.arrow_design}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MdKeyboardArrowRight style={{ fontSize: "25px", color: "white" }} />
      </div>

      {dashboard_navigation.map((each, index) => (
        <div key={index} className={styles.route_container}>
          <Link
            style={{
              fontSize: "25px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            href={each.route}
          >
            {each.icon}
          </Link>
          <div className={styles.route_design}>
            <Link href={each.route} className={styles.text_styling}>
              {each.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
