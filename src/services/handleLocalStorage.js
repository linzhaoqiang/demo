export function saveLocalStorage(count){
  for(let i = 0; i < count.data.length; i++) {
    const key = count.data[i].id
    const a = count.data.filter((value) => {return value.id == key})
    localStorage[count.data[i].id] = JSON.stringify(a[0])
  }
}
export function useLocalStorage(){
  const data = []
  var arr = [];
  console.log(localStorage)
  for(var prop in localStorage){
    console.log(prop)
    arr.push(prop)
  }
  console.log(arr)
  const key = arr.filter((x, key) => {return key < localStorage.length})
  key.sort((a, b) => {
    return a - b;
  })
  for(let i = 0; i < key.length; i++){
    data.push(JSON.parse(localStorage[key[i]]))
  }
  // console.log()
  return data
}
