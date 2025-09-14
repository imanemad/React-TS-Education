import { toast, type TypeOptions } from "react-toastify";

export const showToast=(
    text:string,
    type:TypeOptions= 'info',
    autoClose?:number|false
)=>{
    return toast(text,{
        closeOnClick:true,
        autoClose,
        type,
        rtl:true,
        // position: "bottom-right",
    })
}

export const errorToast =(text ="عملیات ناموفق")=>{
    return showToast(text,"error")
}

export const successToast =(text = "عملیات موفق")=>{
    return showToast(text,"success")
}