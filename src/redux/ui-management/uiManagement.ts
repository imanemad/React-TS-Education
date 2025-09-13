import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type ThemeType="dark"|"light"
type InitialStateType= {showMenu:boolean,theme:ThemeType};

const initialState: InitialStateType = {showMenu:false,theme:localStorage.getItem("theme") as ThemeType || "light"};

const uiManagerSlice=createSlice({
    name:"ui-manager",
    initialState,
    reducers:{
        setShowMenu:(state:InitialStateType,action:PayloadAction<boolean>)=>{
            state.showMenu=action.payload
        },
        setTheme:(state:InitialStateType)=>{
            const newTheme = state.theme === "light" ? "dark" : "light"
            state.theme=newTheme
            localStorage.setItem("theme",newTheme)
        }
    }
})

const uiManagerReducer= uiManagerSlice.reducer

export default uiManagerReducer

export const { setShowMenu, setTheme } = uiManagerSlice.actions;