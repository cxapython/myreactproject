const express = require('express')
const app = express()


const get_data=()=>{
  const time =  Date.now();

  let json_data = [{
    "key": `3-${time}`,
    "name": `王二-${time}`,
    "gender": "男"
  }]
  return json_data

}

app.get("/data", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')

  res.end(JSON.stringify(get_data()))
})
app.listen(3000, () => {
  console.log("安排上了")
})
