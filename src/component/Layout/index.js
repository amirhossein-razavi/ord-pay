import React, { useEffect, useState } from 'react';
import { Layout, Badge, Drawer } from 'antd'
import { ShoppingOutlined, MenuOutlined, RightOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Bill from '../Bill'

import styles from "./layout.module.css"

function Header({ basket, menu, ...props }) {

    const { Content } = Layout;
    const history = useHistory();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [basketCount, setBasketCount] = useState(0);
    const [basketTotalPrice, setBasketTotalPrice] = useState(0);
    const [openBillDrawer, setOpenBillDrawer] = useState(false);

    useEffect(() => {
        if (Object.keys(basket.basket).length && (menu.shop.result && basket.basket[menu.shop.result.uniqueName])) {
            console.log(basket.basket)
            console.log(menu.shop.result.uniqueName)
            console.log(props.computedMatch.params.restaurantName)
            let initialValue = 0
            let sum = basket.basket[menu.shop.result.uniqueName].reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.count
            }, initialValue)
            setBasketCount(sum)
        } else {
            setBasketCount(0)
        }

        if (Object.keys(basket.basket).length && (menu.shop.result && basket.basket[menu.shop.result.uniqueName])) {
            let initialValue = 0
            let sum = basket.basket[menu.shop.result.uniqueName].reduce(function (accumulator, currentValue) {
                return accumulator + (currentValue.price * currentValue.count)
            }, initialValue)
            setBasketTotalPrice(sum)
        } else {
            setBasketTotalPrice(0)
        }
    }, [basket, menu])

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div className={styles.mainContainer}>
            <Layout className={styles.layoutContainer}>
                <div className={styles.headerWrapper}>
                    {props.computedMatch.params.food ?
                        <div className={styles.backWrapper} onClick={() => history.goBack()}>
                            <RightOutlined />
                            <p className={styles.backText}>
                                برگشت
                            </p>
                        </div>
                        :
                        <MenuOutlined className={styles.menuIcon} onClick={() => setOpenDrawer(true)} />
                    }
                    {props.location.pathname !== "/" && <Badge onClick={() => setOpenBillDrawer(true)} count={basketCount}>
                        <ShoppingOutlined className={styles.basketIcon} />
                    </Badge>}
                </div>
                <Content className={styles.antContent}>
                    {props.children}
                </Content>
            </Layout >
            <Drawer
                title="منو"
                placement={'right'}
                onClose={() => setOpenDrawer(false)}
                visible={openDrawer}
            >
                <p style={{ cursor: "pointer" }} onClick={() => { history.push({ pathname: '/' }); setOpenDrawer(false) }}>
                    صفحه اصلی
                </p>
            </Drawer>
            <Drawer
                title="لیست سفارشات"
                placement={'left'}
                onClose={() => setOpenBillDrawer(false)}
                visible={openBillDrawer}
                className="billDrawer"
                footer={
                    <div className={styles.drawerFooter}>
                        <p>
                            مبلغ کل :
                        </p>
                        <p className={styles.totalPrice}>
                            {parseFloat(basketTotalPrice) / 10000}   هزار تومان
                        </p>
                    </div>
                }
            >
                <Bill drawer={setOpenBillDrawer} />
            </Drawer>
        </div >
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket,
    menu: state.menu,
});

export default connect(mapStateToProps, {})(Header);