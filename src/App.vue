<template>
   <div class="container">
     <Header title="Todo-list" :showAddTask="showTask"  @show-form="showForm" />
     <div v-show="showTask">
       <AddForm @addTask="addTask" />
     </div>
     <Tasks @handle-reminder="handleReminder"  :tasks="tasks" @delete-task="deleteTask" />
   </div>
</template>

<script>
import Header from "./components/Header"
import {generate} from "randomized-string"
import Tasks from "./components/Tasks.vue"
import AddForm from './components/addForm.vue'
import {getTasks,addTask as addTaskAsync, updateTask,deleteTask as deleteTaskAsync} from "./api/backend.tasks"
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
  async created(){
    this.tasks=await getTasks()
  },
  methods:{
    showForm(){
      this.showTask=(!this.showTask)
    },
    async addTask(task){
      let req=await addTaskAsync(task)
      this.tasks=[...this.tasks,req]
    },
    async deleteTask(id){
    let req=await deleteTaskAsync(id)
    this.tasks=await getTasks()
    },
    async handleReminder(id){
      let task=this.tasks.find(task=> task.id === id)
     let update=await updateTask({...task,reminder:!task.reminder})
     let tasks=this.tasks.filter(task=> task.id !== id)
     this.tasks=[...tasks,update]
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
