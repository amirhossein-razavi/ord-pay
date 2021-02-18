import React from 'react';
import { Carousel, Card, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { onAddBasketCount } from '../../redux/actions/basketActions';
import { addBasketCount } from '../../globalFunctions/index'

import slider1 from '../../static/images/slider1.jpg'
import slider2 from '../../static/images/slider2.jpg'
import slider3 from '../../static/images/slider3.jpg'


import styles from "./singleFood.module.css"

function SingleFood(props) {

    const toAddBasketCount = () => {
        props.onAddBasketCount();
        addBasketCount();
    }

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img className={styles.sliderContent} src={slider1} />
                </div>
                <div>
                    <img className={styles.sliderContent} src={slider2} />
                </div>
                <div>
                    <img className={styles.sliderContent} src={slider3} />
                </div>
            </Carousel>
            <div className={styles.foodDescriptionWrapper}>
                <div className={styles.foodTitles}>
                    <div className={styles.foodNameWrapper}>
                        <p className={styles.foodName}>
                            {props.computedMatch.params.food}
                        </p>
                        <p className={styles.foodPrice}>
                            25 هزار تومن
                    </p>
                    </div>
                    <div className={styles.waitingTime}>
                        <ClockCircleOutlined style={{ marginLeft: 5 }} />
                10 دقیقه
                </div>

                </div>
                <p className={styles.foodDescription}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
                <p className={styles.foodDescription}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
                <p className={styles.foodDescription}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
                <Button type="primary" className={styles.basketButton} onClick={toAddBasketCount}>
                    + اضفه به سبد خرید
            </Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    state: state.basket
});

export default connect(mapStateToProps, { onAddBasketCount })(SingleFood);
