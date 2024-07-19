import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState={
   todos:[{id:1,Work:"hello"}]
}

// slice is bigger version like of reducer

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
           const todo={ 
            id:nanoid(),
            Work:action.payload,
        }
        //state updation 
        state.todos.push(todo)
        },
        deletetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

export const {addtodo,deletetodo}=todoSlice.actions

export default todoSlice.reducer  
// we have to export every reducer to make it aware for store as store is restrictive so it uses only thaht slice which is registered in store