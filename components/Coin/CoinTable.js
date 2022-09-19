/* eslint-disable @next/next/no-img-element */
import styles from "./coinTable.module.css";
import TableHead from "./../common/table/TableHead";

const CoinTable = function ({ coins }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h1>Cryptocurrency Prices by Market Cap</h1>
      </div>
      <div>
        <table>
          <TableHead
            title1={`Name`}
            title2={`Price`}
            title3={`Market Cap`}
            title4={`MarketDominace`}
            title5={`Last 90 Day`}
          />
          <tbody>
            {coins.map((item) => {
              const coinsImagePath = `/assets/crypto/${item.image}`;
              const graphPath = `/assets/graph/${item.graph}`;
              return (
                <tr key={item._id}>
                  <td>
                    <div className={styles.body_container__items}>
                      <div className={styles.body_container__item}>
                        <img
                          src={coinsImagePath}
                          alt="bit coin"
                          className={styles.body_container__item__logo}
                        />
                        <div className={styles.body_container__item__content}>
                          <p>{item.name}</p>
                          <span>{item.shortName}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.body__container__price}>
                      <span>${item.price}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.body__container__market_cap}>
                      <span>{item.marketCap}</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.body__container__market_domiance}>
                      <span>{item.marketDominace}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <img
                        src={graphPath}
                        alt="bit-coin_sale"
                        className={styles.body__container__graph__chart}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinTable;
