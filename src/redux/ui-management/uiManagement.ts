import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type ThemeType="dark"|"light"
type InitialStateType= {showMenu:boolean,theme:ThemeType};

const initialState: InitialStateType = {showMenu:false,theme:"light"};

const uiManagerSlice=createSlice({
    name:"ui-manager",
    initialState,
    reducers:{
        setShowMenu:(state:InitialStateType,action:PayloadAction<boolean>)=>{
            state.showMenu=action.payload
        },
        setTheme:(state:InitialStateType)=>{
            state.theme=state.theme === "light" ? "dark" : "light"
        }
    }
})

const uiManagerReducer= uiManagerSlice.reducer

export default uiManagerReducer

export const { setShowMenu, setTheme } = uiManagerSlice.actions;