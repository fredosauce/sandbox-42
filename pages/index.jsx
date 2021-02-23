import HeroBox from '../components/HeroBox';
import { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import Ticker from '../components/Ticker';
import NavBar from '../components/NavBar';
import Sandbox from './sandbox';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const HomePage = ({ data }) => {
  // const [coins, setCoins] = useState([]);
  console.log('data from homepage: ', data);

  return (
    <div class='flex flex-col outer-wrapper px-6 mx-auto'>
      <NavBar navState='home'></NavBar>
      <motion.div
        class='border-black border-t-2 border-b-2'
        layoutId='subNavBar'
        transition={{ duration: 0.35 }}
        initial={{ opacity: 0, height: 100 }}
        animate={{ opacity: 1, height: 0 }}
      ></motion.div>
    </div>
  );
};

export async function getServerSideProps() {
  let data = {};
  // const url = new URL('https://api.coingecko.com/api/v3/coins/markets');
  // let params = { vs_currency: 'usd', per_page: 6 };
  // url.search = new URLSearchParams(params).toString();

  // const res = await fetch(url.href);
  // console.log(url);

  // let data = await res.json();
  // if (!data) {
  //   return {
  //     props: {
  //       data: {},
  //     },
  //   };
  // }
  return {
    props: {
      data,
    },
  };
}
// useEffect(async () => {
//   await getCoinDataWithFetch();
//   console.log(coins);
// }, []);
// const getCoinDataWithFetch = async () => {

//   console.log(data);
//   setCoins(data);

// };

export default HomePage;
