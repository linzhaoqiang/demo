import request from '../utils/request';
import {fetch} from 'dva/fetch'

export function query() {
  return request('/list');
}
export function post(name){
  console.log(name)
  return request('/list',{
    method: "post",
    body: {"name" : name}
  })
}
