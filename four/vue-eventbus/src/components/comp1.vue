<template>
    <div class="comp1">
        <div>components 1</div>
        Change by object reference: <input type="text" v-model="$bus.msg"><br/>
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
