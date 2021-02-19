import React from 'react';
import { API_URL } from './url';
import { LOGOUT_SUCCESS, ON_NOTIFICATION } from '../redux/actions/types';

const SendRequest = (URL, method, ContentType, Params, dispatch) => {
  let headers = new Headers();
  const token = localStorage.getItem('token');

  if (token !== null && ContentType !== null) {
    headers.append("token", token.toString());
  }


  if (ContentType !== null) headers.append("Content-Type", ContentType);

  return new Promise((resolve, reject) => {
    fetch(API_URL + URL, {
      method: method,
      headers: headers,
      body: Params
    }).then((response) => {
      if (response.status === 401) {
        dispatch({
          type: ON_NOTIFICATION, payload: {
            title: "خطا در احراز هویت",
            description: "توکن شما منقضی شده است. لطفا دوباره وارد شوید",
            duration: 4,
            show: true,
            type: 'error'
          }
        });
        setTimeout(() => {
          window.location.pathname = "/"
        }, 3000);
        reject({ "messages": "" })
      }
      else if (response.status === 403) {
        dispatch({
          type: ON_NOTIFICATION, payload: {
            title: "عدم دسترسی",
            description: "شما به این قسمت دسترسی ندارید",
            duration: 4,
            show: true,
            type: 'error'
          }
        });
        reject({ "messages": "" })
      }
      else if (response.status === 500) {
        dispatch({
          type: ON_NOTIFICATION, payload: {
            title: "خطا سرور",
            description: "خطایی رخ داده است. لطفا دوباره تلاش کنید",
            duration: 4,
            show: true,
            type: 'error'
          }
        });
        reject({ "messages": "" })
      }
      else if (response.status !== 200) {
        response.json().then(function (data) {
          dispatch({
            type: ON_NOTIFICATION, payload: {
              title: "",
              description: data.msg,
              duration: 4,
              show: true,
              type: 'error'
            }
          });
          reject(data)
        });
      }
      else {
        response.json().then(function (data) {
          resolve(data)
        });
      }
    }).catch((error) => {
      reject({ "messages": error })
    });
  });

}

export default (SendRequest)
