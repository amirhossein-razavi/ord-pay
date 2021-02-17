import React from 'react';
import { Carousel } from 'antd';

import slider1 from '../../static/images/slider1.jpg'
import slider2 from '../../static/images/slider2.jpg'
import slider3 from '../../static/images/slider3.jpg'

import category1 from '../../static/images/category1.svg'
import category2 from '../../static/images/category2.svg'
import category3 from '../../static/images/category3.svg'
import category4 from '../../static/images/category4.svg'
import category5 from '../../static/images/category5.svg'
import category6 from '../../static/images/category6.svg'
import category7 from '../../static/images/category7.svg'

import styles from "./restaurantMain.module.css"

function RestaurantMain(props) {

    return (
        <div>
            {props.computedMatch.params.restaurantName}
            <Carousel autoplay>
                <div>
                    <img className={styles.sliderContent} src={slider1} />
                </div>
                <div>
                    <img className={styles.sliderContent} src={slider2} />
                </div>
                <div>
                    <img className={styles.sliderContent} src={slider3} />
                </div>
            </Carousel>
            <div className={styles.categoryWrapper}>
                <div className={styles.categoryIconContainer}>
                    <img className={styles.categoryIcon} src={category1} />
                </div>
                <div className={styles.categoryIconContainer}>
                    <img className={styles.categoryIcon} src={category2} />
                </div>
                <div className={styles.categoryIconContainer}>
                    <img className={styles.categoryIcon} src={category3} />
                </div>
                <div className={styles.categoryIconContainer}>
                    <img className={styles.categoryIcon} src={category4} />
                </div>
                <div className={styles.categoryIconContainer}>
                    <img className={styles.categoryIcon} src={category5} />
                </div>
                <div className={styles.categoryIconContainer}>
                    <img className={styles.categoryIcon} src={category6} />
                </div>
                <div className={styles.categoryIconContainer}>
                    <img className={styles.categoryIcon} src={category7} />
                </div>
            </div>
        </div>
    );
}

export default RestaurantMain;
