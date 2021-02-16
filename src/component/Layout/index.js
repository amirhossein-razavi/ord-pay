import React from 'react';
import { Layout } from 'antd'

import styles from "./layout.module.css"

function Header(props) {
    const { Content } = Layout;

    return (
        <div className={styles.mainContainer}>
            <Layout className={styles.layoutContainer}>
                <div>
                    Header
            </div>
                <Content>
                    {props.children}
                </Content>
            </Layout >
        </div>
    );
}

export default Header;
