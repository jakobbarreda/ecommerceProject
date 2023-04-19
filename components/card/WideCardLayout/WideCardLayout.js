import LeftArrow from "@/components/UI/arrows/LeftArrow";
import styles from "./wideCardLayout.module.css";
import RightArrow from "@/components/UI/arrows/RightArrow";
import WideCardItem from "./WideCardItems";

const WideCardLayout = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>

      <section className={styles.itemLayout}>
        <LeftArrow />
        <div className={styles.item}>
          <WideCardItem
            href="/"
            src="/alexa.jpg"
            height={200}
            width={190}
            deal={29}
            description="alexa home device in store"
          />
        </div>
        <div className={styles.item}>
          {" "}
          <WideCardItem
            href="/"
            src="/alexa.jpg"
            height={200}
            width={190}
            deal={29}
            description="alexa home device in store"
          />
        </div>
        <div className={styles.item}>
          {" "}
          <WideCardItem
            href="/"
            src="/alexa.jpg"
            height={200}
            width={190}
            deal={29}
            description="alexa home device in store"
          />
        </div>
        <div className={styles.item}>
          {" "}
          <WideCardItem
            href="/"
            src="/alexa.jpg"
            height={200}
            width={190}
            deal={29}
            description="alexa home device in store"
          />
        </div>
        <div className={styles.item}>
          {" "}
          <WideCardItem
            href="/"
            src="/alexa.jpg"
            height={200}
            width={190}
            deal={29}
            description="alexa home device in store"
          />
        </div>
        <div className={styles.item}>
          {" "}
          <WideCardItem
            href="/"
            src="/alexa.jpg"
            height={200}
            width={190}
            deal={29}
            description="alexa home device in store"
          />
        </div>
        <RightArrow />
      </section>
    </div>
  );
};

export default WideCardLayout;
