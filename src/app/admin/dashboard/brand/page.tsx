'use client'
import { GoPlus } from "react-icons/go";
import styles from "./Brand.module.scss";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { useAppDispatch } from "../../../../lib/hooks/hooks";
import { createBrand } from "../../../../lib/slices/brandSlice";

const Brand = () => {
  const [addNewBrand, setAddNewBrand] = useState(false);
  const [backgrondDisplay, setBackgrondDisplay] = useState("");
  const [brandBackgrondShow, setBrandBackgrondShow] = useState("");
  const [logoDisplay, setLogoDisplay] = useState("");
  const [brandLogoShow, setBrandLogoShow] = useState("");
  const dispatch = useAppDispatch();

  // Function: Add Logo files
  const handleLogo = (e: any) => {
    let files = e.target.files;
    if (files.length > 0) {
      setLogoDisplay(URL.createObjectURL(files[0]));
      setBrandLogoShow(files[0]);
    }
  };

  // Function: Add BackgroundImage files
  const handleBackgroundImage = (e: any) => {
    let files = e.target.files;
    if (files.length > 0) {
      setBackgrondDisplay(URL.createObjectURL(files[0]));
      setBrandBackgrondShow(files[0]);
    }
  };

  const handleBrandRegistrationFrom = (e: any) => {
    const brand_name = e.target.brand_name.value;
    const brand_status = e.target.brand_status.value;
    const brand_details = e.target.brand_details.value;
    const formData = new FormData();
    formData.append("brand_name", brand_name);
    formData.append("brand_status", brand_status);
    formData.append("brand_details", brand_details);
    formData.append("logo_image", brandLogoShow);
    formData.append("background_image", brandBackgrondShow);
    dispatch(createBrand(formData));
    setAddNewBrand(!addNewBrand);
    e.preventDefault();
  };

  return (
    <div className={styles.brand_page_design}>
      <div className={styles.table_container}>
        <div className={styles.sub_heading}>Brand</div>

        {/* Add brand */}
        <div
          className={styles.add_brand_button}
          onClick={() => setAddNewBrand(!addNewBrand)}
        >
          <GoPlus style={{ fontSize: "20px", color: "white" }} />
          Add Brand
        </div>
      </div>

      {addNewBrand ? (
        <div className={styles.overlay_container}>
          <div className={styles.brand_info_container}>
            <IoMdCloseCircleOutline
              className={styles.close_modal_button}
              onClick={() => setAddNewBrand(!addNewBrand)}
            />
            <div style={{fontSize: '20px', textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>New Brand</div>
            <form onSubmit={handleBrandRegistrationFrom}>
              <div className={styles.left_right_section}>
                <div className={styles.single_container}>
                  <div className={styles.field_design}>
                    <label htmlFor="brand_name">Brand Name</label>
                    <input
                      type="text"
                      name="brand_name"
                      id="brand_name"
                      placeholder="Enter brand name..."
                      required
                    />
                  </div>
                  <div className={styles.field_design}>
                    <label htmlFor="brand_status">Status</label>
                    <input
                      type="text"
                      name="brand_status"
                      id="brand_status"
                      placeholder="Write best quality..."
                      required
                    />
                  </div>
                  <div className={styles.image_field_container}>
                    <span className={styles.image_title}>
                      Select Brand Logo
                    </span>
                    <div className={styles.image_field_design}>
                      <label
                        htmlFor="logo_image"
                        className={styles.image_label}
                      >
                        {logoDisplay ? (
                          <Image
                            src={logoDisplay}
                            alt=""
                            fill={true}
                            className={styles.image_display}
                          />
                        ) : (
                          <>
                            <span className={styles.icon_size}>
                              <CiImageOn />
                            </span>
                            <span>Select Logo</span>
                          </>
                        )}
                      </label>
                      <input
                        type="file"
                        name="logo_image"
                        id="logo_image"
                        className={styles.image_file}
                        placeholder="Image"
                        required
                        onChange={handleLogo}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.single_container}>
                  <div className={styles.field_design}>
                    <label htmlFor="brand_details">Brand Details</label>
                    <textarea
                      name="brand_details"
                      id="brand_details"
                      placeholder="Describe about brand"
                    />
                  </div>
                  <div className={styles.image_field_container}>
                    <span className={styles.image_title}>
                      Select Background Image
                    </span>
                    <div className={styles.image_field_design}>
                      <label
                        htmlFor="background_image"
                        className={styles.image_label}
                      >
                        {backgrondDisplay ? (
                          <Image
                            src={backgrondDisplay}
                            alt=""
                            fill={true}
                            className={styles.image_display}
                          />
                        ) : (
                          <>
                            <span className={styles.icon_size}>
                              <CiImageOn />
                            </span>
                            <span>Image</span>
                          </>
                        )}
                      </label>
                      <input
                        type="file"
                        name="background_image"
                        id="background_image"
                        className={styles.image_file}
                        placeholder=" background Image"
                        required
                        onChange={handleBackgroundImage}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  type="submit"
                  name="action"
                  className={styles.submit_button}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Brand;
