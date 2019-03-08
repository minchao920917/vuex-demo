<template>
    <div class="comp2">
        <h1>component 2</h1>
        <input type="text" v-model="state.msg">
    </div>
</template>
<script>
import state from "../state"
export default {
    mixins:[state],
    name:'comp2',
    data(){
        return {
            
        }
    }
}
</script>

