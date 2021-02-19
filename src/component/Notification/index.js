import React from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import { turnNotification } from '../../redux/actions/notificationAction'

const Notification = ({ state, turnNotification }) => {

    const openNotification = () => {

        notification[state.type]({
            message: state.title,
            description: state.description,
            duration: state.duration,
            onClose: () => { turnNotification("", "", 3, false,"") }
        });

    };

    return (
        <>
            { state.show && openNotification()}
        </>
    )
}

const mapStateToProps = (state) => ({
    state: state.notification
});

export default connect(mapStateToProps, { turnNotification })(Notification);
