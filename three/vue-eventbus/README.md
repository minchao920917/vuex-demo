# vue-eventbus

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
##      全局的事件总线（Event Bus）

我们知道 Vuejs 有一对API $on/$emit，是用来自定义事件监听和触发的，而且在触发的时候可以携带数据。这样我们就可以通过创建一个全局的 Vue 实例 $bus，然后在各个组件中进行相关事件的触发和监听，数据流的传递和共享，这也就是大家常说的 发布订阅模式。
熟悉 $on/$emit API的同学，应该很容易就可以实现了，先上代码：

第一步：修改 src/state.js:

    import Vue from 'vue'
    const EventBus = new Vue();
    export default EventBus
    
    
第二步：修改 comp1.vue和 comp2.vue

    <template>
    <div class="comp1">
        <div>components 1</div>
        Change by event: <input type="text" v-model="msg" @change="handleChange">
    </div>
    </template>
    
    <script>
    import state from '../state'
    export default {
        mixins:[state],
        name:'comp1',
        data(){
            return{
                 msg: this.$bus.msg
            }
        },
        methods: {
        handleChange(e) {
          const newVal = e.target.value;
          this.$bus.$emit('msg-change', { value: newVal });
        },
      },
      created() {
        this.$bus.$on('msg-change', (payload) => {
          this.msg = payload.value;
        });
      }
    }
    </script>
    
    <style>
    
    </style>

comp2和comp1几乎一模一样，除了comp1和comp2的区别以外

第三步：修改main.js
    
    ...
    import App from './App.vue'
    import EventBus from './state';
    
    Vue.prototype.$bus = EventBus;
    Vue.config.productionTip = false
    ...

