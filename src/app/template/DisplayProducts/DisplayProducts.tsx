import styles from "./DisplayProducts.module.scss";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { sizes, rating, color } from "../../utils/demoData";
import Image from "next/image";
import { Key, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/hooks";
import { allProduct } from "../../../lib/slices/productSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DisplayProducts = ({ categoryInfo, brandInfo, productInfo }) => {
  const [toogleCriteria, setToogleCriteria] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [querySearch, setQuerySearch] = useState("");
  const [productColor, setProductColor] = useState(0);
  const [productNumber, setProductNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const handleToogleCriteria = (criteria_no: number) => {
    if (toogleCriteria === criteria_no) setToogleCriteria(0);
    else setToogleCriteria(criteria_no);
  };

  useEffect(() => {
    const info = {
      category_id: selectedCategory,
      size: selectedSizes,
      color: selectedColor,
      rating: selectedRating,
      brand_id: selectedBrand,
      query: querySearch,
    };
    console.log(info);

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

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // className: "center",
    // infinite: false,
    // centerPadding: "60px",
    // slidesToShow: 5,
    // swipeToSlide: true,
    // dot: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };

  return (
    <div className={styles.display_products_container}>
      {/* Filter functionality */}
      <div className={`${styles.search_function} ${styles.display_setup}`}>
        {/* Search bar */}
        <div className={styles.field_design}>
          <input
            type="text"
            onChange={(e) => setQuerySearch(e.target.value)}
            id=""
            placeholder="Search here..."
          />
          <IoIosSearch />
        </div>

        {/* Criteria */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(1)}
          >
            <div className={styles.title}>Category</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 1
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>

          {toogleCriteria === 1 ? (
            <ul className={styles.criteria_list}>
              {categoryInfo.map(
                (
                  each: {
                    category_id: number;
                    category_name: string;
                  },
                  index: Key
                ) => (
                  <li
                    onClick={() => {
                      if (!selectedCategory.includes(each.category_id)) {
                        setSelectedCategory([
                          ...selectedCategory,
                          each.category_id,
                        ]);
                      } else {
                        setSelectedCategory(
                          selectedCategory.filter(
                            (id) => id !== each.category_id
                          )
                        );
                      }
                    }}
                    className={styles.list_design}
                    key={index}
                  >
                    <label htmlFor={each.category_name}>
                      {each.category_name}
                    </label>
                    <input
                      type="checkbox"
                      name={each.category_name}
                      value={each.category_id}
                    />
                  </li>
                )
              )}
            </ul>
          ) : (
            ""
          )}
        </form>

        {/* Sizes */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(2)}
          >
            <div className={styles.title}>Sizes</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 2
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>
          {toogleCriteria === 2 ? (
            <ul className={styles.criteria_list}>
              {sizes.map((each: { name: string }, index) => (
                <li
                  onClick={() => {
                    if (!selectedSizes.includes(each.name)) {
                      setSelectedSizes([...selectedSizes, each.name]);
                    } else {
                      setSelectedSizes(
                        selectedSizes.filter((id) => id !== each.name)
                      );
                    }
                  }}
                  className={styles.name}
                  key={index}
                >
                  <label htmlFor={each.name}>{each.name}</label>
                  <input type="checkbox" name={each.name} value={each.name} />
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </form>

        {/* Rating */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(3)}
          >
            <div className={styles.title}>Rating</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 3
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>
          {toogleCriteria === 3 ? (
            <ul className={styles.criteria_list}>
              {rating.map((each, index) => (
                <li
                  onClick={() => {
                    if (!selectedRating.includes(each.option)) {
                      setSelectedRating([...selectedRating, each.option]);
                    } else {
                      setSelectedRating(
                        selectedRating.filter((id) => id !== each.option)
                      );
                    }
                  }}
                  className={styles.name}
                  key={index}
                >
                  <label htmlFor={each.name}>{each.option}</label>
                  <input
                    type="checkbox"
                    name={each.name}
                    id={each.name}
                    value={each.option}
                  />
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </form>

        {/* Color */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(4)}
          >
            <div className={styles.title}>Color</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 4
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>
          {toogleCriteria === 4 ? (
            <ul className={styles.criteria_list}>
              {color.map((each, index) => (
                <li
                  onClick={() => {
                    if (!selectedColor.includes(each.name)) {
                      setSelectedColor([...selectedColor, each.name]);
                    } else {
                      setSelectedColor(
                        selectedColor.filter((id) => id !== each.name)
                      );
                    }
                  }}
                  className={styles.name}
                  key={index}
                >
                  <label htmlFor={each.name}>{each.name}</label>
                  <input
                    type="checkbox"
                    name={each.name}
                    id={each.name}
                    value={each.name}
                  />
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </form>

        {/* Brand */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(5)}
          >
            <div className={styles.title}>Brand</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 5
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>
          {toogleCriteria === 5 ? (
            <ol className={styles.criteria_list}>
              {brandInfo.map(
                (
                  each: {
                    brand_id: number;
                    brand_name: string;
                  },
                  index: Key
                ) => (
                  <li
                    onClick={() => {
                      if (!selectedBrand.includes(each.brand_id)) {
                        setSelectedBrand([...selectedBrand, each.brand_id]);
                      } else {
                        setSelectedBrand(
                          selectedBrand.filter((id) => id !== each.brand_id)
                        );
                      }
                    }}
                    className={styles.name}
                    key={index}
                  >
                    <label htmlFor={each.brand_name}>{each.brand_name}</label>
                    <input
                      type="checkbox"
                      name={each.brand_name}
                      id={each.brand_name}
                      value={each.brand_id}
                    />
                  </li>
                )
              )}
            </ol>
          ) : (
            ""
          )}
        </form>
      </div>

      {/* Mobile responsive */}
      <div
        className={`${styles.search_function_mobile} ${
          openModal ? styles.close : styles.open
        }`}
      >
        <div className={styles.top_property_design}>
          <h1>Filter Item</h1>
          <button onClick={() => setOpenModal(!openModal)}>Close</button>
        </div>
        {/* Search bar */}
        <div className={styles.field_design}>
          <input
            type="text"
            onChange={(e) => setQuerySearch(e.target.value)}
            id=""
            placeholder="Search here..."
          />
          <IoIosSearch />
        </div>

        {/* Criteria */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(1)}
          >
            <div className={styles.title}>Category</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 1
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>

          {toogleCriteria === 1 ? (
            <ul className={styles.criteria_list}>
              {categoryInfo.map(
                (
                  each: {
                    category_id: number;
                    category_name: string;
                  },
                  index: Key
                ) => (
                  <li
                    onClick={() => {
                      if (!selectedCategory.includes(each.category_id)) {
                        setSelectedCategory([
                          ...selectedCategory,
                          each.category_id,
                        ]);
                      } else {
                        setSelectedCategory(
                          selectedCategory.filter(
                            (id) => id !== each.category_id
                          )
                        );
                      }
                    }}
                    className={styles.list_design}
                    key={index}
                  >
                    <label htmlFor={each.category_name}>
                      {each.category_name}
                    </label>
                    <input
                      type="checkbox"
                      name={each.category_name}
                      value={each.category_id}
                    />
                  </li>
                )
              )}
            </ul>
          ) : (
            ""
          )}
        </form>

        {/* Sizes */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(2)}
          >
            <div className={styles.title}>Sizes</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 2
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>
          {toogleCriteria === 2 ? (
            <ul className={styles.criteria_list}>
              {sizes.map((each: { name: string }, index) => (
                <li
                  onClick={() => {
                    if (!selectedSizes.includes(each.name)) {
                      setSelectedSizes([...selectedSizes, each.name]);
                    } else {
                      setSelectedSizes(
                        selectedSizes.filter((id) => id !== each.name)
                      );
                    }
                  }}
                  className={styles.name}
                  key={index}
                >
                  <label htmlFor={each.name}>{each.name}</label>
                  <input type="checkbox" name={each.name} value={each.name} />
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </form>

        {/* Rating */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(3)}
          >
            <div className={styles.title}>Rating</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 3
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>
          {toogleCriteria === 3 ? (
            <ul className={styles.criteria_list}>
              {rating.map((each, index) => (
                <li
                  onClick={() => {
                    if (!selectedRating.includes(each.option)) {
                      setSelectedRating([...selectedRating, each.option]);
                    } else {
                      setSelectedRating(
                        selectedRating.filter((id) => id !== each.option)
                      );
                    }
                  }}
                  className={styles.name}
                  key={index}
                >
                  <label htmlFor={each.name}>{each.option}</label>
                  <input
                    type="checkbox"
                    name={each.name}
                    id={each.name}
                    value={each.option}
                  />
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </form>

        {/* Color */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(4)}
          >
            <div className={styles.title}>Color</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 4
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>
          {toogleCriteria === 4 ? (
            <ul className={styles.criteria_list}>
              {color.map((each, index) => (
                <li
                  onClick={() => {
                    if (!selectedColor.includes(each.name)) {
                      setSelectedColor([...selectedColor, each.name]);
                    } else {
                      setSelectedColor(
                        selectedColor.filter((id) => id !== each.name)
                      );
                    }
                  }}
                  className={styles.name}
                  key={index}
                >
                  <label htmlFor={each.name}>{each.name}</label>
                  <input
                    type="checkbox"
                    name={each.name}
                    id={each.name}
                    value={each.name}
                  />
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </form>

        {/* Brand */}
        <form>
          <div
            className={styles.criteria_container}
            onClick={() => handleToogleCriteria(5)}
          >
            <div className={styles.title}>Brand</div>
            <IoIosArrowDown
              className={`${styles.arrow_design} ${
                toogleCriteria === 5
                  ? styles.up_arrow_design
                  : styles.down_arrow_design
              }`}
              style={{ fontSize: "20px", marginLeft: "auto" }}
            />
          </div>
          {toogleCriteria === 5 ? (
            <ol className={styles.criteria_list}>
              {brandInfo.map(
                (
                  each: {
                    brand_id: number;
                    brand_name: string;
                  },
                  index: Key
                ) => (
                  <li
                    onClick={() => {
                      if (!selectedBrand.includes(each.brand_id)) {
                        setSelectedBrand([...selectedBrand, each.brand_id]);
                      } else {
                        setSelectedBrand(
                          selectedBrand.filter((id) => id !== each.brand_id)
                        );
                      }
                    }}
                    className={styles.name}
                    key={index}
                  >
                    <label htmlFor={each.brand_name}>{each.brand_name}</label>
                    <input
                      type="checkbox"
                      name={each.brand_name}
                      id={each.brand_name}
                      value={each.brand_id}
                    />
                  </li>
                )
              )}
            </ol>
          ) : (
            ""
          )}
        </form>
      </div>

      {/* Product display */}
      <div className={styles.product_list}>
        {productInfo.map(
          (
            each: {
              product_name: string;
              product_id: number;
              color: Array<string>;
              size: string;
              sku: string;
              description: string;
              unit_price: number;
              product_image: Array<string>;
            },
            index
          ) => (
            <div key={index} className={styles.card_design}>
              <div className="slider-container">
                <Slider
                  {...settings}
                  customPaging={(i: number) => (
                    <div className={styles.active_button}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: each.color[i],
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  )}
                >
                  {(each.product_image.length === 1 ? [...each.product_image, ...each.product_image] : each.product_image).map((image, idx) => (
                    <div key={idx} className={styles.image_container}>
                      <Image
                        src={image}
                        alt={each.product_name}
                        className={styles.product_image_design}
                        fill
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              <div className={styles.product_details_container}>
                <div>{each.product_name}</div>
                <div>{each.unit_price}</div>
                {/* <div className={styles.color_section}>
                  {each.color.map((each_color, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setProductColor(i);
                        setProductNumber(each.product_id);
                      }}
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: `${each_color}`,
                        border: "10px",
                        borderColor: "gray",
                        cursor: "pointer",
                      }}
                    ></div>
                  ))}
                </div> */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DisplayProducts;
