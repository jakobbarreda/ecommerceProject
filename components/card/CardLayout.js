import styles from "./cardLayout.module.css";

const cardLayout = () => {
  return (
    <div className={styles.container}>
      <section className={styles.cardSection}>
        <div className={styles.cardItem}>
          <h2>Hear all the best stories</h2>
        </div>
        <div className={styles.cardItem}>
          <h2>Try spring fashion deals for free</h2>
        </div>
        <div className={styles.cardItem}>
          <h2>Discover popular brands in sizes 14+</h2>
        </div>
        <div className={styles.cardItem}>
          <h2>Discover popular brands in sizes 14+</h2>
        </div>
      </section>

      <section className={styles.cardSection}>
        <div className={styles.cardItem}>
          <h2>The warm-weather edit</h2>
        </div>
        <div className={styles.cardItem}>
          <h2>Explore the great outdoors</h2>
        </div>
        <div className={styles.cardItem}>
          <h2>Spring fashion finds</h2>
        </div>
        <div className={styles.cardItem}>
          <h2>The dress edit</h2>
        </div>
      </section>
    </div>
  );
};

export default cardLayout;
