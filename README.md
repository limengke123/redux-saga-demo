# redux-saga-demo

> forked from [redux-saga-beginner-tutorial](https://github.com/redux-saga/redux-saga-beginner-tutorial)

`redux` 理解地差不多了，但是异步这一块，都是将就着 `redux-thunk` 用，但是这玩意还是不太好用，所以去学一下 `redux-saga`， 算是把 `react` 的生态基本学了一遍，形成了闭圈。一直听说 `redux-saga` 这玩意概念多，比较难搞，
当初看了一眼是 `generator` 那一套，以为这玩意儿应该是异步操作写法过渡到 `async/await` 的中间过渡态，就不太想学，现在看来自己是太 native。

既然要学，还是得看文档，好在文档有中文的，跟着例子改一改，也大致知道 `redux-saga` 是个什么样的东西了，这个仓库就是依据 [redux-saga-beginner-tutorial](https://github.com/redux-saga/redux-saga-beginner-tutorial)提供的初始化仓库进行学习的，
在学习过程中，发现这个仓库东西太简单了，还是不够 `redux-saga` 的学习，所以索性在这个项目的基础上调整项目结构，加入一些 `react-router` 、`react-redux` 之类的库，升级本身仓库 `react`、`react-dom` 版本，同时用 `cnode` 提供的 `API` 真实地去感受 `redux-saga` 带来的 `redux` 异步写法。

`redux-saga` 学习之初，难免有很多错误，以及写法会很粗糙。
