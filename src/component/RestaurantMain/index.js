import React, { useEffect, useState } from 'react';
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

function RestaurantMain({ menu, getMenu, onAddBasketCount, ...props }) {

    const [selectedCategory, setSelectedCategory] = useState([]);

    const { Meta } = Card;
    const history = useHistory();

    useEffect(() => {
        console.log(props)
        getMenu();
    }, [])

    useEffect(() => {
        console.log(menu)
        console.log(menu.result && menu.result.items[0].menuItems)
        menu.result && setSelectedCategory(menu.result.items[0].menuItems)
    }, [menu])

    const toSingleFood = (item) => {
        history.push({ pathname: `../../food/${item.name}`, item })
    }

    const toAddBasketCount = () => {
        onAddBasketCount();
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
                {menu.result && menu.result.items.map((item) => {
                    return (
                        <div className={styles.categoryIconContainerWrapper} onClick={() => setSelectedCategory(item.menuItems)}>
                            <div className={styles.categoryIconContainer}>
                                <img className={styles.categoryIcon} src={category2} />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className={styles.foodsLists}>
                {selectedCategory.length && selectedCategory.map((item) => {
                    return (
                        <div className={styles.foodCartWrapper}>
                            <Card
                                onClick={() => toSingleFood(item)}
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" width={200} height={100} src={pizza} />}
                            >
                                <Meta style={{ width: "100%" }} title={item.name} description={item.price} />
                            </Card>
                            <Button className={styles.addButton} type="primary" onClick={toAddBasketCount}>
                                +
                        </Button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    menu: state.menu.menu
});

export default connect(mapStateToProps, { onAddBasketCount, getMenu })(RestaurantMain);

