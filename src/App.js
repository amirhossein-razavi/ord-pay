import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';

import store from './redux/store';
import { setItem, getItem } from './globalFunctions/asyncLocalStorage';
import Loading from './component/Loading';
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
    test()
  })


  const test = async () => {
    const data = JSON.parse(localStorage.getItem('basket'))
    console.log(await getItem('basket'))
  }


  const checkBasketCount = async () => {
    const basket = await getItem("basket");
    !basket && setItem("basket", [])
  }

  return (
    <Provider store={store}>
      <ConfigProvider direction="rtl">
        <Loading />
        <Router>
          <Switch>
            <RouteWithLayout
              exact
              path="/"
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
              path="/shop/:restaurantName"
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
