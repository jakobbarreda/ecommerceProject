import LeftArrow from "@/components/UI/arrows/LeftArrow";
import styles from "./wideCardLayout.module.css";
import RightArrow from "@/components/UI/arrows/RightArrow";

const WideCardLayout = () => {
  return (
    <div className={styles.container}>
      <h2>Trending Deals</h2>

      <section className={styles.itemLayout}>
        <div className={styles.item}>
          <h1>item</h1>
          <LeftArrow />
        </div>
        <div className={styles.item}>
          <h1>item</h1>
        </div>
        <div className={styles.item}>
          <h1>item</h1>
        </div>
        <div className={styles.item}>
          <h1>item</h1>
        </div>
        <div className={styles.item}>
          <h1>item</h1>
        </div>
        <div className={styles.item}>
          <h1>item</h1>
          <RightArrow />
        </div>
      </section>
    </div>
  );
};

export default WideCardLayout;
