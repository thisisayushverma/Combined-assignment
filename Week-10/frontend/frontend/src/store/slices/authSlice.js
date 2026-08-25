import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isLoading:false,
    },
    reducers:{
        setUser : (state,action)=>{
            state.user = action.payload
        },
        clearUser : (state)=>{
            state.user = null
        },
        setIsLoading : (state,action)=>{
            state.isLoading = action.payload
        }
    }
})

export const {setUser,setIsLoading,clearUser} = userSlice.actions
export default userSlice.reducer