---
title: 'Page Pre-rendering'
date: '2022-09-12'
image: 'page-pre-rendering.png'
excerpt: 'By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance,
instead of having it all done by client-side JavaScript.'
isFeatured: true
---

# Next.js的页面预渲染

## 标准的React应用

假设在项目目录下有一个pages文件夹, 里面有一些页面文件, 比如index.js, about.js, contact.js等等.这些页面需要请求后台数据.

那么当用户访问这些页面时, 服务器端会先返回一个空的HTML文件和所有javascript代码, 然后这些javascript代码运行, 并向后端请求数据,
最后把数据渲染到页面上.

这样的话,
用户在访问页面时, 会先看到一个空白页面,
然后再看到页面内容.这样的体验不是很好.

## Next.js应用

Next.js不是在页面被发送到客户端后加载数据, 而是在服务器端就加载数据来预渲染页面和所有HTML文件.

这样当用户访问页面时, 客户端收到一个完全填充的HTML文件, 这样用户就不会看到一个空白页面了.

而且, Next.js还会在客户端运行javascript代码, 以便在页面加载后, 通过客户端渲染来更新页面.这被称为`水合(Hydration)`.

这样搜索引擎爬虫就可以抓取到页面的内容了, 做到了`搜索引擎优化(SEO, Search Engine Optimization)`.

