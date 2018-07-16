const Mock=require('mockjs');
let db=Mock.mock({
  'data|3-6':[{
    "id|+1":1,
    name:'@name',
    "done": false
  }]
});

module.exports={
  [`GET /list`](req,res){
    res.send(db.data)
  },
  [`POST /list`](req,res){
    let body=req.body;
    if(body.mode == "remove"){
        db.data = db.data.filter((value) => {return body.id != value.id})
    }else if(body.mode == "post"){
      const done = false
      if(db.data.length != 0){
        const length = db.data.length - 1
        let id = db.data[length].id;
        id++;
        const newTodo = {
          name: body.name,
          id: id,
          done: done
        }
        db.data.push(newTodo);
      }else{
        let id = 1;
        const  newTodo = {
          name: body.name,
          id: id,
          done: done
        }
        db.data.push(newTodo);
      }
    }else if(body.mode === 'changeDone'){
      console.log(body)
      const a = db.data.filter((value) => {return body.param.id == value.id})
      // console.log(a)
      a[0].done = !a[0].done
      db.data.splice(body.param.index, 1, a[0])
      // console.log(db.data)
    }
    res.status(200).json(db);
  }
}
