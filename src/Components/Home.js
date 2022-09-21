import React from "react";
import styles from '../AppStyles.module.css';
//import FeaturedArticlesComponent from "./FeaturedArticlesComponent";
//import LatestArticlesAllSections from "./LatestArticlesAllSections";
//import LatestArticlesCategory1 from "./LatestArticlesCategory1";
//import LatestStories from "./LatestStories";
import LatestArticlesAllSections from "./LatestArticle";

const Home = () => {
    return(
        <div className={styles.commonStyle}>
         < LatestArticlesAllSections/>
        </div>
    )
}

export default Home;