import Axios from "axios";
import styles from "../styles/Coins.module.css";


const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div className={styles.container}>
      {coinData.coins.map((coin) => {
        return (
          <div>
            <h1>{coin.name}</h1>
                <img className={styles.img} src={coin.icon} />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};
// get static props to fetching data from external db, prerender the page at run time, where we want to fetch data, use axios to fetch data, fetching the data from an api and returning an object
// to get the id from the params, when you need to fetch data on a component, a dynamic route
// get static props prerenders the page at build time at static site generation, SSR server side rendering, useful for situations that you need to render the data at request time, send the the data to the props when the data is prerendered, data that must be validated
// most of the time use the get static props, much of the data does not need to be fetched at the request time, static is only used on the build time, use the revalidate prompt to attempt to regenerate the page when a request comes in, setting an interval, incremental data

export const getStaticProps = async ({ params }) => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: data.data,
    },
    revalidate: 5,
  };
};
export default CoinList;
