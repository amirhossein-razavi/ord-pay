import React from 'react';
import styles from './loading.module.css';
import { connect } from 'react-redux';

const Loading = (props) => {

    return (
        props.loading.loading &&
        < div className={[styles.loadingContainer].join(" ")} >
            <p>
                کمی صبر کنید ...
            </p>
        </div >
    );
}

const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(mapStateToProps, {})(Loading);