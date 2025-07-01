---
title: Docusaurus使用手册
description: Docusaurus使用手册.
authors:
  - name: xilio
    title: xilio-dev
    url: https://github.com/xilio-dev
    image_url: https://avatars.githubusercontent.com/u/195513923?…00&u=fb14317bf4a11585a689fa3e7c4c3a9417ff4d85&v=4
    socials:
      github: xilio-dev
tags: [Docusaurus, 教程]
image: https://avatars.githubusercontent.com/u/195513923?…00&u=fb14317bf4a11585a689fa3e7c4c3a9417ff4d85&v=4
hide_table_of_contents: false
---

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

<!-- truncate -->
## 高亮显示代码一行或者几行
1、highlight-next-line您可以使用带有**highlight-start**和的注释**highlight-end**来选择要突出显示的行。

```js 
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return '这行被高亮了！';
  }

  return '这里不会';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return '这块被高亮了！';
  }
  // highlight-end

  return '这里不会';
}
```
2、采用元数据标记显示高亮行
```jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```
## 展示代码行序号
```jsx showLineNumbers=3
import React from 'react';

export default function MyComponent(props) {
  return <div>Foo</div>;
}
```

## 警告
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::::info[Parent]

Parent content

::::danger[Child]

Child content

:::tip[Deep Child]

Deep child content

:::

::::

:::::
