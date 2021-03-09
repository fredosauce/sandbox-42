import HeroBox from '../components/HeroBox';
import { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import Ticker from '../components/Ticker';
import NavBar from '../components/NavBar';
import Sandbox from './sandbox';
import NextLink from 'next/link';
import { motion, useMotionValue } from 'framer-motion';
import { workItems } from '../public/work';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Links from '../components/Links';
import { useInvertedBorderRadius } from '../utils/use-inverted-border-radius';

const openSpring = { type: 'spring', duration: 0.6, bounce: 0.3 };
const closeSpring = {
  type: 'spring',
  duration: 0.45,
  bounce: 0.3,
};

const Pill = ({ text }) => {
  return (
    <div class='text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl'>
      {text}
    </div>
  );
};

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.35 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className='overlay'
  >
    <Link to='/' />
  </motion.div>
);

const List = ({ workItems, match }) => {
  return (
    <ul class='pl-4 flex flex-col space-y-6'>
      {workItems.map((item, index) => {
        // const isSelected =
        const isSelected = match.params.id === item.id;
        const primaryMediaPath = item.media[0];
        const key = 'work-' + index;

        const y = useMotionValue(0);
        return (
          <li class='work-item ml-4' key={key}>
            <Overlay isSelected={isSelected} />
            <motion.div
              className={`overflow-hidden relative work-item-wrapper  border-transparent duration-400 rounded-md ${
                isSelected && 'open rounded-3xl'
              }`}
              transition={isSelected ? openSpring : closeSpring}
              layout
            >
              <div class='work-media-wrapper absolute z-0'>
                <motion.img
                  layoutId={item.id + 'Media'}
                  class='gray-filter relative'
                  src={primaryMediaPath}
                  layout
                />
              </div>
              <motion.div
                class={`flex flex-col flex-nowrap items-center work-item-detail-wrapper cursor-pointer ease-out space-x-4 bg-black bg-opacity-70 hover:bg-opacity-30 relative z-0 justify-center ${
                  isSelected && ''
                }`}
                layout
              >
                <div class='work-title-wrapper'>
                  <Link to={'/' + item.id}>
                    <h1
                      class='text-xl font-semibold italic cursor-pointer tracking-wider spectral'
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h1>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                class='px-8 lg:my-24 work-detail-outer mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-8 my-16'
                transition={{ duration: 0.3 }}
                layout
              >
                <motion.div class='text-box'>
                  <h1
                    class='text-3xl cursor-pointer my-1 spectral inline-block mr-4'
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h1>{' '}
                  <p class='text-gray-400 text-xl'>
                    {item.group} &nbsp;{item.year}&nbsp;{' '}
                  </p>
                  <p class='text-base leading-5 mt-4'>{item.blurb}</p>
                  <div class='mt-6 flex flex-row flex-wrap space-x-5 '>
                    {item.tech.map((techName, index) => (
                      <Pill text={techName} key={techName + index} />
                    ))}
                  </div>
                </motion.div>
                <motion.div layout class='media-box border-gray-50 border-1'>
                  <motion.img class='' src={primaryMediaPath} />
                  <Links selectedWork={item} />
                </motion.div>
              </motion.div>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
};

const HomePage = ({ workItems }) => {
  // const [coins, setCoins] = useState([]);
  // console.log('data from homepage: ', data);

  return (
    <div class='flex flex-col mx-auto page-wrapper md:pl-6 md:text-2xl text-xl'>
      {/* <NavBar navState='home'></NavBar> */}
      {/* <motion.div
        class='border-black border-t-2 border-b-2'
        layoutId='subNavBar'
        transition={{ duration: 0.35 }}
        initial={{ opacity: 0, height: 100 }}
        animate={{ opacity: 1, height: 0 }}
      ></motion.div> */}
      {/* <div class='splash-image'></div> */}
      <div class='hero-section py-12  mx-auto'>
        <div class='hero-inner'>
          <p class=' pl-4 font-medium'>
            Fredo Chen is a
            <br />
            <div class='ml-4'>
              frontend engineer
              <br />
              & creative developer
              <br />
              based in Los Angeles
            </div>
          </p>
          <div></div>
        </div>
      </div>
      <div class='work-section mx-auto'>
        <div class=' tracking-wide mt-12 mb-8 pl-4'>Projects</div>
        <Router>
          <Route
            path={['/:id', '/']}
            children={({ match }) => (
              <List match={match} workItems={workItems} />
            )}
          />
        </Router>
      </div>
      <div class='contact-section mx-auto my-24'>
        <div class='tracking-wide pl-4'>Contact</div>
        <ul class='contact-list'>
          <li>
            <a href='www.linkedin.com/in/fredochen'>linkedin</a>
          </li>
          <li>
            <a href='https://github.com/fredosauce'>github</a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      workItems,
    },
  };
};

export default HomePage;
