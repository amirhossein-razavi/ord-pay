import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';

import store from './redux/store';
import { setItem, getItem } from './globalFunctions/asyncLocalStorage';
import TopHeader from "./component/Layout";
import Page404 from "./component/Page404";
import RouteWithLayout from "./component/RouteWithLayout";
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import RestaurantMain from './component/RestaurantMain';
import SingleFood from './component/singleFood';

function App() {

  useEffect(() => {
    checkBasketCount()
  })

  const checkBasketCount = async () => {
    const basketCount = await getItem("basketCount");
    !basketCount && setItem("basketCount", 0)
  }

  return (
    <Provider store={store}>
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
            <RouteWithLayout
              layout={TopHeader}
              path="/food/:food"
              component={SingleFood}
            />
            <RouteWithLayout component={Page404} layout={TopHeader} />
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
