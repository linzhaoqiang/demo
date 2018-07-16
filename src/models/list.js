import * as listsService from "../services/List"
import * as storage from "../services/handleLocalStorage"

export default {
  namespace: 'lists',
  state: {
    type: "All",
    comment: []
  },
  reducers: {
    initialize(state, { payload: data }){
      state.comment = [...data]
      return Object.assign({}, state)
    },
    handleType( state, { payload: type } ){
      switch (type){
        case "All":
        state.type = "All";
        break;
        case "Active":
           state.type = "Active";
          break;
        case "Complete":
           state.type = "Complete";
          break;
        default:
        break
      }
      return Object.assign({}, state);
    }
  },
  effects:{
    *query(_undefined, { put, call }) {
      if(localStorage.length === 0){
        const count = yield call(listsService.query, {})
        storage.saveLocalStorage(count)
        yield put({ type: 'lists/initialize', payload: Object.assign(count.data) });
      }else{
        const data = storage.useLocalStorage()
        yield put({ type: 'lists/initialize', payload: data });
      }
    },
    *post({payload : name}, { put, call }){
      yield call(listsService.post, name)
      const count = yield call(listsService.query, {})
      storage.saveLocalStorage(count)
      yield put({ type: 'lists/query' });
    },

    *remove({payload: id}, {put ,call}){
      yield call(listsService.remove, id)
      localStorage.removeItem(id)
      yield put({ type: 'lists/query'});
    },

    *done({payload: param}, {put ,call}){
      console.log(param)
      yield call(listsService.changeDone, param)
      const count = yield call(listsService.query, {})
      storage.saveLocalStorage(count)
      yield put({ type: 'lists/query' });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          setTimeout(() => {
            dispatch({
              type: 'lists/query',
            })
          },1000)
        }
      });
    },
  },
};
