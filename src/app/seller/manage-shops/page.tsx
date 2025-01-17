"use client";
import { useEffect } from "react";
import DesignContainer from "../../template/Shared/DesignContainer/DesignContainer";
import Footer from "../../template/Shared/Footer/Footer";
import Header from "../../template/Shared/Header/Header";
import PageNavigation from "../../template/Shared/PageNavigation/PageNavigation";
import styles from "./ManageShops.module.scss";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/hooks";
import { listDisplay, messageClear } from "../../../lib/slices/shopSlice";
import background from "../../../../public/shopping.jpg";
import Image from "next/image";
import Link from "next/link";

const ManageShops = () => {
  const { isLoading, successMessage, errorMessage, shopInfo } = useAppSelector(
    (state) => state.shopSlice
  );
  const dispatch = useAppDispatch();

  // Display status message
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage, dispatch]);

  // Display category data
  useEffect(() => {
    dispatch(listDisplay());
  }, [dispatch]);

  return (
    <div className={styles.manage_shop_page_setup}>
      <Header />
      <PageNavigation main={"Seller"} sub={"Manage Your Shops"} />
      <DesignContainer heading={"Shops Information"}>
        <div className={styles.shop_display}>
          {shopInfo.map(
            (
              shop: { shop_name: string; image_show: string; shop_id: number },
              index
            ) => (
              <div key={index} className={styles.shop_info_container}>
                {/* Background image and logo */}
                <div className={styles.image_container}>
                  <div className={styles.background_image_container}>
                    <Image
                      src={background}
                      alt=""
                      fill
                      className={styles.background_image_design}
                    />
                  </div>
                  <div className={styles.logo_container}>
                    <Image
                      src={shop.image_show}
                      alt=""
                      fill
                      className={styles.logo_design}
                    />
                  </div>
                </div>

                {/* Shop information */}
                <div className={styles.shop_name}>{shop.shop_name}</div>
                <div className={styles.shop_rating}>rating</div>

                {/* Selling information */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <div className={styles.selling_info}>
                    <span style={{ color: "gray" }}>Items</span>
                    <span>140</span>
                  </div>
                  <div className={styles.selling_info}>
                    <span style={{ color: "gray" }}>Sells</span>
                    <span>140</span>
                  </div>
                  <div className={styles.selling_info}>
                    <span style={{ color: "gray" }}>Vendor</span>
                    <span>140</span>
                  </div>
                </div>

                <div className={styles.details_button_design}>
                  <Link
                    className={styles.link_decoration}
                    href={{
                      pathname: "/seller/shop-details",
                      query: { id: shop.shop_id },
                    }}
                  >
                    View Shop
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </DesignContainer>
      <Footer />
    </div>
  );
};

export default ManageShops;
