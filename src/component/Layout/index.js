import React from 'react';
import { Layout, Badge } from 'antd'
import { ShoppingOutlined, MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import styles from "./layout.module.css"

function Header(props) {
    const { Content } = Layout;

    return (
        <div className={styles.mainContainer}>
            <Layout className={styles.layoutContainer}>
                <div className={styles.headerWrapper}>
                    <MenuOutlined className={styles.menuIcon} />
                    <Badge count={props.basket.basketCount}>
                        <ShoppingOutlined className={styles.basketIcon} />
                    </Badge>
                </div>
                <Content>
                    {props.children}
                </Content>
            </Layout >
        </div>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket
});

export default connect(mapStateToProps, {})(Header);