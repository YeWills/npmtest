# 组件库

## 使用
```
yarn build -w //开启代码实时监听编译，当packages内的包的src文件有变化时，实时编译到对应的lib文件内。
git add .
git commit -m "版本修改"
git push
yarn dpublish //代码编译，并提交后，将包发布到npm服务器上
```

## 相关博客
[npm包开发](https://yewills.github.io/2020/07/12/npm/)