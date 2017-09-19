# RNTextInput

### 本文主要介绍RN组件之 TextInput 的使用以及使用中需要注意的地方

#### How we Bulid It

>首先确定本机安装了RN开发环境， 将demo下载到本地，终端cd到项目根目录，然后运行 npm install 完成之后即可运行本项目

### 属性

#### autoCapitalize (enum)

- [ ] 'none' 	不自动切换任何字符为大写，即不做任何处理
- [ ] 'words'    每个单词的第一个字符大写(输入是英文)
- [ ] 'sentences' 每句话第一个字符大写
- [ ] 'characters' 所有字符大写 

```
autoCapitalize='words'
```

#### autoFocus (bool)

​	如果为true,在页面加载componentDidMount之后会获得焦点(键盘自动弹起)。默认为false.

```
autoFocus={false/true}
```

#### editable (bool)

​	设置输入框是否能编辑交互，默认true

```react
editable={true/false}
```

#### maxLength (number)

​	设置输入框可输入的最大文本长度。

```react
maxLength={1000}
```

#### multiline (bool)

​	设置输入框能否输入多行。默认false。单行下，文字会在文本框上下居中；多行下，文字居上。

```react
multiline = {false/true}
```

#### blurOnSubmit (bool)

​	对单行文本来说，如果为true,文本框会在点击返回键的时候失去焦点，默认是true

​	对多行文本来说，如果为true,文本框会在点击返回键的时候失去焦点，默认为false，点击返回键会换行

```react
blurOnSubmit = {false/true}
```

#### defaultValue （string)

​	设置文本框的一个初始值，但如果想使其生效，不能设置 value属性，一般情况下并不使用这个属性

```react
defaultValue='初始值'
```

#### keyboardType (enum)

​	键盘类型包括 ("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search') 

```react
keyboardType='numeric'
```

#### placeholder (string)

​	设置占位字符

```react
placeholder='placeholder'
```

#### placeholderTextColor (color)

​	设置占位字符串的颜色

```react
placeholderTextColor='#987654'
```

#### returnKeyType (enum)

​	设置返回键类型 ('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo')

```react
returnKeyType='search'
```

#### secureTextEntry (bool)

​	设置是否加密输入，密码类型，只在multiline = {false} 时有效

```
secureTextEntry={true}
```

#### selectionColor (color)

​	设置输入框中的被选中的文本的高亮颜色，iOS下，光标颜色也会被设置

```
selectionColor='red'
```

#### caretHidden (bool)

​	设置是否隐藏光标，只有在单行是有效。

```
caretHidden={true}
```

####value (string)

​	设置文本框中的文字内容

```
value='内容'
```

#### style (CSS)

​	支持所有View的style样式



#### clearButtonMode (enum) 

​	设置输入框“清除”按钮模式，仅在iOS平台有效

```
clearButtonMode='while-editing'
```

#### keyboardAppearance (enum)

​	设置键盘颜色

```
keyboardAppearance='dark'
```



> 还有一些其他的属性，有待探索。。。



### 方法

#### onChange

​	文本框内容变化时会调用次函数

```
onChange={()=>{
        console.log('正在输入')
      }}
```



#### onChangeText

 	文本框内容变化时调用次函数，改变后的文字内容会被当做参数传递。

```
onChangeText={(text)=>{
        console.log(text)
      }}
```



#### onBlur 

​	当文本失去焦点的时候会调用此函数。

```
onBlur={()=>{
        alert('失去焦点')
      }}
```



#### onEndEditing

​	当文本输入结束后调用此函数(经测试，失去焦点时也会调用)

```
onEndEditing={()=>{
        alert('结束编辑')
      }}
```



#### onFocus

​	当输入框获得焦点时调用。

```
onFocus={()=>{
  	alert('获得焦点')
}}
```

#### onLayout

​	当组件挂载或者布局变化时调用此函数，参数{nativeEvent:{layout:{x,y,width,height}}}

```
onLayout={(e)=>{
  console.log(e.nativeEvent.layout.height) //可获得此组件在布局之后的高度
}}
```

#### onScroll

​	当为多行时，输入框的内容有可能需要滚动，此函数在内容滚动时调用，参数 nativeEvent: {contentOffset: { x, y }}}

，但在安卓平台，不提供参数。

```
onScroll={(e)=>{
  console.log(e.nativeEvent.contentOffset.y) //可获得此组件内容偏移量
}}
```

#### onSubmitEditing

​	点击返回键时回调此函数，但当为多行时，此函数无效。

```
onSubmitEditing={()=>{
  
}}
```

#### isFocused():bool

​	返回值判断当前输入框时候获取了焦点

#### clear()

​	清空输入框内容



> 暂且到这吧