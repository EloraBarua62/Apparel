import Image from "next/image";
import styles from "./PageNavigation.module.scss";
import background from "../../../../../public/collections/navigation_backgound.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const PageNavigation = ({ main, sub }) => {
  return (
    <div className={styles.navigation_section}>
      <Image src={background} alt="" className={styles.image_setup} />
      <div className={styles.overlay}>
        {main}
        <MdOutlineKeyboardArrowRight />
        {sub}
      </div>
    </div>
  );
};

export default PageNavigation;
