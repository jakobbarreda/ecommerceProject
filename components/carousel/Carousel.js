import Image from "next/image";
import styles from "./carousel.module.css";

const Carousel = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.slideWrapper}>
          <div className={styles.slide}>
            <Image src="/kidsToys.jpg" width={1500} height={600} />
          </div>
          <div className={styles.slide}>
            <Image src="/alexa.jpg" width={1500} height={600} />
          </div>
          <div className={styles.slide}>
            <Image src="/powerTools.jpg" width={1500} height={600} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
