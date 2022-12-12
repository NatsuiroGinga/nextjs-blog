---
title: Deployment Steps And Considerations
date: '2022-12-11'
image: 'deployment-steps.jpg'
excerpt: Next.js Application's Deployment Steps And Considerations
isFeatured: true
---

# 1. Add page metadata

使用Head组件加入页面元数据，如title、description、keywords等。

```typescript jsx
import Head from 'next/head';
import React from "react";

const MyPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Page</title>
        <meta name="description" content="My Page Description"/>
      </Head>
      <h1>My Page</h1>
    </>
  );
};
```

# 2. Use environment variables

使用环境变量，如API地址、Google Analytics ID等。

# 3. Add a favicon

添加favicon。

# 4. Test your application

测试yarn build 和 start。