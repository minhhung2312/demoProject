import React from 'react';
import ProductBestSeller from '../components/ProductBestSeller';
import '../assets/css/Home.css';
import Banner from '../components/Banner';
import BrandIcon from '../components/BrandIcon';
import TopFavorite from '../components/TopFavorite';
import ProductOfWeb from '../components/ProductOfWeb';
import Outstanding from '../components/Outstanding';
import News from '../components/News';

function Home() {

    return ( 
        <div className="home">
            <Banner/>
            <BrandIcon/>
            <ProductBestSeller/>
            <TopFavorite/>
            <ProductOfWeb/>
            <Outstanding/>
            <News/>
        </div>
    );
}

export default Home;