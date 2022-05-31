import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./Greeting/greeting";

const store = configureStore({reducer: {messages: messageReducer}});
export default store
