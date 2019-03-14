# vue-mixins

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
##      mixins - 混入

混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。


第一步: 修改一下 src/state.js：

    const state = {
        msg: 'Hello world',
      };
    export default{
        data(){
            return {
                state,
            }
        }
    }
    
第二步：修改 comp1.vue和comp2.vue，使用mixins

    <!-- comp1 -->
    <template>
      <div class="comp1">
        <h1>Component 1</h1>
        <input type="text" v-model="state.msg">
      </div>
    </template>
    <script>
    import state from '../state';
    
    export default {
      mixins: [state],
      name: 'comp1',
      data() {
        return {
          
        };
      },
    };
    </script>
    
    <!-- comp2 -->
    <template>
      <div class="comp2">
        <h1>Component 2</h1>
        <input type="text" v-model="state.msg">
      </div>
    </template>
    <script>
    import state from '../state';
    
    export default {
      mixins: [state],
      name: 'comp2',
      data() {
        return {
          
        };
      },
    };
    </script>

其实，通过 mixins 方式跟 方法1 基本差不多，只不过相对于 方法1 的好处就是，在使用组件内，将状态数据属性跟 data 进行了代码上隔离（实际上还是混入到了 data 属性中）。
