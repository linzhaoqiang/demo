export default {
  namespace: 'inputs',
  state: {
    input: '',
  },
  reducers: {
    change(state, { payload: name }){
      return  {
        input: name,
      }
    },
  },
};
