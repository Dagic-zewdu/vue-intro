import axios  from 'axios';

const httpCommon=axios.create({
    baseURL:"http://localhost:1111"
})

export const getTasks=async ()=>{
  let tasks=await httpCommon.get('/tasks')
    return tasks.data
}

export const addTask=async (task)=>{
  let req=await httpCommon.post('/tasks',task)
  return req.data
}

export const updateTask=async (task)=>{
  let req=await httpCommon.put(`/tasks/${task.id}`,task)
  return req.data
}
export const deleteTask=async (id)=>{
  let req=await httpCommon.delete(`/tasks/${id}`)
  return req.data
}