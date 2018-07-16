import React from 'react'
import PropTypes from 'prop-types';
import { Input, Icon, Button } from 'antd'


const Add = ({ onAdd, onAsyncAdd, onChange, input }) => {

  // function add (){
  //   this
  // }
  const InputGroup = Input.Group
  return (
    <div>
      <Input
        placeholder="Enter your todos"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        value={input}
        onChange={onChange}
        size="default"
        suffix={<Icon type = 'plus'/>}
        onPressEnter={onAdd}
      />
      {/*<Button type="primary" onClick={ onAdd }><Icon type="plus"></Icon></Button><br/>*/}
    </div>
  )
};

Add.propTypes = {
  onAdd: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default Add;
