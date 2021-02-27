import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';

import category2 from '../../static/images/category2.svg'

import { onAddBasket } from '../../redux/actions/basketActions';
import { getMenu } from '../../redux/actions/restaurantMenu';
import { tree_digit_number } from '../../globalFunctions/index'
import { IMAGE_URL } from '../../globalFunctions/url'

import styles from "./restaurantMain.module.css"

function RestaurantMain({ menu, getMenu, onAddBasket, ...props }) {

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
        history.push({ pathname: `../../food/${item.name}`, state: item })
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
                    console.log(item.images[0].path)
                    return (
                        <div className={styles.foodCartWrapper}>
                            <Card
                                onClick={() => toSingleFood(item)}
                                hoverable
                                style={{ width: "100%" }}
                                cover={<div className={styles.foodsImage} style={{ backgroundImage: `url(${IMAGE_URL}${item.images[0].path})` }}></div>}
                            >
                                <Meta style={{ width: "100%" }} title={item.name} description={tree_digit_number(item.price)} />
                            </Card>
                            <Button className={styles.addButton} type="primary" onClick={() => onAddBasket(item)}>
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

export default connect(mapStateToProps, { onAddBasket, getMenu })(RestaurantMain);
