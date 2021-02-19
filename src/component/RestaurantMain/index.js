import React, { useEffect } from 'react';
import { Card, Button } from 'antd';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';

import category1 from '../../static/images/category1.svg'
import category2 from '../../static/images/category2.svg'
import category3 from '../../static/images/category3.svg'
import category4 from '../../static/images/category4.svg'
import category5 from '../../static/images/category5.svg'
import category6 from '../../static/images/category6.svg'
import category7 from '../../static/images/category7.svg'

import pizza from '../../static/images/pizza.png'
import sandvich from '../../static/images/sandvich.png';

import { onAddBasketCount } from '../../redux/actions/basketActions';
import { getMenu } from '../../redux/actions/restaurantMenu';
import { addBasketCount } from '../../globalFunctions/index'

import styles from "./restaurantMain.module.css"

function RestaurantMain(props) {

    const { Meta } = Card;
    const history = useHistory();

    useEffect(() => {
        props.getMenu();
    }, [])

    useEffect(() => {
        console.log(props.menu)
    }, [props.menu])

    const toSingleFood = (prop) => {
        history.push({ pathname: `../../food/${prop}` })
    }

    const toAddBasketCount = () => {
        props.onAddBasketCount();
        addBasketCount();
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
                <div className={styles.foodCartWrapper}>
                    <Card
                        onClick={() => toSingleFood("پیتزا")}
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" width={200} height={100} src={pizza} />}
                    >
                        <Meta style={{ width: "100%" }} title="پیتزا" description="10 هزار تومن" />
                    </Card>
                    <Button className={styles.addButton} type="primary" onClick={toAddBasketCount}>
                        +
                        </Button>
                </div>
                <div className={styles.foodCartWrapper}>
                    <Card
                        onClick={() => toSingleFood("ساندویچ")}
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" width={200} height={100} src={sandvich} />}
                    >
                        <Meta title="ساندویچ" description="10 هزار تومن" />
                    </Card>
                    <Button className={styles.addButton} type="primary" onClick={toAddBasketCount}>
                        +
                        </Button>
                </div>
            </div>
            <div className={styles.foodsLists}>
                <div className={styles.foodCartWrapper} >
                    <Card
                        onClick={() => toSingleFood("ساندویچ")}
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" width={200} height={100} src={sandvich} />}
                    >
                        <Meta title="ساندویچ" description="10 هزار تومن" />
                    </Card>
                    <Button className={styles.addButton} type="primary" onClick={toAddBasketCount}>
                        +
                        </Button>
                </div>
                <div className={styles.foodCartWrapper}>
                    <Card
                        onClick={() => toSingleFood("پیتزا")}
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" width={200} height={100} src={pizza} />}
                    >
                        <Meta title="پیتزا" description="10 هزار تومن" />
                    </Card>
                    <Button className={styles.addButton} type="primary" onClick={toAddBasketCount}>
                        +
                        </Button>
                </div>
            </div>
            <div className={styles.foodsLists}>
                <div className={styles.foodCartWrapper} >
                    <Card
                        onClick={() => toSingleFood("ساندویچ")}
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" width={200} height={100} src={sandvich} />}
                    >
                        <Meta title="ساندویچ" description="10 هزار تومن" />
                    </Card>
                    <Button className={styles.addButton} type="primary" onClick={toAddBasketCount}>
                        +
                        </Button>
                </div>
                <div className={styles.foodCartWrapper}>
                    <Card
                        onClick={() => toSingleFood("پیتزا")}
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="example" width={200} height={100} src={pizza} />}
                    >
                        <Meta title="پیتزا" description="10 هزار تومن" />
                    </Card>
                    <Button className={styles.addButton} type="primary" onClick={toAddBasketCount}>
                        +
                        </Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    menu: state.menu
});

export default connect(mapStateToProps, { onAddBasketCount, getMenu })(RestaurantMain);

