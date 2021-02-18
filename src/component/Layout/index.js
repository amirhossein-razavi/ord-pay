import React from 'react';
import { Layout, Badge } from 'antd'
import { ShoppingOutlined ,MenuOutlined} from '@ant-design/icons';

import styles from "./layout.module.css"

function Header(props) {
    const { Content } = Layout;

    return (
        <div className={styles.mainContainer}>
            <Layout className={styles.layoutContainer}>
                <div className={styles.headerWrapper}>
                    <MenuOutlined className={styles.menuIcon} />
                    <Badge count={localStorage.getItem("basketCount")}>
                        <ShoppingOutlined className={styles.basketIcon}/>
                    </Badge>
                </div>
                <Content>
                    {props.children}
                </Content>
            </Layout >
        </div>
    );
}

export default Header;
