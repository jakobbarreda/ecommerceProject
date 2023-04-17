import styles from "./container.module.css";

const Container = (props) => {
  return (
    <>
      <main>
        <div className={styles.container}>{props.children}</div>
      </main>
    </>
  );
};

export default Container;
