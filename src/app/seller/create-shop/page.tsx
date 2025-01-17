'use client'
import React, { useState } from 'react';
import styles from './CreateShop.module.scss'
import PageNavigation from '../../template/Shared/PageNavigation/PageNavigation';
import DesignContainer from '../../template/Shared/DesignContainer/DesignContainer';
import { create_shop_info_left, create_shop_info_right } from '../../utils/demoData';
import Image from 'next/image';
import { CiImageOn } from "react-icons/ci";
import { useAppDispatch } from '../../../lib/hooks/hooks';
import { createShop } from '../../../lib/slices/shopSlice';
import Header from '../../template/Shared/Header/Header';
import Footer from '../../template/Shared/Footer/Footer';

 
const CreateShop = () => {
  const [imageDisplay, setImageDisplay] = useState("");
  const [imageShow, setImageShow] = useState("");
  const email = "prova@gmail.com";
  const dispatch = useAppDispatch();

  // Function: Add Image files
  const handleImage = (e: any) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImageDisplay(URL.createObjectURL(files[0]));
      setImageShow(files[0]);
    }
  };

  // Function: Submit Shop resigtration form
  const handleShopRegistrationFrom = (e: any) => {
    const shop_name = e.target.shop_name.value;
    const shop_details = e.target.shop_details.value;
    const shop_location = e.target.shop_location.value;
    const contact = e.target.contact.value;
    const bank_name = e.target.bank_name.value;
    const branch_name = e.target.branch_name.value;
    const account_no = e.target.account_no.value;
    const facebook = e.target.facebook.value;
    const instagram = e.target.instagram.value;
    console.log(email)

    const formData = new FormData();
    formData.append("email", email);
    formData.append("shop_name", shop_name);
    formData.append("shop_details", shop_details);
    formData.append("shop_location", shop_location);
    formData.append("contact", contact);
    formData.append("bank_name", bank_name);
    formData.append("branch_name", branch_name);
    formData.append("account_no", account_no);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("image_show", imageShow);

    dispatch(createShop(formData));
    e.preventDefault();
  };


  return (
    <div className={styles.create_shop_page_setup}>
      <Header/>
      <PageNavigation main={"Seller"} sub={"Create New Shop"} />
      <DesignContainer heading={"Shop Information"}>
        <div className={styles.shop_info_container}>
          <form onSubmit={handleShopRegistrationFrom}>
            <div className={styles.form_inner_container}>
              <div>
                {create_shop_info_left.map((each, index) => (
                  <div key={index} className={styles.field_design}>
                    <label htmlFor={each.field_label}>{each.field_name}</label>
                    {each.field_label === "shop_details" ? (
                      <textarea
                        name={each.field_label}
                        id={each.field_label}
                        placeholder={each.placehold}
                        className={styles.textarea_design}
                      />
                    ) : (
                      <input
                        type="text"
                        name={each.field_label}
                        id={each.field_label}
                        placeholder={each.placehold}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div>
                {create_shop_info_right.map((each, index) => (
                  <div key={index} className={styles.field_design}>
                    <label htmlFor={each.field_label}>{each.field_name}</label>
                    <input
                      type="text"
                      name={each.field_label}
                      id={each.field_label}
                      placeholder={each.placehold}
                    />
                  </div>
                ))}
                <div className={styles.image_field_container}>
                  <span className={styles.image_title}>Select shop logo</span>
                  <div className={styles.image_field_design}>
                    <label htmlFor="image" className={styles.image_label}>
                      {imageDisplay ? (
                        <Image
                          src={imageDisplay}
                          alt=""
                          fill={true}
                          className={styles.image_display}
                        />
                      ) : (
                        <>
                          <span className={styles.icon_size}>
                            <CiImageOn />
                          </span>
                          <span>Select Image</span>
                        </>
                      )}
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className={styles.image_file}
                      placeholder="Image"
                      required
                      onChange={handleImage}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              name="action"
              className={styles.submit_button}
            >
              Submit
            </button>
          </form>
        </div>
      </DesignContainer>
      <Footer/>
    </div>
  );
};

export default CreateShop;