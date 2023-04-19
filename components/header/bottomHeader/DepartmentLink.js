import Link from "next/link";
import styles from "./departmentLink.module.css";

const DepartmentLink = (props) => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={props.href}>
        {props.department}
      </Link>
    </div>
  );
};

export default DepartmentLink;
