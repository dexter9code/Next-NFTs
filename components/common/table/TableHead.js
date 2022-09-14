import styles from "./tableHead.module.css";

const TableHead = function ({ title1, title2, title3, title4, title5 }) {
  return (
    <thead>
      <tr>
        {title1 && (
          <th>
            <div className={styles.head_container__items}>
              <div className={styles.head_container__item}>
                <p>{title1}</p>
                <span className={styles.head_container__item__padding}></span>
              </div>
            </div>
          </th>
        )}
        {title2 && (
          <th>
            <div className={styles.head_container__items}>
              <div className={styles.head_container__item}>
                <span
                  className={styles.head_container__item_price__padding__front}
                ></span>
                <p>{title2}</p>
                <span
                  className={styles.head_container__item_price__padding__back}
                ></span>
              </div>
            </div>
          </th>
        )}
        {title3 && (
          <th>
            <div className={styles.head_container__items}>
              <div className={styles.head_container__item}>
                <span
                  className={styles.head_container__item__market_padding}
                ></span>
                <p>{title3}</p>
                <span
                  className={styles.head_container__item__market_padding}
                ></span>
              </div>
            </div>
          </th>
        )}
        {title4 && (
          <th>
            <div className={styles.head_container__items}>
              <div className={styles.head_container__item}>
                <p>{title4}</p>
                <span className={styles.head_container__item__padding}></span>
              </div>
            </div>
          </th>
        )}
        {title5 && (
          <th>
            <div className={styles.head_container__items}>
              <div className={styles.head_container__item}>
                <span className={styles.head_container__item__padding}></span>
                <p>{title5}</p>
              </div>
            </div>
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableHead;
