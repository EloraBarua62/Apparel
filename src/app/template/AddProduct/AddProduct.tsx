import styles from "./AddProduct.module.scss";
import Image from "next/image";
import {
  new_products_left,
  new_products_right,
  sizes,
  color
} from "../../utils/demoData";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../lib/hooks/hooks";
import { createProduct } from "../../../lib/slices/productSlice";
import { BsImage } from "react-icons/bs";

const AddProduct = ({ categoryInfo, brandInfo, subCategoryInfo }) => {
  const [images, setImages] = useState([]);
  const [imagesShow, setImagesShow] = useState([]);
  const [selectCategory, setSelectCategory] = useState(1);
  
  const [addColor, setAddColor] = useState([]);
  const [addImage, setAddImage] = useState([]);
  const dispatch = useAppDispatch();

  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];

      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImagesShow([...imagesShow, ...imageUrl]);
    }
    console.log(images);
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imagesShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImagesShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  // Function: Add Image files
  // const handleImage = (e: any) => {
  //   let files = e.target.files;
  //   if (files.length > 0) {
  //     setImageDisplay(URL.createObjectURL(files[0]));
  //     setImageShow(files[0]);
  //   }
  // };
  const handleProductRegistrationFrom = (e: any) => {
    e.preventDefault();

    const product_name = e.target.product_name.value;
    const brand_id = e.target.brand_id.value;
    const category_id = e.target.category_id.value;
    const sub_category_id = e.target.sub_category_id.value;
    const sku = e.target.sku.value;
    const description = e.target.description.value;
    const unit_price = e.target.unit_price.value;
    const discount = e.target.discount.value;
    const in_stock = e.target.in_stock.value;
    const on_order = e.target.on_order.value;
    const reorder_level = e.target.reorder_level.value;
    const size = e.target.size.value;

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("color", JSON.stringify(addColor));
    formData.append("brand_id", brand_id);
    formData.append("size", size);
    formData.append("category_id", category_id);
    formData.append("sub_category_id", sub_category_id);
    formData.append("sku", sku);
    formData.append("description", description);
    formData.append("unit_price", unit_price);
    formData.append("discount", discount);
    formData.append("in_stock", in_stock);
    formData.append("on_order", on_order);
    formData.append("reorder_level", reorder_level);
    
    for (let i = 0; i < images.length; i++) {
      formData.append("product_image", images[i]);
    }

    console.log(
      product_name,
      color,
      brand_id,
      category_id,
      sub_category_id,
      size,
    );

    dispatch(createProduct(formData));
  };


  return (
    <div className={styles.shop_info_container}>
      <form onSubmit={handleProductRegistrationFrom}>
        <div className={styles.form_inner_container}>
          <div>
            {new_products_left.map((each, index) => (
              <div key={index}>
                <label htmlFor={each.field_label}>{each.field_name}</label>
                {each.field_label === "description" ? (
                  <textarea
                    name={each.field_label}
                    id={each.field_label}
                    placeholder={each.placehold}
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
            <div>
              <label htmlFor="category">Category</label>
              <select
                name="category_id"
                onChange={(e) => setSelectCategory(parseInt(e.target.value))}
              >
                {categoryInfo.map(
                  (
                    each: {
                      category_id: number;
                      category_name: string;
                    },
                    index: any
                  ) => (
                    <option value={each.category_id} key={index}>
                      {each.category_name}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <label htmlFor="sub_category">Sub Category</label>
              <select name="sub_category_id">
                {subCategoryInfo
                  .filter((each: any) => each.category_id === selectCategory)
                  .map(
                    (
                      each: {
                        sub_category_id: number;
                        sub_category_name: string;
                      },
                      index: number
                    ) => (
                      <option value={each.sub_category_id} key={index}>
                        {each.sub_category_name}
                      </option>
                    )
                  )}
              </select>
            </div>
            <div>
              <label htmlFor="size">Size</label>
              <select name="size">
                {sizes.map((each, index: any) => (
                  <option value={each.name} key={index}>
                    {each.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <select name="brand_id">
                {brandInfo.map(
                  (
                    each: {
                      brand_id: number;
                      brand_name: string;
                    },
                    index: any
                  ) => (
                    <option value={each.brand_id} key={index}>
                      {each.brand_name}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <div>
            {new_products_right.map((each, index) => (
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

            <div
              style={{ display: "flex", justifyContent: "start", gap: "40px" }}
            >
              <span className={styles.image_title}>Add Image</span>
              <span className={styles.image_title}>Add Color</span>
            </div>

            <div className={styles.images_upload_section}>
              {imagesShow.map((img, i) => (
                <div key={i} className={styles.color_image_container}>
                  <div className={styles.image_field}>
                    <label
                      htmlFor={`${i}`}
                      className={styles.image_content_design}
                    >
                      <Image
                        src={img.url}
                        alt=""
                        fill={true}
                        className={styles.image_design}
                      />
                    </label>
                    <input
                      type="file"
                      id={`${i}`}
                      onChange={(e) => changeImage(e.target.files[0], i)}
                    />
                  </div>
                  <select
                    name="color"
                    onChange={(e) => setAddColor([...addColor, e.target.value])}
                  >
                    {color.map(
                      (
                        each: {
                          name: string;
                        },
                        index: any
                      ) => (
                        <option key={index} value={each.name}>{each.name}</option>
                      )
                    )}
                  </select>
                </div>
              ))}
              <div className={styles.image_field_empty}>
                <label htmlFor="picture">
                  <span>
                    <BsImage />
                  </span>
                  <span>Select Image</span>
                </label>
                <input
                  multiple
                  onChange={imageHandle}
                  type="file"
                  name="picture"
                  id="picture"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" name="action" className={styles.submit_button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
