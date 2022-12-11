---
title: 'File Based Routing'
date: '2022-12-09'
image: 'file-based-routing.png'
excerpt: 'In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory.
Each page is associated with a route based on its file name.'
isFeatured: false
---

# 基于文件的路由

在 Next.js 中，一个 page（页面） 就是一个从 .js、jsx、.ts 或 .tsx 文件导出（export）的 React 组件 ，这些文件存放在 pages 目录下。每个
page（页面）都使用其文件名作为路由（route）。

`示例:`
如果你创建了一个命名为 `pages/about.tsx` 的文件并导出（export）一个如下所示的 React 组件，则可以通过 /about 路径进行访问。

```typescript jsx
import React from "react";

function About() {
  return <div>About</div>
};

export default About;
```

![7ea0e5ece21f460dade7d21d512cf531.png](7ea0e5ece21f460dade7d21d512cf531.png)

## 默认路由

index.tsx总是被当作它所在文件夹的默认路由界面.

`示例:`

在pages目录下新建一个about文件夹, 里面创建一个index.tsx

index.tsx

```typescript jsx
import React from "react";

const About: React.FC = () => (
  <div>
    <h1>The About Page</h1>
  </div>
);

export default About;
```

![5e46bf2aa1e64f59aad08a080eaa27ae.png](5e46bf2aa1e64f59aad08a080eaa27ae.png)

## 具有动态路由的页面

Next.js 支持具有动态路由的 pages（页面）。

`示例:`

如果你创建了一个命名为 pages/portfolio/[id].tsx 的文件，那么就可以通过
portfolio/1、portfolio/2 等类似的路径进行访问。

[id].tsx

```typescript jsx
import React from "react";
import { useRouter } from "next/router";

const PortfolioProjectPage: React.FC = () => {
  const router = useRouter();
  // query为路径参数, 类型为Object, 所以使用es6的解构语法
  const { id } = router.query;

  return (
    <div>
      <h2>The Portfolio Project Page</h2>
      <p>id = { id }</p>
    </div>
  );
};

export default PortfolioProjectPage;
```

![6b9985e3d0e94f5dad50388cf38eec5c.png](6b9985e3d0e94f5dad50388cf38eec5c.png)

![39a408c36f8e46fbbe4ec5c42f45fbcd.png](39a408c36f8e46fbbe4ec5c42f45fbcd.png)

## 多个嵌套的动态路由字段

可以使用[...whateverNameYouWant].tsx获取所有嵌套的路由字段.

创建一个命名为 pages/blog/[...slug].tsx 的文件

访问localhost:3000/blog/abc/123时, slug会被赋值成一个数组, 这个数组内含所有路由的值

`slug = [abc, 123]`

```typescript jsx
import React from "react";
import { useRouter } from "next/router";

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>The Blog Post Page</h1>
      <p>{ slug }</p>
    </div>
  )
};

export default BlogPostPage;
```

![d5e1ea020e494318abd06f5532449f12.png](d5e1ea020e494318abd06f5532449f12.png)

## 导航(Navigation)

### 组件式

可以使用next/link的Link组件, 与react-router使用方法一样

href属性值为要导航到的路由

```typescript jsx
import React from "react";
import Link from "next/link";

const ClientsPage: React.FC = () => {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {
          clients.map(
            ({ id, name }) =>
              <li>
                {/*
                 href可以使用模板字符串, 
                 也可以使用对象赋值, pathname: 路径名, query: 参数值
                 此段代码可以写为:
                 <Link href={ `/clients/${ id }` }>
                 { name }
                 </Link>
                 */ }
                <Link href={ {
                  pathname: "/clients/[id]",
                  query: { id: id }
                } }>
                  { name }
                </Link>
              </li>
          )
        }
      </ul>
    </div>
  );
};

export default ClientsPage;
```

### 编程式

导入next/router的useRouter

使用push方法或者replace方法, 参数为要导航到的路由

1. push: 可以回退页面
2. replace: 直接取代, 不可以回退页面

```typescript jsx
import React from "react";
import { useRouter } from "next/router";

const ClientsProjectPage: React.FC = () => {
  const router = useRouter();
  const loadProject = () => {
    router.push(
      /*
       同上, 这里也可以使用字符串
       例如:
       "/clients/max/projectA"
       * */
      {
        pathname: "/clients/[id]/[clientProjectId]",
        query: { id: 'max', clientProjectId: "projectA" }
      });
  }

  return (
    <div>
      <h2>The projects of a Given Client</h2>
      <button onClick={ loadProject }>
        Load Project A
      </button>
    </div>
  );
};

export default ClientsProjectPage;
```

