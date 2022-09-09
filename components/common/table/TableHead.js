import styles from "./tableHead.module.css";

const TableHead = function () {
  return (
    <thead>
      <tr>
        <th>
          <div className={styles.head_container__items}>
            <div className={styles.head_container__item}>
              <p>Name</p>
              <span className={styles.head_container__item__padding}></span>
            </div>
          </div>
        </th>
        <th>
          <div className={styles.head_container__items}>
            <div className={styles.head_container__item}>
              <span
                className={styles.head_container__item_price__padding__front}
              ></span>
              <p>price</p>
              <span
                className={styles.head_container__item_price__padding__back}
              ></span>
            </div>
          </div>
        </th>
        <th>
          <div className={styles.head_container__items}>
            <div className={styles.head_container__item}>
              <span
                className={styles.head_container__item__market_padding}
              ></span>
              <p>Market Cap</p>
              <span
                className={styles.head_container__item__market_padding}
              ></span>
            </div>
          </div>
        </th>
        <th>
          <div className={styles.head_container__items}>
            <div className={styles.head_container__item}>
              <p>Market Domiance</p>
              <span className={styles.head_container__item__padding}></span>
            </div>
          </div>
        </th>
        <th>
          <div className={styles.head_container__items}>
            <div className={styles.head_container__item}>
              <span className={styles.head_container__item__padding}></span>
              <p>Last 90 days</p>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
