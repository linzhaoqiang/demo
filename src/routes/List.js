import React from 'react';
import { connect } from 'dva';
import ListItem from '../components/ListItem';
import Add from '../components/Add';
import { Radio } from "antd"

class Lists extends React.Component{

  handleDelete = (id) => {
    const {dispatch} = this.props
    dispatch({
      type: 'lists/remove',
      payload: id,
    });
  }
   handleAdd = () =>{
    const {dispatch, inputs} = this.props
    dispatch({
      type: 'lists/post',
      payload: inputs.input,
    })
  }

  handelChange = (e) => {
    const {dispatch} = this.props
    dispatch({
      type: 'inputs/change',
      payload: e.target.value
    })
  }

  handleType = (e) => {
    const {dispatch} = this.props
    dispatch({
      type: 'lists/handleType',
      payload: e.target.value
    })
  }

  onDone = (index, id) => {
    const {dispatch} = this.props
    dispatch({
      type: 'lists/done',
      payload: {index, id},
    })
  }

  render(){
    const {lists, inputs} = this.props

    return (
      <div >
        <Add onLoad={this.handleAsyncAdd} onAdd={this.handleAdd} onChange={this.handelChange} input={inputs.input}/>
        <br/>
        <hr/>
        <h2>List of Products</h2>
        <br/>
        <ListItem onDelete={this.handleDelete} lists={lists} done={this.onDone}/>
        <Radio.Group  onChange={this.handleType}>
          <Radio.Button value="All">All</Radio.Button>
          <Radio.Button value="Active">Active</Radio.Button>
          <Radio.Button value="Complete">Complete</Radio.Button>
        </Radio.Group>
      </div>
    )

  }
}
const mapStateToProps = (state) => {
  var lists = [];
  switch (state.lists.type){
    case "All" :
      lists = [...state.lists.comment]
      break;
    case "Active" :
      lists = state.lists.comment.filter((value)=>{return value.done === false})
      break;
    case "Complete" :
      lists = state.lists.comment.filter((value)=>{return value.done === true})
      break;
    default:
      break
  }
  return {
    dispatch:state.dispatch,
    lists,
    inputs : state.inputs
  }
};
export default connect(mapStateToProps)(Lists);
