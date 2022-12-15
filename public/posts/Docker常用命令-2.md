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
