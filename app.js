const express = require('express');
const userRouter = require('./routes/user.js');
const proRouter = require('./routes/product.js');
//引入body-parser中间件
const bodyParser = require('body-parser');
var app = express();
app.listen(8080);

//使用body-parser中间件，将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false  //不使用扩展的查询字符串模块qs,而是使用官方提供的querystring模块解析为对象
}));

//托管静态资源到public目录
app.use(express.static('./public'));
//使用路由器，挂载到/user下
app.use('/user',userRouter);
app.use('/product',proRouter);
