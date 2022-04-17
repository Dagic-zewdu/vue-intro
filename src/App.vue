<template>
   <div class="container">
     <Header title="Todo-list" :showAddTask="showTask"  @show-form="showForm" />
     <div v-show="showTask">
       <AddForm @addTask="addTask" />
     </div>
     <Tasks  :tasks="tasks" @delete-task="deleteTask" />
   </div>
</template>

<script>
import Header from "./components/Header"
import {generate} from "randomized-string"
import Tasks from "./components/Tasks.vue"
import AddForm from './components/addForm.vue'
export default {
 name: 'App',
  components:{
    Header,
    Tasks,
    AddForm
},
  data(){
    return {
      tasks:[],
      showTask:true
    }
  },
  created(){
    this.tasks=[{
      id:generate({charset:"number",length:4}),
      text:"Do some yoga",
      reminder:true,
      day: "March 21 2022"
    },
    {
      id:generate({charset:"number",length:4}),
      text:"Learn vue.js",
      reminder:true,
      day: "Apr 22 2022"
    },
    {
      id:generate({charset:"number",length:4}),
      text:"Eat some thing",
      reminder:false,
      day: "Sep 1 2021"
    }
    ]
  },
  methods:{
    showForm(){
      this.showTask=(!this.showTask)
    },
    addTask(task){
      this.tasks=[...this.tasks,task]
    },
    deleteTask(id){
   this.tasks=this.tasks.filter(task=> task.id !== id)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
