import AppInput from "@/components/shared/AppInput"
import ButtonSubmit from "@/components/shared/ButtonSubmit"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { addTaskCategoryService, UpdateTaskCategoryService } from "@/services/taskCategory"
import { successToast } from "@/utils/toastUtils"
import { useEffect, useState } from "react"

const initialCategory={
    title:"",
    description:"",
    createdAt:new Date().toISOString(),
    userId:"1",
    icon:"icon"
}

type ModalCategoryProps = {
    setCategories: (data: CategoryType) => void;
    modalState: boolean;
    setModalState: (isOpen: boolean) => void;
    selectedItem?:CategoryType;
    setSelectedItem:React.Dispatch<React.SetStateAction<CategoryType | undefined>>
};

const ModalCategory: React.FC<ModalCategoryProps> = ({
    setCategories,
    modalState,
    setModalState,
    selectedItem,
    setSelectedItem,
}) => {
    const [newCategory,setNewCategory] = useState<AddCategoryType>(initialCategory)
    const [loading,setLoading]=useState<boolean>(false)

    const handleAddCategory=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoading(true)
        const res=
            selectedItem ? 
            await UpdateTaskCategoryService(selectedItem.id,newCategory) 
            : 
            await addTaskCategoryService(newCategory)
        if (res.status === 201 || res.status === 200){
            setCategories(res.data);
            successToast()
            setModalState(false)
            setNewCategory(initialCategory)
            setLoading(false)
        }
    }

    useEffect(()=>{
        setNewCategory(selectedItem || initialCategory)
    },[selectedItem])
    
    return (
        <Dialog open={modalState} onOpenChange={setModalState}>
            <DialogTrigger className="bg-sky-600 text-gray-100 rounded-lg px-4 py-1" onClick={()=>setSelectedItem(undefined)}>افزودن</DialogTrigger>
            <DialogContent>
            <DialogTitle className="mb-5">{selectedItem?"ویرایش دسته بندی":"افزودن دسته بندی جدید"}</DialogTitle>
                <form onSubmit={handleAddCategory}>
                    <AppInput id="title" 
                            title="عنوان" 
                            value={newCategory.title}
                            onChange={(e)=>setNewCategory({...newCategory,title:e.target.value})}
                            required/>
                    <AppInput id="description" 
                            title="توضیحات" 
                            value={newCategory.description}
                            onChange={(e)=>setNewCategory({...newCategory,description:e.target.value})}
                            required/>
                    <ButtonSubmit type="submit" loading={loading} title={selectedItem?"ویرایش":"ثبت"}/>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ModalCategory
