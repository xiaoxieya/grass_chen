<template>
  <div class="outer">
        <Left/>
        <Right/>
    </div>
</template>

<script>
import Left from './Left.vue'
import Right from './Right.vue'
export default {
    name:'ImageDetail',
    components:{Left,Right}
}
</script>

<style>

</style>