import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'antd';
import barliImage from '../../static/images/resturant-cover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Home() {
    const history = useHistory();
    const { Meta } = Card;

    return (
        <div style={{ padding: 50 }}>
            {/* <FontAwesomeIcon icon="fas fa-coffee" /> */}
            <Card
                onClick={() => history.push({ pathname: '/menu/barli' })}
                hoverable
                style={{ width: "100%" }}
                cover={<img src={barliImage} />}
            >
                <Meta style={{ width: "100%" }} title={'Barli'} />
            </Card>
        </div>
    );
}

export default Home;
