# vue-state

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

##  初步了解state.js

在src下新建src/state.js

    export default {
        msg: 'Hello world',
    };
    
这就是用于管理状态state.js中的msg


再在components下新建两个组件文件comp1.vue和comp2.vue

    <!-- comp1 -->
    <template>
      <div class="comp1">
        <h1>Component 1</h1>
        <input type="text" v-model="state.msg">
        //msg的双向绑定，绑定的是state管理下的msg
      </div>
    </template>
    <script>
    import state from '../state';//导入state.js文件
    
    export default {    
      name: 'comp1',
      data() {  //组件中data使用return方式返回data
        return {
          state,
        };
      },
    };
    </script>
    
    <!-- comp2 -->
    <template>
      <div class="comp2">
        <h1>Component 2</h1>
        <input type="text" v-model="state.msg">
        //msg的双向绑定，绑定的是state管理下的msg
      </div>
    </template>
    <script>
    import state from '../state';//导入state.js文件
    
    export default {
      name: 'comp2',
      data() {  //组件中data使用return方式返回data
        return {
          state,
        };
      },
    };
    </script>
    
    
第三步就是引用组件部分

修改app.vue

    <template>
      <div id="app">
        <comp1></comp1>//组件引用1
        <comp2></comp2>//组件引用2
        <HelloWorld msg="Welcome to Your Vue.js App"/>//原始引用helloword部分
      </div>
    </template>
    
    <script>
    import HelloWorld from './components/HelloWorld.vue'
    import comp1 from "./components/comp1"//导入组件comp1
    import comp2 from "./components/comp2"//导入组件2
    export default {
      name: 'app',
      components: {
        HelloWorld,
        comp1,//组件1注册
        comp2,//组件2注册
      }
    }
    </script>
    ...


此时，控制台运行 npm run serve

你会发现网页中在组件1的输入框中输入，组件2中会跟着改变
