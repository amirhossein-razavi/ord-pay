import React, { useEffect, useState } from 'react';
import { Carousel, Button, Divider } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { onAddBasket } from '../../redux/actions/basketActions';
import { IMAGE_URL } from '../../globalFunctions/url'
import { tree_digit_number } from '../../globalFunctions/index'

import styles from "./singleFood.module.css"

function SingleFood({ onAddBasket, ...props }) {

    const [data, setData] = useState(props.location.state)

    useEffect(() => {
        setData(props.location.state)
    }, [props.location.state])

    return (
        <div>
            <Carousel autoplay>
                {data.images.length && data.images.map((item) => {
                    return (
                        <div>
                            <img className={styles.sliderContent} src={IMAGE_URL + item.path} />
                        </div>
                    )
                })}
            </Carousel>
            <div className={styles.foodDescriptionWrapper}>
                <div className={styles.foodTitles}>
                    <div className={styles.foodNameWrapper}>
                        <p className={styles.foodName}>
                            {data.name}
                        </p>
                        <p className={styles.foodPrice}>
                            {parseFloat(data.price) / 10000}   هزار تومان
                    </p>
                    </div>
                    <div className={styles.waitingTime}>
                        <ClockCircleOutlined style={{ marginLeft: 5 }} />
                10 دقیقه
                </div>
                </div>
                <Divider />
                {data.ingredients.length !== 0 &&
                    <div>
                        <p className={styles.ingredientsTitle}>
                            مواد تشکیل دهنده
                    </p>
                        {data.ingredients.map((item) => {
                            return (
                                <div className={styles.ingredientsItem}>
                                    <p>{item.name}</p>
                                    <p>{item.value.replace('gr', 'گرم')}</p>
                                </div>
                            )
                        })}
                    </div>}
                {/* <p className={styles.foodDescription}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
                <p className={styles.foodDescription}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
                <p className={styles.foodDescription}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p> */}
                <Button type="primary" className={styles.basketButton} onClick={() => onAddBasket(data)}>
                    + اضافه به لیست سفارشات
            </Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    state: state.basket
});

export default connect(mapStateToProps, { onAddBasket })(SingleFood);
