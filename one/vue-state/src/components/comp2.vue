<template>
    <div class="comp2">
         <h1>Component 2</h1>
        <input type="text" v-model="state.msg">
        <!-- msg的双向绑定，绑定的是state管理下的msg -->
    </div>
</template>

<script>
import  state from "../state"

export default {
    name: 'comp2',
    data(){
        return{
            state
        }
    }
}
</script>
