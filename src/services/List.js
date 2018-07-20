import request from '../utils/request';

export function query() {
  return request('/list',{
    method: "get"
  });
}
export function post(name){
  return request('/list',{
    method: "POST",
    headers : {"Content-Type": "application/json"},
    body: JSON.stringify({name, mode: "post",})
  })
}
export function remove(id){
  return request('/list', {
    method: "POST",
    headers : {"Content-Type": "application/json"},
    body: JSON.stringify({id, mode: "remove"})
  })
}
export function changeDone(param){
  return request('/list', {
    method: "POST",
    headers : {"Content-Type": "application/json"},
    body: JSON.stringify({param, mode: "changeDone"})
  })
}
