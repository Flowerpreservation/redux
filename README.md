# redux
a just redux

一.React-redux 基本使用
    包括 store state action reducers 以及扩展的插件
二.redux介绍
  state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等
    三大原则
        单一数据源（来自服务端的 state 可以在无需编写更多代码的情况下被序列化并注入到客户端中）
          整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
        State 是只读的（只能通过action来改变）
          惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
        使用纯函数来执行修改（reducers,接收一个旧的state，action，生成一个新的state）
            为了描述 action 如何改变 state tree ，你需要编写 reducers。 
    核心概念
        Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。
          它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
        Reducer
           Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。而这正是 reducer 要做的事情。 
        Store   
           Store 就是把它们联系到一起的对象
