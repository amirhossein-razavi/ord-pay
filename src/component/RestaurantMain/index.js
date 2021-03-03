import React, { useEffect, useState } from 'react';
import { Card, Button, Badge, Space } from 'antd';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';

import category2 from '../../static/images/category2.svg'

import { onAddBasket } from '../../redux/actions/basketActions';
import { getShopDetails, getMenu } from '../../redux/actions/restaurantMenu';
import { IMAGE_URL } from '../../globalFunctions/url'

import styles from "./restaurantMain.module.css"

function RestaurantMain({ menu, basket, getShopDetails, getMenu, onAddBasket, ...props }) {

    const [scrollDown, setScrollDown] = useState(false);

    const { Meta } = Card;
    const history = useHistory();

    useEffect(() => {
        getShopMenu()
        window.addEventListener('scroll', listenScrollEvent)
    }, [])

    const getShopMenu = async () => {
        const result = await getShopDetails(props.computedMatch.params.restaurantName);
        console.log(result)
        setTimeout(() => {
            if (result.success) {
                getMenu(result.result.id);
            }
            
        }, 2000);
    }

    const listenScrollEvent = e => {
        if (window.scrollY > 375) {
            setScrollDown(true)
        } else {
            setScrollDown(false)
        }
    }

    const toSingleFood = (item) => {
        history.push({ pathname: `../../food/${item.name}`, state: item })
    }

    return (
        <div className={styles.restaurantMain}>
            <div className={styles.restaurantCover}>
                <p className={styles.restaurantName}>
                    رستوران {props.computedMatch.params.restaurantName}
                </p>
            </div>
            <div className={styles.categoryWrapper}>
                {menu.menu.result && menu.menu.result.items.map((item, index) => {
                    return (
                        <a href={`#${index}`}>
                            <div className={styles.categoryIconContainerWrapper}>
                                <div className={styles.categoryIconContainer}>
                                    <img className={styles.categoryIcon} src={category2} />
                                </div>
                                <p className={styles.categoryName} >{item.name}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
            <div className={[styles.categoryWrapper, scrollDown ? styles.categoryWrapperOnScroll : styles.categoryWrapperOnScroll2].join(" ")}>
                {menu.menu.result && menu.menu.result.items.map((item, index) => {
                    return (
                        <a href={`#${index}`}>
                            <div className={styles.categoryIconContainerWrapper}>
                                <div className={styles.categoryIconContainer}>
                                    <img className={styles.categoryIcon} src={category2} />
                                </div>
                                <p className={styles.categoryName} >{item.name}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
            <div className={styles.foodsLists}>
                {menu.menu.result && menu.menu.result.items.map((item, index) => {
                    return (
                        <>
                            <span className={styles.empty} id={index}></span>
                            <div className={styles.itemsHeader}>
                                <p>{item.name}</p>
                            </div>
                            {item.menuItems.length !== 0 && item.menuItems.map((item) => {
                                const basketItem = Object.keys(basket.basket).length && basket.basket[menu.shop.result.uniqueName].filter(i => i.id == item.id)
                                return (
                                    <div className={styles.foodCartWrapper}>
                                        <Card
                                            className="resturantFoods"
                                            onClick={() => toSingleFood(item)}
                                            hoverable
                                            style={{ width: "100%" }}
                                            cover={
                                                <Badge count={basketItem.length && basketItem[0].count}>
                                                    <div className={styles.foodsImage} style={{ backgroundImage: `url(${IMAGE_URL}${item.images[0].path})` }}></div>
                                                </Badge>
                                            }
                                        >
                                            <Meta style={{ width: "100%" }} title={item.name} description={`${parseFloat(item.price) / 10000} تومان`} />
                                        </Card>
                                        <Button className={styles.addButton} type="primary" onClick={() => onAddBasket(item)}>
                                            +
                                        </Button>
                                    </div>
                                )
                            })}
                        </>
                    )
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    menu: state.menu,
    basket: state.basket
});

export default connect(mapStateToProps, { onAddBasket, getShopDetails, getMenu })(RestaurantMain);
