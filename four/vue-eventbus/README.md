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

##  Eventbus的升级版
我们知道 $bus 实际上也是个对象，那么我们其实也可以通过给他添加 data 属性来进行数据共享的，现在将上面代码再稍作修改：

第一步：修改 state.js

    import Vue from 'vue';

    const EventBus = new Vue({
      data: {
        msg: 'Hello world',
      },
    });
    
    export default EventBus;
    
第二步：修改comp1.vue和comp2.vue
        
    ...
    Change by object reference: <input type="text" v-model="$bus.msg"><br/>
    ...
    
    
然后试着改变新添加的输入框数据，你会发现，新添加的两个输入框，数据也是同步更新的。
细心的同学，会发现有个问题，虽然新添加的两个输入框同步了，但是之前的两个事件触发的输入框并未同步更新。因为我们只是单纯地修改了对象属性，并未触发 msg-change 事件，所以还需要在 $bus 中添加 watcher，在 msg 变化时，触发 msg-change 事件；反过来，$bus自身需要监听 msg-change 事件，在触发的时候，修改自身 msg 的值就可以了。


我们再修改下 src/state.js 代码:

    import Vue from 'vue';

    const EventBus = new Vue({
      data: {
        msg: 'Hello world',
      },
      watch: {
        // 这里为了实现对象引用监听，然后出发change事件，实现状态同步
        msg(val) {
          this.$emit('msg-change', { value: val });
        },
      },
    });
    
    EventBus.$on('msg-change', (payload) => {
      console.log(`Msg has changed to ${payload.value}`);
      EventBus.msg = payload.value;
    });
    
    export default EventBus;
    

当然这里只是为了demo，实际开发过程中，自己一定要清楚，这里其实有两个数据管道，一个是 发布/订阅 可以理解为单工（单向数据流）模式，一个是 对象共享 也就是 方法2，可以理解为双工（双向数据流）模式。首先你需要理解清楚 当前需要共享的数据是单向还是双向，然后根据场景灵活运用。
