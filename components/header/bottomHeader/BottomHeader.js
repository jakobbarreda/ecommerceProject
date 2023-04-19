import styles from "./BottomHeader.module.css";
import Link from "next/link";
import Sidebar from "../sideBar/SideBar";
import DepartmentLink from "./DepartmentLink";

const BottomHeader = (props) => {
  return (
    <>
      <div className={styles.bottomNav}>
        <Sidebar showSideBar={props.showSideBar} />

        <DepartmentLink href="/" department="Clinic" />
        <DepartmentLink href="/" department="Customer Service" />
        <DepartmentLink href="/" department="Best Sellers" />
        <DepartmentLink href="/" department="Amazon Basics" />
        <DepartmentLink href="/" department="New Releases" />
        <select>
          <option>Prime</option>
        </select>
        <DepartmentLink href="/" department="Today's Deals" />
        <DepartmentLink href="/" department="Music" />
        <DepartmentLink href="/" department="Books" />
        <DepartmentLink href="/" department="Regisrty" />
        <DepartmentLink href="/" department="Fashion" />
        <DepartmentLink href="/" department="Amazon Home" />
        <DepartmentLink href="/" department="One Medical" />
        <DepartmentLink href="/" department="Gift Cards" />
        <DepartmentLink href="/" department="Pharmacy" />
        <DepartmentLink href="/" department="Toys & Games" />
        <DepartmentLink href="/" department="Sell" />
        <DepartmentLink href="/" department="Coupons" />
        <DepartmentLink href="/" department="Automotive" />
        <DepartmentLink href="/" department="Find a Gift" />
        <DepartmentLink href="/" department="Computers" />
        <DepartmentLink href="/" department="Make every day Earth Day" />
      </div>
    </>
  );
};

export default BottomHeader;
