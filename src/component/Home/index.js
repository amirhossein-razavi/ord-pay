import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Skeleton } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

import styles from "./styles.module.css";
import { IMAGE_URL } from '../../globalFunctions/url'
import barliImage from '../../static/images/resturant-cover.jpg';
import { getShops } from '../../redux/actions/shopsActions';

function Home({ shops, getShops, ...props }) {
    const history = useHistory();
    const { Meta } = Card;

    useEffect(() => {
        getShops()
    }, [])

    useEffect(() => {
        console.log(shops)
    }, [shops])

    return (
        <div style={{ padding: 50 }}>
            {/* <FontAwesomeIcon icon="fas fa-coffee" /> */}
            {(shops.shop && shops.shop.result) && shops.shop.result.items.map((item) => {
                return (
                    <Card
                        className={styles.shopCard}
                        onClick={() => history.push({ pathname: `shop/${item.uniqueName}` })}
                        hoverable
                        style={{ width: "100%" }}
                        cover={item.shopImages.length !== 0 ?
                            <div className={styles.shopImage} style={{ backgroundImage: `url(${IMAGE_URL}${item.shopImages[0].path})` }}></div> :
                            <Skeleton.Image className={[styles.shopNonImage, "skeletonImage"].join(" ")} />}
                    >
                        <Meta style={{ width: "100%" }} title={item.name} />
                    </Card>
                )
            })}
        </div >
    );
}

const mapStateToProps = (state) => ({
    shops: state.shops,
});

export default connect(mapStateToProps, { getShops })(Home);
