<template>
  <div>
        <h2>Vue Router Demo</h2>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
        <button @click="go">go</button>
  </div>
</template>

<script>
export default {
    name:'Banner',
    methods: {
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
        go(){
            // 表示前进一下 负数表示后退
            this.$router.go(1)
        }
    },
}
</script>