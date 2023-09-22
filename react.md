# ====一个 React 项目，默认会安装：====

react: React的核心

react-dom：React 视图渲染的核心 [基于 React 构建的 WebApp （HTML页面）]

---> react-native： 构建和渲染App的

react-scripts: 脚手架为了让项目看起来干净一些，把 webpack 打包的规则及相关的插件/LOADER等都隐藏到了 node_modules 目录下，react-scripts 就是脚手架中自己对打包命令的一种封装，会调用 node_modules 中的 webpack 等进行处理。





![image-20230731103623888](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731103623888.png)



![image-20230731103712485](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731103712485.png)

![image-20230731103932700](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731103932700.png)

![image-20230731104438455](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731104438455.png)

![image-20230731105115847](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731105115847.png)删除这些选中的（为多余文件)

![image-20230731105355895](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731105355895.png)

![image-20230731114422022](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731114422022.png)

![image-20230731115322916](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731115322916.png)

![image-20230731135301841](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731135301841.png)





# 1、react 默认为sass预编译，改为less需要如下操作：

​	@1	npm add less less-loader@8

​	@2	npm remove sass-loader

​	@3	![image-20230731142546585](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731142546585.png)

​	@4	![image-20230731142637547](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731142637547.png)

​	@5	![image-20230731142703138](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731142703138.png)

​	@6	![image-20230731142741317](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731142741317.png)

# 2、配置别名

![image-20230731142922698](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731142922698.png)

![image-20230731143003348](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731143003348.png)

# 3、修改域名和端口号

![image-20230731143633628](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731143633628.png)

## 3.1、如果想基于修改环境变量的方式来修改端口号

​	@1	npm/yarn add cross-env

​	@2	![image-20230731144337632](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731144337632.png)

# 4、修改浏览器兼容

![image-20230731144950122](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731144950122.png)

## 4.1、 你可以 $ npm/yarn add @babel/polyfill

在入口文件中：

​	import ‘@babel/polyfill’

## 4.2 、脚手架中不需要我们自己去安装： react-app-polyfill 【对于 @babel/polyfill 的重写】

![image-20230731150028984](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230731150028984.png)

# 5、处理 Proxy 跨域

 在 src 目录中，新建 setupProxy.js

$ npm/yarn add http-proxy-middleware

http-proxy-middleware:	实现跨域代理的模块	【webpack-dev-server 的跨域代理原理，也是基于它完成的】

![image-20230801105920360](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230801105920360.png)

![image-20230801105932776](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230801105932776.png)

# ====React 是 Web 前端框架====

## 1、目前市面上比较主流的前端框架

​	**+React**

​	**+Vue**

​	**+Angular【又叫：NG 框架】**

​	**+...**

### 	1.1、**主流的思想：不再直接去操作 DOM ，而是改为 “ 数据驱动思想 ”**

#### 	1.1.1、**操作 DOM 思想：**

​		**+ 操作 DOM 比较消耗性能 【主要原因是： 可能会导致 DOM 重排（回流）/ 重绘】**

​		**+ 操作起来也相对比较麻烦**

​		**+ ...**

#### 	1.1.2、 **数据驱动思想：**

​		**+ 我们不会在直接操作 DOM**

​		**+ 我们去操作数据 【当我们修改了数据，框架会按照相关的数据，让页面重新渲染】**

​		**+ 框架底层实现视图的渲染，也是基于操作 DOM 完成的**

​			**+ 构建了一套	虚拟 DOM -> 真实 DOM 的渲染体系**

​			**+ 有效避免了 DOM 的重排（回流）/ 重绘**

​		**+ 开发效率更高、最后的性能也相对较好**

## 2、React框架采用的是 MVC 体系；Vue 框架采用的是 MVVM 体系

## 	2.1、MVC：model 数据层 + view 视图层 + controller 控制层

​		**@1 我们需要按照转业的语法去构建视图（页面）：React 中是基于 jsx 语法来构建视图的**

​		**@2 构建数据层：但凡在视图中，需要 “ 动态 ” 处理的（需要变化的，不论是样式还是内容），我们都需要对应的数据模型**

​		**@3 控制层：当我们在视图中（或者根据业务需求）进行某些操作的时候，都是去修改相关的数据，然后 React 框架会按照最新的数据，重新渲染**

​		**视图，以此让用户看到最新的效果**

​		**数据驱动视图的渲染！！**

​		**视图中的表单内容改变，想要修改数据，需要开发者自己去写代码实现！！**

​		**“ 单向驱动 ”**

![image-20230801113754517](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230801113754517.png)

## 	2.2、MVVM：model 数据层 + view 视图层 + viewModel 数据/视图监听层

​		**@1 数据驱动视图的渲染：监听数据的更新，让视图重新渲染**

​		**@2 视图驱动数据的更改：监听页面中表单元素内容改变，自动去修改相关的数据**

​		**“ 双向驱动 ”**

![image-20230801134050419](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230801134050419.png)

# ====JSX 构建视图的基础知识====

​	**JSX：JavaScript and xml（html）把 JS 和 HTML 标签混合在一起【并不是我们之前玩的字符串拼接】**

​	**@1 vscode 如何支持 JSX 语法【格式化、快捷提示...】**

​		**+	创建的 js 文件，我们把后缀名设置为 jsx 即可，这样 js 文件中就可以支持 JSX 语法了**

​		**+	webpack 打包规则中，也是会对 .jsx 这种文件，按照 JS 的方式进行处理**

​	**@2 在 HTML 中嵌入 JS 表达式，需要基于 “ {} ” 胡子语法**

 		**+	JS 表达式：执行有结果的**

​	**@3 在 ReactDOM.createRoot() 的时候，不能直接把 HTML/BODY 作为根容器，需要指定一个额外的盒子【例如：#root】**

​	**@4 每一个构建的视图，只能有一个 “ 根节点 ”**

​		**+	出现多个根节点则报错**

​		**+	React 给我们提供了一个特殊的节点（标签）: React.Fragment 空文档标记标签**

​			  **<></>**

​			  **既保证了可以只有一个根节点，又不新增一个 HTML 层级结构！！**

​	**@5 {} 胡子语法中嵌入不同的值，所呈现出来的特点**

​		**+	number / string ：值是啥，就渲染出来的啥**

​		**+	boolean / null / undefined  / Symbol / BigInt：渲染的内容是空**

​		**+	除数组对象外，其余对象一半都不支持在{}中尽显渲染，但是也有特殊情况：**

​				**+JSX 虚拟 DOM 对象**

​				**+ 给元素设置 style 行内样式，要求必须写错一个对象格式**

​		**+	数组对象： 把数组的每一项都分别拿出来渲染【并不是变为字符串渲染，中间没有逗号】**

​		**+	函数对象： 不支持在{}中渲染，但是可以作为函数组件，用**<Component/>**方式渲染！！**

​		**+...**

​	**@6 给元素设置样式**

​		**+ 	行内样式： 需要基于对象的格式处理，直接写样式字符串会报错**

​				**<h2 style={{**

​				**color: 'red',**

​				**fontSize: '18px'	//	样式属性要基于驼峰命名法处理**

​				**}}>**

​		**+	设置样式类名： 需要把 class 替换为 className**

​				<h2 className="box">





**=====================================================================**

**import React from "react";	// React 语法核心**

**import ReactDOM from "react-dom/client";	// 构建 HTML（WebApp）的核心**



**// 获取页面中 #root 的容器，作为 “ 根 ” 容器**

**const root = ReactDOM.createRoot(document.getElementById("root"));**



**//基于 render 方法渲染我们编写的视图，把渲染后的内容，全部插入到 #root 的容器**

**root.render(**

​	**...**

**);**







# ====关于 JSX 底层处理机制====

## **第一步：把我们编写的 JSX 语法，编译为虚拟 DOM 对象 【virtualDOM】**

​	**@1	基于 babel-preset-react-app 把 JSX 编译为 React.createElement(...) 这种格式！！**

​			**只要是元素节点，必然会基于 createElement 进行处理！**

​			**React.createElement( ele , props , ...children)**

​				**+	ele：元素标签名【或组件】**

**@2	把构建的 virtualDOM 渲染为真实 DOM**

​				**+	props：元素的属性集合（对象）【如果没有设置过任何的属性，则此值是 null】**

​				**+	children：第三个及以后的参数，都是当前元素的子节点**

​	

**@2 再把 createElement 方法执行，创建出 virtualDOM 虚拟 DOM 对象【也有称之为：JSX 元素、JSX 对象、ReactChild对象...】**

​			**virtualDOM = {**

​				**$$typeof: Symbol(react.element),**

​				**ref:null,**

​			    **key:null,**

​				**type: 标签名【或组件】,**

​				**//	存储了元素的相关属性 && 子节点,**

​			    **props：{**

​					**元素的相关属性，**

​					**children: 子节点信息【没有子节点则没有这个属性、属性值可能是一个值、也可能是一个数组】,**

​				**},**

​			**}**



## **第二步：把构建的 virtualDOM 渲染为真实 DOM**

​	**真实 DOM：浏览器页面中，最后渲染出来，让用户看见的 DOM 元素**

​	**基于 ReactDOM 中的 render 方法处理的！！**

​		**v16**

​		**ReactDOM.render（**

​			**<>...</>**

​			**document.getElementById（‘ root ’）**

​		**）**



​		**v18**

​		**const root = ReactDOM.createRoot(document.getElementById("root"));**

​		**root.render(**

​			**<>...</>**

​		**);**



**补充说明：第一次渲染页面是直接从 virtualDOM -> 真实 DOM ;但是后期视图更新的时候，需要经过一个 DOM-DIFF 的对比，计算出补丁包 PATCH（两次视图差异的部分），把 PATCH 补丁包进行渲染！！**

![image-20230801161408094](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230801161408094.png)

# ====函数组件====

**创建：在 SRC 目录中，创建一个 xxx.jsx 组件，就是要创建以恶组件；我们在此文件中，创建一个函数，让函数返回 JSX 视图【或者 JSX 元素、virtualDOM 虚拟 DOM 对象】；这就是创建了一个函数组件**

**调用：基于 ES6Module 规范，导入创建的文件【可以忽略 .jsx 后缀名】，然后写标签一样调用这个组件即可！！**

​	<Component/>

​	<Component></Component>**

**命名：组件的名字，我们一般都采用大驼峰命名法这种方式命名**

---------------------------------

**调用组件的时候，我们呢可以给调用的组件设置（传递）各种各样的属性**

​	**<DemoOne title="123" x={10} data={[10,20,30]} className="box" style={{fontSize: '20px'}} />**

​	**+	如果设置的属性值不是字符串格式，需要基于“ {} ” 进行嵌套**

​	**+	调用组件的时候，我们可以把一些数据/信息基于属性 props 的方式，传递给组件！！**

--------------------------------------------

**渲染机制**

​	**@1	基于 babel-preset-react-app 把调用的组件转换为 createElement 格式**

​				**React.createElement (DemoOne ,{**

​					**title: "123",**

​					**x:10,**

​					**data:[10,20,30],**

​					**className: "box",**

​					**style:{**

​						**fontSize: '20px'**

​					**},**

​				**})**

​	**@2	把 createElement 方法执行，创建出一个 virtualDOM 对象！！**

​				**{**

​					**$$typeof: Symbol(react.element),**

​					**ref:null,**

​			   	 **key:null,**

​					**props: {title："123"， x：10， data：数组， className："box"， style：{fontSize: '20px'}}, // 如果有子节点【双闭合调用】，则也包含 children！！**

​			  	  **type：DemoOne**

​				**}**

​	**@3	基于 root.render 把 virtualDOM 变为真实的 DOM**

​				**type 值不再是一个字符串，而是一个函数了，此时：**

​				**+ 把函数执行 -> DemoOne()**

​				**+ 把 virtualDOM 中的 props，作为实参传递给函数 -> DemoOne(props)**

​				**+ 接受函数执行的返回结果【也就是当前组件的 virtualDOM 对象】**

​				**+ 最后基于 render 把组件返回的虚拟 DOM 变为真实 DOM，插入到 #root 容器中！！**

# ====属性 props 的处理====

**+	调用组件，传递进来的属性是“ 只读 ”的 【原理：props对象被冻结了】**

​	**Object.isfrozen(props)  => true**

​	**获取：props.xxx**

​	**修改：props.xxx = xxx   => 报错**

**+	作用：父组件调用子组件的时候，可以基于属性，把不同的信息传递给子组件，子组件接受相应的属性值，呈现出不同的效果，让组件的复用性更强！！**

**+	虽然对于传递进来的属性，我们不能直接修改，但是可以做一下规则校验**

​		**+	设置默认值**

​				**函数组件.defaultProps = {**

​					**x: 0,**	

​					**......**			

​				**}**

​		**+	设置其他规则，例如：数据值格式、是否必传...【依赖于官方的一个插件：prop-types】**

​				**import PropTypes from "prop-types";**

​				**函数组件.propTypes = {**

​					**// 类型是字符串、必传**

​				 	**title: PropTypes.string.isRequired,**

​					**// 类型是数字**

​				 	**x:PropTypes.number**

​					**// 多种校验规则中的一个**

​					**y: PropTypes.oneOfType([**

​						**PropTypes.string,**

​					    **PropTypes.number]),**

​				**};**

​				**传递进来的属性，首先会经历规则的校验，不管校验成功还是失败，最后都会把属性给形参props，只不过如果不符合设定的规则，控制台会抛出警告错误（不影响属性值的获取）！！**

**+	如果就想把传递的数字进行修改，我们可以：**

​	**+	把 props 中的某个属性赋值给其他内容【例如：变量、状态...】**

​	**+	我们不直接操作 props.xxx = xxx，但是我们可以修改变量 / 状态值！！**

# ====React生命周期====

![image-20230807105558363](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230807105558363.png)

# ====事件的传播机制====

![image-20230810135044763](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230810135044763.png)

# ====React的合成事件机制====

## 1、React17及以上

![image-20230810154558950](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230810154558950.png)

![image-20230810155757598](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230810155757598.png)

## 2、React16

![image-20230810164921570](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230810164921570.png)

![image-20230810164949481](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230810164949481.png)