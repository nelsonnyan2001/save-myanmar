import styles from "./LinkItem.module.scss";

const LinkItem = ({ title, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <div className={styles.cardBottom}>
          <hr className={styles.separator} />

          <span className={styles.visit}>Visit</span>
        </div>
      </div>
    </a>
  );
};

export default LinkItem;
