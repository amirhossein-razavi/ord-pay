import React, { useDebugValue } from 'react';
import { Carousel, Card, Button } from 'antd';
import { useHistory } from 'react-router-dom'

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

import pizza from '../../static/images/pizza.png'
import sandvich from '../../static/images/sandvich.png'

import styles from "./restaurantMain.module.css"

function RestaurantMain(props) {

    const { Meta } = Card;
    const  history  = useHistory();

    const toSingleFood = (prop) => {
        history.push({ pathname: `../../food/${prop}` })
    }

    return (
        <div>
            <div className={styles.restaurantCover}>
                <p className={styles.restaurantName}>
                    رستوران {props.computedMatch.params.restaurantName}
                </p>
            </div>
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
            <div className={styles.foodsLists}>
                <div className={styles.foodCartWrapper} onClick={() => toSingleFood("پیتزا")}>
                    <Card
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" src={pizza} />}
                    >
                        <Meta title="پیتزا" description="10 هزار تومن" />
                        <Button className={styles.addButton} type="primary">
                            +
                        </Button>
                    </Card>
                </div>
                <div className={styles.foodCartWrapper} onClick={() => toSingleFood("ساندویچ")}>
                    <Card
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" src={sandvich} />}
                    >
                        <Meta title="ساندویچ" description="10 هزار تومن" />
                        <Button className={styles.addButton} type="primary">
                            +
                        </Button>
                    </Card>
                </div>
            </div>
            <div className={styles.foodsLists}>
                <div className={styles.foodCartWrapper} onClick={() => toSingleFood("ساندویچ")} style={{ marginTop: '-40px' }} >
                    <Card
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" src={sandvich} />}
                    >
                        <Meta title="ساندویچ" description="10 هزار تومن" />
                        <Button className={styles.addButton} type="primary">
                            +
                        </Button>
                    </Card>
                </div>
                <div className={styles.foodCartWrapper} onClick={() => toSingleFood("پیتزا")}>
                    <Card
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" src={pizza} />}
                    >
                        <Meta title="پیتزا" description="10 هزار تومن" />
                        <Button className={styles.addButton} type="primary">
                            +
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMain;
