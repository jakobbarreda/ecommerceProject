import { useState } from "react";
import styles from "./sideBar.module.css";

const Sidebar = (props) => {
  return (
    <>
      <div className={styles.container}>
        <button
          onClick={props.showSideBar}
          type="button"
          className={styles.button}
        >
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
        </button>
        <text>All</text>
      </div>
    </>
  );
};

export default Sidebar;
