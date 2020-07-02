const express = require('express')
const app = express()

const gen_data = () => {
    const time = new Date().getTime()
    let json_data = [{
        "key": `3+${time}`,
        "name": `王二+${time}`,
        "gender": "男"
    }]
    return json_data
}
const my_server = () => {
    app.get("/data", function (req, res) {
        //加上请求头请求时防止跨域错误
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')

        res.end(JSON.stringify(gen_data()))
    })
    app.listen(3000, () => {
        console.log("my_serve run in port 3000")
    })

}
my_server()