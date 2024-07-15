"use client";
import Image from "next/image";
import styles from './Banner.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import slide1 from '../../../../public/slider1.jpg'
import slide2 from '../../../../public/slider2.jpg'
import slide3 from '../../../../public/slider3.jpg'

const Banner = () => {
    const settings = {
      dots: false,
      fade: true,
      arrows: false,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div className={`${styles.banner_section} slider-container`}>
        <Slider {...settings}>
          <div className={styles.slider_image_container}>
            <Image src={slide1} alt="" className={styles.image_design} />
            <div className={styles.image_tag1}>
              <div className={styles.tag_container1}>
                <span>Women's Fashion</span>
                <p>Be comfortable, confident, aesthetic</p>
              </div>
            </div>
          </div>
          <div className={styles.slider_image_container}>
            <Image src={slide2} alt="" className={styles.image_design} />
            <div className={styles.image_tag2}>
              <div className={styles.tag_container2}>
                <span>Men's Style</span>
                <p>The attitude you need everywhere</p>
              </div>
            </div>
          </div>
          <div className={styles.slider_image_container}>
            <Image src={slide3} alt="" className={styles.image_design} />
            <div className={styles.image_tag3}>
              <div className={styles.tag_container3}>
                <span>Baby birds</span>
                <p>Softgaurd for all season</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
};

export default Banner;