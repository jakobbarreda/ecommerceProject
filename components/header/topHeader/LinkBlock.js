import Link from "next/link";
import styles from "./LinkBlock.module.css";

const LinkBlock = (props) => {
  return (
    <div className={styles.container}>
      <Link href={props.href} className={styles.link}>
        {props.message && (
          <div>
            <span className={styles.topMessage}>{props.message}</span>
          </div>
        )}
        {props.message2 && (
          <div>
            <span className={styles.bottomMessage}>{props.message2}</span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default LinkBlock;
