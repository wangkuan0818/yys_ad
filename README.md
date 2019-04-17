# yys_ad 
#### .

### 项目介绍
采用了 `Taro + TaroUI`，数据处理没有使用 `redux`，部分全局数据直接使用的 `GlobalData`，原本生成广告页面打算使用 `html2canvas` 生成图片供用户保存使用，目前小程序 `canvas` 保存图片需要手画，暂未找到很好的解决方式。
小程序中使用的图片均为网络下载下来的，如有侵权联系删除抱歉。

### 项目结构
``` 
+--- client                 # 源代码目录
      +--- config           # 项目配置
      +--- src              # 源代码
            |--- components # 组件
            |--- image      # 图片
            |--- pages      # 页面
            |--- style      # 部分公用样式
            |--- util       # 部分工具库
            |--- app.js     # 路口文件
            |--- app.less   # 公用样式

      |--- package.json     # package.json
      |--- .eslintrc        # eslint代码规范

+--- cloud                  # 云代码目录
      |--- function         # 云代码组件库
            |--- login
            |--- ...
      
```

### 小程序运行
#### 运行
```
npm run dev:weapp
```
#### 构建
```
npm run build:weapp
```
