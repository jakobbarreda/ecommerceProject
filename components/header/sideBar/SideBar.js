import { useState } from "react";
import styles from "./sideBar.module.css";

const Sidebar = (props) => {
  return (
    <>
      <button
        className={styles.container}
        onClick={props.showSideBar}
        type="button"
      >
        <span className={styles.icon}>☰</span>
        <span>All</span>
      </button>
    </>
  );
};

export default Sidebar;
