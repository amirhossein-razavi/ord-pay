import React, { useState } from 'react';
import { Layout, Badge, Drawer } from 'antd'
import { ShoppingOutlined, MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import styles from "./layout.module.css"

function Header(props) {

    const { Content } = Layout;

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div className={styles.mainContainer}>
            <Layout className={styles.layoutContainer}>
                <div className={styles.headerWrapper}>
                    <MenuOutlined className={styles.menuIcon} onClick={() => setOpenDrawer(true)} />
                    <Badge count={props.basket.basketCount}>
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
        </div>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket
});

export default connect(mapStateToProps, {})(Header);