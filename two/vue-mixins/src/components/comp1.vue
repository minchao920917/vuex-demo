<template>
    <div class="comp1">
        <h1>component1</h1>
        <input type="text" v-model="state.msg">
    </div>
</template>
<script>
import state from "../state"
export default {
    name:'comp1',
    mixins:[state],
    data(){
        return {
           
        }
    }
}
</script>

