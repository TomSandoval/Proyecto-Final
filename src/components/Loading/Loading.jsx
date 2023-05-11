import styles from "../Loading/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.imagen}
        src="https://venturebeat.com/wp-content/uploads/2014/10/loading_desktop_by_brianmccumber-d41z4h6.gif?w=1200&strip=all"
        alt="gif"
      ></img>
    </div>
  );
};

export default Loading;
