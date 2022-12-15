---
title: "Docker常用命令-2"
date: "2022-12-13"
image: "Docker常用命令-2.png"
excerpt: "Docker数据卷常用命令"
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
