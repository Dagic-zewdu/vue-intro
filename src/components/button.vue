<template>
    <button @click="handleClick" :style="{background:color}" class="btn" >
        {{text}}
        </button>
</template>

<script>
  export default {
      name:"Button",
      props:{
          color:String,
          text:String
      },
      methods:{
         handleClick(){
           this.$emit("show-form")
         }
      }
  }
</script>

