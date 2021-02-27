import React from 'react';
import { Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { IMAGE_URL } from '../../globalFunctions/url'
import { tree_digit_number } from '../../globalFunctions/index'
import { onAddBasket, onDecreaseBasket } from '../../redux/actions/basketActions';

import styles from "./bill.module.css"

function Bill({ basket, onAddBasket, onDecreaseBasket, ...props }) {
    const history = useHistory();

    const toSingleFood = (item) => {
        history.push({ pathname: `../../food/${item.name}`, state: item })
        props.drawer(false)
    }

    return (
        <div className={styles.billWrapper}>
            <div className={styles.foodsLists}>
                {basket.basket.length !== 0 && basket.basket.map((item) => {
                    return (
                        <Row className={styles.foodCart}>
                            <Col onClick={() => toSingleFood(item)} span={4}>
                                <img src={IMAGE_URL + item.images[0].path} width={40} height={40} />
                            </Col>
                            <Col onClick={() => toSingleFood(item)} span={10}>
                                <p className={styles.price}>
                                    {tree_digit_number(item.price)} هزار ریال
                                </p>
                                <p className={styles.name}>
                                    {item.name}
                                </p>
                            </Col>
                            <Col span={10} className={styles.countWrapper}>
                                <Button className={styles.addButton} type="primary" shape="circle" onClick={() => onAddBasket(item)}>
                                    +
                                 </Button>
                                <p className={styles.name}>
                                    {item.count}
                                </p>
                                <Button className={styles.decreaseButton} type="primary" shape="circle" onClick={() => onDecreaseBasket(item)}>
                                    -
                                </Button>
                            </Col>
                        </Row>
                    )
                })}
            </div>
            {/* <p type="primary" className={styles.payButton}>
                سفارش و پرداخت
            </p> */}
        </div>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket
});

export default connect(mapStateToProps, { onAddBasket, onDecreaseBasket })(Bill);

