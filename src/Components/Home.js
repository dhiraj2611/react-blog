import React from "react";
import styles from '../AppStyles.module.css';
import FeaturedArticlesComponent from "./MainPageComponent";
import LatestArticlesAllSections from "./LatestArticles";
import LatestArticlesCategory1 from "./MainPage1";
import LatestStories from "./LatestStories"


const Home = () => {
    return(
        <div className={styles.commonStyle}>
            <FeaturedArticlesComponent/>
            <LatestArticlesAllSections/>
            <LatestArticlesCategory1/>
            <LatestStories/>
        </div>
    )
}

export default Home;