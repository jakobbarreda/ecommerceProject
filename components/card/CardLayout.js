import Link from "next/link";
import styles from "./cardLayout.module.css";
import Image from "next/image";

const cardLayout = () => {
  return (
    <div className={styles.container}>
      <section className={styles.cardSection}>
        <div className={styles.cardItem}>
          <h2>Hear all the best stories</h2>
          <Link href="/">
            <Image src="/shirts.jpg" width={300} height={300} />
          </Link>
        </div>
        <div className={styles.cardItem}>
          <h2>Try spring fashion deals for free</h2>
          <Link href="/">
            <Image src="/fallClothes.jpg" width={300} height={300} />
          </Link>
        </div>
        <div className={styles.cardItem}>
          <h2>Discover popular brands in sizes 14+</h2>
          <Link href="/">
            <Image src="/outdoors.jpg" width={300} height={300} />
          </Link>
        </div>
        <div className={styles.cardItem}>
          <h2>Discover popular brands in sizes 14+</h2>
          <Link href="/">
            <Image src="/workoutLeggings.jpg" width={300} height={300} />
          </Link>
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
