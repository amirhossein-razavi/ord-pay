import React, { useEffect, useState } from 'react';
import { Layout, Badge, Drawer } from 'antd'
import { ShoppingOutlined, MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { tree_digit_number } from '../../globalFunctions/index'

import Bill from '../Bill'

import styles from "./layout.module.css"

function Header({ basket, ...props }) {

    const { Content } = Layout;
    const history = useHistory();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [basketCount, setBasketCount] = useState(0);
    const [basketTotalPrice, setBasketTotalPrice] = useState(0);
    const [openBillDrawer, setOpenBillDrawer] = useState(false);

    useEffect(() => {
        if (basket.basket.length) {
            let initialValue = 0
            let sum = basket.basket.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.count
            }, initialValue)
            setBasketCount(sum)
        }
        if (basket.basket.length) {
            let initialValue = 0
            let sum = basket.basket.reduce(function (accumulator, currentValue) {
                return accumulator + (currentValue.price * currentValue.count)
            }, initialValue)
            setBasketTotalPrice(sum)
        }
    }, [basket])

    return (
        <div className={styles.mainContainer}>
            <Layout className={styles.layoutContainer}>
                <div className={styles.headerWrapper}>
                    <MenuOutlined className={styles.menuIcon} onClick={() => setOpenDrawer(true)} />
                    <Badge onClick={() => setOpenBillDrawer(true)} count={basketCount}>
                        <ShoppingOutlined className={styles.basketIcon} />
                    </Badge>
                </div>
                <Content>
                    {props.children}
                </Content>
            </Layout >
            <Drawer
                title="منو"
                placement={'right'}
                onClose={() => setOpenDrawer(false)}
                visible={openDrawer}
            >
                <p>تست</p>
                <p>تست</p>
                <p>تست</p>
            </Drawer>
            <Drawer
                title="لیست صورتحساب"
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
                            {tree_digit_number(basketTotalPrice)} هزار ریال
                        </p>
                    </div>
                }
            >
                <Bill drawer={setOpenBillDrawer} />
            </Drawer>
        </div>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket
});

export default connect(mapStateToProps, {})(Header);