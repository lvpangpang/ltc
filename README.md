# react-antd-mobile

React 移动端组件库

**[文档地址](https://lvpangpang.github.io/react-antd-mobile)**

## 1. 使用 demo

```javascript
import { Button } from "react-antd-mobile";
function Index() {
  return (
    <>
      <Button loading>确定</Button>
      <br></br>
      <Button disabled>disabled</Button>
      <br></br>
      <Button type="warning">Warning</Button>
      <br></br>
      <Button type="error">Error</Button>
      <br></br>
      <Button type="success" style={{ fontSize: "30px" }}>
        Success
      </Button>
    </>
  );
}
```

## 2. 按需加载

1. react-antd-mobile 支持基于 Tree Shaking 的按需加载，大部分的构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking，所以绝大多数情况下你无需做额外的配置即可拥有较小的包体积。
2. 如果你的环境不支持 Tree Shaking，可以使用下面的方式实现按需加载：

```js
[
  "import",
  { libraryName: "react-antd-mobile", libraryDirectory: "es" },
  "react-antd-mobile",
];
```
