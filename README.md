# terminal-input

更好用的从终端读取用户输入

## 功能介绍

1. 更便捷的从终端读取用户输入
2. 提供颜色选择
3. 基于 inquirer 与 chalk  

## 安装

``` 
yarn add terminal-input
//or 
npm install terminal-input
```

## 使用   

``` ts
import { confirm } from 'terminal-input'

async function(){
    // 参数1 问题
    // 参数2 默认答案
    // 参数3 问题的颜色
    const answer = await confirm('how are you?','no anwser',color?='yellow')
    // answer: 'I am fine'
}

```

 
