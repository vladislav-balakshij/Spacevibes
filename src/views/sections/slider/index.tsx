import React from 'react';
import Slider from "react-slick";
// @ts-ignore
import * as styles from "./styles.module.scss";

// @ts-ignore
import IconDribble from '../../../assets/icons/iconDribble.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
};

const SliderSection = ({ title, description, posts }: any) => {
  return (
    <section className={styles.SliderSection}>

      <div className="wrapper">
        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <Slider {...settings} className={styles.slides}>
        {posts.map(() => {
          return (<div>
            <article className={styles.slide}>
              <img
                src="https://via.placeholder.com/400x240/0000FF/808080%20?Text=Digital.com"
              />

              <div className={styles.title}>
                <IconDribble />

                <a href="#">
                  Collector Pumpkin Festival cancelled indefinitely
                </a>
              </div>
            </article>
          </div>)
        })}

      </Slider>
    </section>
  );
};

export default SliderSection;
