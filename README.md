# redux-saga-demo

> forked from [redux-saga-beginner-tutorial](https://github.com/redux-saga/redux-saga-beginner-tutorial)

`redux` 理解地差不多了，但是异步这一块，都是将就着 `redux-thunk` 用，但是这玩意还是不太好用，所以去学一下 `redux-saga`， 算是把 `react` 的生态基本学了一遍，形成了闭圈。一直听说 `redux-saga` 这玩意概念多，比较难搞，
当初看了一眼是 `generator` 那一套，以为这玩意儿应该是异步操作写法过渡到 `async/await` 的中间过渡态，就不太想学，现在看来自己是太 native。

既然要学，还是得看文档，好在文档有中文的，跟着例子改一改，也大致知道 `redux-saga` 是个什么样的东西了，这个仓库就是依据 [redux-saga-beginner-tutorial](https://github.com/redux-saga/redux-saga-beginner-tutorial)提供的初始化仓库进行学习的，
在学习过程中，发现这个仓库东西太简单了，还是不够 `redux-saga` 的学习，所以索性在这个项目的基础上调整项目结构，加入一些 `react-router` 、`react-redux` 之类的库，升级本身仓库 `react`、`react-dom` 、`redux-saga` 版本，同时用 `cnode` 提供的 `API` 真实地去感受 `redux-saga` 带来的 `redux` 异步写法。

`redux-saga` 学习之初，难免有很多错误，以及写法会很粗糙。

## apiPage

主要内容是依据 `cnode` 提供的 `api`， 模仿了 `cnode` 的首页，算是基于学习 `redux-saga` 的目的上，把 `react` 相关技术栈应用了一遍，内容不复杂，还是非常适合 `react` 新手来学习的。

### apiPage 实例图

<img width="500px" src="/images/cnode.png" alt="页面" />
<br/ >
<img width="500px" src="/images/cnode2.png" alt="页面2" />

## 小问题

由于之前直接是 `fork` 原先的教程项目，那个项目没有用 `webpack-dev-server`，所以 `css-loader` 之类的一些功能是没办法用，同时也没办法设置 `historyFallBack`， 所以 `react-router-dom` 用 `BrowserHistory` 是存在一点小问题的，基本上凑合着能用吧。

## 启动方式

```bash
npm start
```
