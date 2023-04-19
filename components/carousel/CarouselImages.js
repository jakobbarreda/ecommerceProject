import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./carousel.module.css";

const CarouselImages = (props) => {
  return (
    <div className={styles.container}>
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div className={styles.opacity}>
          <img src="https://m.media-amazon.com/images/I/61-CckqoPWL._SX3000_.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/611Hit0i2SL._SX3000_.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/61t82fXQSML._SX3000_.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/61v-SZ-zI9L._SX3000_.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImages;
