import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';

import TopHeader from "./component/Layout";
import Page404 from "./component/Page404";
import RouteWithLayout from "./component/RouteWithLayout";
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import RestaurantMain from './component/RestaurantMain';

function App() {

  return (
    <ConfigProvider direction="rtl">
      <Router>
        <Switch>
          <RouteWithLayout
            path="/"
            exact
            component={Home}
            layout={TopHeader}
          />
          <RouteWithLayout
            layout={TopHeader}
            path="/about-us"
            component={AboutUs}
          />
          <RouteWithLayout
            layout={TopHeader}
            path="/menu/:restaurantName"
            component={RestaurantMain}
          />
          <RouteWithLayout component={Page404} layout={TopHeader} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

export default App;
