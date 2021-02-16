import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = props => {
    const { layout: Layout, component: Component, ...rest } = props;
    console.log(props)
    return (
        <Route
            {...rest}
            render={matchProps => {
                const combineProps = { ...matchProps, ...props }
                return (
                    <Layout  {...combineProps} >
                        <Component  {...combineProps} />
                    </Layout>
                )
            }}
        />
    );
};

export default RouteWithLayout;
