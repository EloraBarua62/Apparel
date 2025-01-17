import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '../../../../../public/apparel_logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { GoArrowSwitch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import {page_navigation} from '../../../utils/demoData';
import Link from 'next/link';

const Header = () => {
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
            <div className={styles.product_histry}>
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
                    <Link href={page.route} className={styles.text_design}>{page.title}</Link>
                    <div className={styles.border_line}></div>
                  </div>
                ) : (
                  <div key={index} className={styles.sub_route_design}>
                    <div>{page.title}</div>
                    <IoIosArrowDown
                      className={styles.down_arrow_design}
                      style={{ fontSize: "15px"}}
                    />

                    <div className={styles.display_sub_routes_section}>
                      {page.sub_route.map((sub_page, sub_index) => <div key={sub_index} style={{marginBottom: '10px'}}>
                        <Link href={sub_page.sub_route} className={styles.hover_design}>{sub_page.sub_title}</Link>
                      </div>)}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;