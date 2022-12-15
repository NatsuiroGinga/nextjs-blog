---
title: "Docker常用命令"
date: "2022-12-15"
image: "Docker常用命令.png"
excerpt: "Docker常用镜像和容器操作命令"
isFeatured: true
---

# 1. 镜像相关命令

## 1.1 镜像名称一般由两部分组成: [repository]:[tag]

例如: `mysql:5.7`

## 1.2 在没有指定 tag 的时候, 默认是 latest, 代表最新版本的镜像

# 2. 镜像操作命令

## 2.1 docker build 构建镜像

## 2.2 docker images 查看镜像

## 2.3 docker rmi 删除镜像

参数可以为镜像 id, 或者镜像名称 ( [repository]:[tag] )

例如:

```bash
docker rmi mysql:5.7
```

## 2.4 docker pull 从服务拉取镜像

参数为 [repository]:[tag]

例如:

```bash
docker pull mysql:5.7
```

## 2.5 docker push 推送镜像到服务

## 2.6 docker save 保存镜像为一个压缩包

选项: -o 输出文件的名称, 将镜像保存为一个压缩包

例如:

```bash
docker save -o my_nginx.tar
```

## 2.7 dokcer load 加载压缩包为镜像

选项:

- -i 读取文件的名称 , 将压缩包加载为镜像
- -q 不输出加载信息

# 3. 容器命令

## 3.1 创建运行一个容器

```bash
docker run --name container_name -p host_port:container_port -d image_name
```

命令解读:

- docker run : 创建并运行一个 docker 容器

- --name : 给容器起一个名字, 比如叫做 mn

- -p : 将宿主机端口与容器端口映射, 冒号左侧是宿主机端口, 右侧是容器端口

- -d : 让容器后台运行

## 3.2 列出容器信息

默认只列出正在运行的容器

```bash
docker ps
```

使用`-a` 列出所有容器信息

## 3.3 查看日志

查看指定容器的日志

```bash
docker logs container_name
```

例如:

```bash
docker logs mn
```

添加 -f 可以持续查看日志

```bash
docker logs -f mn
```

## 3.4 停止容器

```bash
docker stop container_name
```
