const express = require('express')
const app = express()
const time =  Date.now();

let json_data = [{
  "key": `3-${time}`,
  "name": `王二-${time}`,
  "gender": "男"
}]
app.get("/data", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')

  res.end(JSON.stringify(json_data))
})
app.listen(3000, () => {
  console.log("安排上了")
})
