import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import HomeSection from '../components/pageComponents/HomeSection';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <Layout>
            <HomeSection />
        </Layout>
    );
};

export default Home;
