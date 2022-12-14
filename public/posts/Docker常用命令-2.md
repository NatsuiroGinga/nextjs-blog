---
title: "Docker常用命令-2"
date: "2022-12-16"
image: "Docker常用命令-2.png"
excerpt: "Docker数据卷和部署常用命令"
isFeatured: true
---

# 1. 操作数据卷

基本语法:

```bash
docker volume [COMMAND]
```

docker volume 命令是数据卷操作, 根据命令后跟随的 command 来确定下一步的操作

- create : 创建一个 volume
- inspect : 显示一个或多个 volume 的信息
- ls : 列出所有的 volume
- prune : 删除所有未被使用的 volume
- rm : 删除一个或多个指定的 volume

# 2. 挂载数据卷

创建时, 通过-v 参数挂载一个数据卷到某个容器目录

基本语法:

```bash
docker run -v [volume_name]:[container_path] [image_name]
```

解释:

- volume_name : 数据卷的名称
- container_path : 容器内的路径
- image_name : 镜像名称

# 3. 便捷命令

不用先创建数据卷, 创建容器时直接自动创建并挂载一个数据卷到某个容器目录

```bash
docker run --name container_name -p host_port:container_port -v local_volume_name:container_path -d image_name
```

解释:

- container_name : 容器名称
- host_port : 主机端口
- container_port : 容器端口
- local_volume_name : 主机内数据卷名称
- container_path : 容器内的路径
- image_name : 镜像名称

# 4. 目录挂载

类似于数据卷挂载:

- -v [宿主机目录]:[容器内目录]
- -v [宿主机文件]:[容器内文件]

# 5. 自定义镜像

## 5.1 Dockerfile

指令如下:

![Dockerfile指令表格](dockerfile.jpg)

使用方法:

```bash
docker build -t image_name:tag .
```

"." 代表 Dockerfile 所在路径

## 5.2 登录 dockerhub

```bash
docker login
```

## 5.3 给旧镜像起名

```bash
docker tag old_name:old_tag new_name:new_tag
```

## 5.4 推送到 docker hub

```bash
docker pull dockerhub_name/image_name:tag
```

未完
