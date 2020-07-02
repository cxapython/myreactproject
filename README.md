### 需要安装的有
```
npm install dva-cli -g
npm install antd
npm install babel-plugin-import
```

### 文件夹里大致意义如下：
 
- asserts 用于存放静态资源图片视频之类的。
- components 用于存放公共组件，比如页面头尾导航条。
- routes 用于存放路由组件，可以通俗的理解成页面。与components的区别在于一般是非公共的并且会跟model里的数据模型联系起来。
- models 用于存放模型文件，state以及reducer都会写在里面，通过connect跟routes里面的组件进行绑定。routes中的组件通过connect拿到model中的数据，model也能通过connect接收到组件中dispatch的action。
- services 用于存放跟后台交互的服务文件，一般都需要调用后台的接口。
- utils 用于存放工具类库。


