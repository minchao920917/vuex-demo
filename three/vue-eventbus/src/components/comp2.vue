<template>
    <div class="comp2">
        <div>components 2</div>
        Change by event: <input type="text" v-model="msg" @change="handleChange">
    </div>
</template>

<script>
import state from '../state'
export default {
    mixins:[state],
    name:'comp2',
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
