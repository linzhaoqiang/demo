import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, List, Icon } from 'antd';


class ListItem extends React.Component{

  handleChange = (e) => {
    const  index = e.target.getAttribute("index")
    const  id = e.target.getAttribute("id")
    this.props.done(index, id)
  }
  delete = (e, id) => {
    this.props.onDelete(id)
  }
  onchange = (e, index) => {
    e.stopPropagation()
    let { lists } = this.props
    const  id = lists[index].id
    this.props.done(index, id)
  }

  render(){
    let { lists } = this.props
    const data = [];
    lists.forEach(((value) => {
      data.push(value.name)
    }))
    return (
      <div>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
            renderItem={( item, index) => (
            <List.Item style={{position: "relative"}}>
              <Checkbox checked = {lists[index].done} onChange={e => {this.onchange(e, index)}}>{item}</Checkbox>
              <Icon onClick={e => {this.delete(e, lists[index].id)}} type="close-circle-o" style={{ float: "right", position: "absolute", top: 11, right: 17}}/>
            </List.Item>)}
        />
      </div>
    )
  }
}
ListItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

export default ListItem;
