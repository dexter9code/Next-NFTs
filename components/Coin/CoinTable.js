/* eslint-disable @next/next/no-img-element */
import styles from "./coinTable.module.css";
import TableHead from "./../common/table/TableHead";

const DUMMY = [
  {
    id: 4564,
    name: "Bitcoin BTC",
    image: "/assets/bitcoin.png",
    price: 455_442,
    marketCap: 456_452_164,
    marketDominace: "65%",
    graph: "assets/bitcoin_sale.svg",
  },
  {
    id: 4464,
    name: "Bitcoin BTC",
    image: "/assets/bitcoin.png",
    price: 455_442,
    marketCap: 456_452_164,
    marketDominace: "65%",
    graph: "assets/bitcoin_sale.svg",
  },
];

const CoinTable = function (props) {
  return (
    <div className={styles.container}>
      <table>
        <TableHead />
        <tbody>
          {DUMMY.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.body_container__items}>
                  <div className={styles.body_container__item}>
                    <img
                      src={item.image}
                      alt="bit coin"
                      className={styles.body_container__item__logo}
                    />
                    <div className={styles.body_container__item__content}>
                      <p>{item.name}</p>
                      <span>BTC</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.body__container__price}>
                  <span>{item.price}</span>
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
                    src={item.graph}
                    alt="bit-coin_sale"
                    className={styles.body__container__graph__chart}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
