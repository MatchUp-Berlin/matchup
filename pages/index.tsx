import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from '../components/misc';

const Home: NextPage = () => {
  return (
    <>
      <Button
        variant={'primary'}
        callback={() => console.log('suca')}
        text={'primary'}
      />
      <Button
        variant={'secondary'}
        callback={() => console.log('suca')}
        text={'secondary'}
      />
    </>
  );
};

export default Home;
