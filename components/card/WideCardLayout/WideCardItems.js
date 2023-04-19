import Link from "next/link";
import styles from "./WideCardItems.module.css";
import Image from "next/image";

const WideCardItem = (props) => {
  return (
    <div>
      <Link href={props.href} className={styles.link}>
        <Image src={props.src} width={props.width} height={props.height} />
        <span className={styles.deal}>Up to {props.deal}% off Deal</span>
        <div>
          <span>{props.description}</span>
        </div>
      </Link>
    </div>
  );
};

export default WideCardItem;
