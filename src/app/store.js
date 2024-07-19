import { configureStore } from "@reduxjs/toolkit";
import todoReducer from  '../features/todo/todoSlice'
import {persistStore,persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, todoReducer);


export  const todostore=configureStore({
    reducer:todoReducer,
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})
  
export const persistor = persistStore(todostore);
 

// here we give knowledge about reducer for store to update values