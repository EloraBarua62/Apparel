"use client";
import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { GoPlus } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks/hooks";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgHashtag } from "react-icons/cg";
import { FaSortAmountDownAlt } from "react-icons/fa";
import {
  createCategory,
  listDisplay,
  messageClear,
} from "../../../../lib/slices/categorySlice";
import toast from "react-hot-toast";
import { createSubCategory } from "../../../../lib/slices/subcategorySlice";

const AddCategory = () => {
  const { isLoading, successMessage, errorMessage, categoryInfo } =
    useAppSelector((state) => state.categorySlice);
  const [imageDisplay, setImageDisplay] = useState("");
  const [imageShow, setImageShow] = useState("");
  const [subcategoryImageDisplay, setSubcategoryImageDisplay] = useState("");
  const [subcategoryImageShow, setSubcategoryImageShow] = useState("");
  const [addNewCategory, setAddNewCategory] = useState(false);
  const [addNewSubCategory, setAddNewSubCategory] = useState(false);
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

  // Function: Add Image files
  const handleImage = (e: any) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImageDisplay(URL.createObjectURL(files[0]));
      setImageShow(files[0]);
    }
  };

  // Function: Add Subcategory Image files
  const handleSubcategoryImage = (e: any) => {
    let files = e.target.files;
    if (files.length > 0) {
      setSubcategoryImageDisplay(URL.createObjectURL(files[0]));
      setSubcategoryImageShow(files[0]);
    }
  };

  const handleCategoryRegistrationFrom = (e: any) => {
    const category_name = e.target.category_name.value;
    const formData = new FormData();
    formData.append("category_name", category_name);
    formData.append("category_image", subcategoryImageShow);
    dispatch(createCategory(formData));
    setAddNewCategory(!addNewCategory);
    e.preventDefault();
  };

  const handleSubcategoryRegistrationFrom = (e: any) => {
    const sub_category_name = e.target.sub_category_name.value;
    const category_id = e.target.category_id.value;
    const formData = new FormData();
    formData.append("sub_category_name", sub_category_name);
    formData.append("sub_category_image", subcategoryImageShow);
    formData.append("category_id", category_id);
    dispatch(createSubCategory(formData));
    setAddNewSubCategory(!addNewSubCategory);
    e.preventDefault();
  };

  const category_heading = [
    <CgHashtag key="first" />,
    "Category Image",
    "Category",
    "Sub_category",
    "Image",
    "Create on",
    "Update on",
    "Actions",
  ];

  return (
    <div className={styles.category_page_design}>
      <div className={styles.table_container}>
        <div className={styles.sub_heading}>Category</div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
          {/* Add category */}
          <div
            className={styles.add_category_button}
            onClick={() => setAddNewCategory(!addNewCategory)}
          >
            <GoPlus style={{ fontSize: "20px", color: "white" }} />
            Add Category
          </div>

          {/* Add sub-category */}
          <div
            className={styles.add_subcategory_button}
            onClick={() => setAddNewSubCategory(!addNewSubCategory)}
          >
            <GoPlus style={{ fontSize: "20px", color: "white" }} />
            Add Sub-Category
          </div>
        </div>

        {/* Search Options */}
        <div></div>

        {/* Category List */}
        <div>
          <div className={styles.information_container}>
            {category_heading.map((each, index) => (
              <div key={index} className={styles.text_box_container}>
                {each}
              </div>
            ))}
          </div>
          {categoryInfo.map(
            (
              category: {
                category_name: string;
                category_image: string;
                sub_category_name: Array<string>;
                sub_category_image: Array<string>;
                created_at: string;
                updated_at: string;
              },
              index
            ) => (
              <div key={index} className={styles.information_container}>
                <div className={styles.text_box_container}>{index + 1}</div>
                <div className={styles.image_container}>
                  <Image
                    src={category.category_image}
                    alt=""
                    fill
                    className={styles.image_design}
                  />
                </div>
                <div className={styles.text_box_container}>
                  {category.category_name}
                </div>
                <div className={styles.text_box_container}>
                  {category.sub_category_name.length > 0
                    ? category.sub_category_name.map((sub_name, i) => (
                        <div
                          key={i}
                          style={{
                            height: "50px",
                            marginBottom: "5px",
                            border: "1px",
                            borderColor: "red",
                          }}
                        >
                          {sub_name}
                        </div>
                      ))
                    : ""}
                </div>
                <div className={styles.sub_image_container}>
                  {category.sub_category_image.length > 0
                    ? category.sub_category_image.map((sub_image, i) =>
                        sub_image ? (
                          <div key={i} className={styles.inner_container}>
                            <Image
                              src={sub_image}
                              alt=""
                              fill
                              className={styles.image_design}
                            />
                          </div>
                        ) : null
                      )
                    : ""}
                  {/* {category.sub_category_image ? (
                    <Image
                      src={category.sub_category_image}
                      alt=""
                      fill
                      className={styles.image_design}
                    />
                  ) : null} */}
                </div>
                <div className={styles.text_box_container}>
                  {category.created_at}
                </div>
                <div className={styles.text_box_container}>
                  {category.updated_at}
                </div>
                <div className={styles.text_box_container}>
                  <button className={styles.edit_button_design}>Edit</button>
                  <button className={styles.delete_button_design}>
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {addNewCategory ? (
        <div className={styles.overlay_container}>
          <div className={styles.category_info_container}>
            <IoMdCloseCircleOutline
              className={styles.close_modal_button}
              onClick={() => setAddNewCategory(!addNewCategory)}
            />
            <form onSubmit={handleCategoryRegistrationFrom}>
              <div className={styles.field_design}>
                <label htmlFor="category_name">Category Name</label>
                <input
                  type="text"
                  name="category_name"
                  id="category_name"
                  placeholder="Enter category name..."
                  required
                />
              </div>
              <div className={styles.image_field_container}>
                <span className={styles.image_title}>Select Category Logo</span>
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

              <button
                type="submit"
                name="action"
                className={styles.submit_button}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
      {addNewSubCategory ? (
        <div className={styles.overlay_container}>
          <div className={styles.category_info_container}>
            <IoMdCloseCircleOutline
              className={styles.close_modal_button}
              onClick={() => setAddNewSubCategory(!addNewSubCategory)}
            />
            <form onSubmit={handleSubcategoryRegistrationFrom}>
              <div className={styles.field_design}>
                <label htmlFor="category_id">Select Category</label>
                <select name="category_id" id="" required>
                  {categoryInfo.map(
                    (
                      category: { category_id: number; category_name: string },
                      index
                    ) => (
                      <option key={index} value={category.category_id}>
                        {category.category_name}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className={styles.field_design}>
                <label htmlFor="sub_category_name">Sub Category Name</label>
                <input
                  type="text"
                  name="sub_category_name"
                  id="sub_category_name"
                  placeholder="Enter category name..."
                  required
                />
              </div>
              <div className={styles.image_field_container}>
                <span className={styles.image_title}>
                  Select Sub-category Logo
                </span>
                <div className={styles.image_field_design}>
                  <label htmlFor="image" className={styles.image_label}>
                    {subcategoryImageDisplay ? (
                      <Image
                        src={subcategoryImageDisplay}
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
                    onChange={handleSubcategoryImage}
                  />
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
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddCategory;
