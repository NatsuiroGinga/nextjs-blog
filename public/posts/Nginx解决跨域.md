---
title: 'Nginx解决跨域'
date: '2022-12-13'
image: 'Nginx解决跨域.png'
excerpt: 'Nginx解决跨域'
isFeatured: false
---

前端项目域名是 http://a.xxxx.com, 后端的接口域名是 http://b.yyy.com:8080/api，然后后端接口没有设置跨域相关的响应设置头，因此就接口和我们
域名就会存在跨域的情况，因此我们可以使用 nginx服务器来配置一下；

在后端的 nginx 配置文件中添加如下配置：

# 1. 一般配置

```nginx
server {
  listen 8080;
  server_name b.yyy.com;
  
  location /api {
    # 前端项目的ip地址
    add_header Access-Control-Allow-Origin http://a.xxxx.com:3000;
    # 允许的请求方法
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS,PUT,DELETE;
    ### 其他设置
  }
}
```

# 2. 通配符配置

```nginx
server {
  listen 8080;
  server_name b.yyy.com;
  
  location /api {
    # 允许所有的ip
    add_header Access-Control-Allow-Origin *;
    # 允许的请求方法
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS,PUT,DELETE;
    ### 其他设置
  }
}
```