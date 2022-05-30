import React from 'react';
// @ts-ignore
import Slider from "react-slick";
import * as styles from './styles.module.scss';
import IconDribble from '../../../assets/icons/iconDribble.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 1
};

const SliderSection = ({ title, description, posts }: any) => {
  return (
    <section className={styles.SliderSection}>

      <div className="wrapper">
        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div className={styles.slides}>
        <Slider {...settings}>
          <article className={styles.slide}>
            <img
              src="https://via.placeholder.com/400x240/0000FF/808080%20?Text=Digital.com"
              width="325px"
              height="260px"
            />

            <div className={styles.title}>
              <IconDribble />

              <a href="#">
                Collector Pumpkin Festival cancelled indefinitely
              </a>
            </div>
          </article>
          <article className={styles.slide}>
            <img
              src="https://via.placeholder.com/400x240/0000FF/808080%20?Text=Digital.com"
              width="325px"
              height="260px"
            />

            <div className={styles.title}>
              <IconDribble />

              <a href="#">
                Collector Pumpkin Festival cancelled indefinitely
              </a>
            </div>
          </article>
          <article className={styles.slide}>
            <img
              src="https://via.placeholder.com/400x240/0000FF/808080%20?Text=Digital.com"
              width="325px"
              height="260px"
            />

            <div className={styles.title}>
              <IconDribble />

              <a href="#">
                Collector Pumpkin Festival cancelled indefinitely
              </a>
            </div>
          </article>
          <article className={styles.slide}>
            <img
              src="https://via.placeholder.com/400x240/0000FF/808080%20?Text=Digital.com"
              width="325px"
              height="260px"
            />

            <div className={styles.title}>
              <IconDribble />

              <a href="#">
                Collector Pumpkin Festival cancelled indefinitely
              </a>
            </div>
          </article>
          <article className={styles.slide}>
            <img
              src="https://via.placeholder.com/400x240/0000FF/808080%20?Text=Digital.com"
              width="325px"
              height="260px"
            />

            <div className={styles.title}>
              <IconDribble />

              <a href="#">
                Collector Pumpkin Festival cancelled indefinitely
              </a>
            </div>
          </article>
        </Slider>

      </div>
    </section>
  );
};

export default SliderSection;
