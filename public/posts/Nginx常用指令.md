---
title: 'Nginx常用指令'
date: '2022-12-13'
image: 'Nginx常用指令.png'
excerpt: 'Nginx常用指令'
isFeatured: true
---

# 1. 查看所有Nginx进程

```bash
[root@VM-4-9-centos conf.d]# ps -ef | grep nginx
root     15181     1  0 14:40 ?        00:00:00 nginx: master process /usr/sbin/nginx
nginx    15182 15181  0 14:40 ?        00:00:00 nginx: worker process
nginx    15183 15181  0 14:40 ?        00:00:00 nginx: worker process
root     17124 14573  0 14:54 pts/1    00:00:00 grep --color=auto nginx
```

# 2. 检查Nginx配置文件是否正确

## 2.1 nginx -t

只输出配置文件是否正确的提示信息, 不会预览配置文件

```bash
[root@VM-4-9-centos conf.d]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

## 2.2 nginx -T

输出配置文件的详细信息, 包括配置文件的路径, 配置文件的内容, 配置文件的语法是否正确

## 2.3 nginx -tq

只在配置文件语法错误时输出提示信息, 配置文件语法正确时不输出任何信息

# 3. 开启和关闭Nginx

## 3.1 nginx -s stop

快速停止, 不会等待当前请求处理完毕

## 3.2 nginx -s quit

优雅停止, 会等待当前请求处理完毕

## 3.3 nginx -s reload

重新加载配置文件, 不需要重新启动Nginx

# 4. 指定配置文件启动Nginx

```bash
nginx -c /home/my.conf
```

