import { useEffect, useState } from "react";
import { getTaskCategoriesServices } from "../../services/taskCategory"
import { convertMiladiToJalali } from "../../utils/dateUtils";
import { BsPen, BsTrash } from "react-icons/bs";
import { successToast } from "../../utils/toastUtils";

const Categories = () => {
    const [categories,setCategories]=useState<CategoryType[]>([]);
    const handleGetCategories=async ()=>{
        const data = await getTaskCategoriesServices()
        if(data){
            setCategories(data)
            successToast("دسته بندی ها بارگذاری شد")
        }
    }

    useEffect(()=>{
        handleGetCategories()
    },[])

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-lg">لیست دسته بندی وظایف</h1>
                <button className="bg-sky-600 text-gray-100 rounded-lg px-4 py-1">افزودن جدید</button>
            </div>
            <table className="table w-full rounded-lg overflow-hidden bg-white dark:bg-gray-600">
                <thead>
                    <tr className="border-b h-12 [&>th]:px-2 [&>th]:md:px-3 [&>th]:text-center">
                        <th className="hidden md:table-cell">#</th>
                        <th>عنوان</th>
                        <th className="hidden sm:table-cell">توضیحات</th>
                        <th>تاریخ ثبت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(c=>(
                        <tr key={c.id} className="border-b border-dashed h-9 dark:border-gray-500 [&>td]:px-2 [&>td]:md:px-3 [&>td]:text-center last:border-0">
                            <td className="hidden md:table-cell">{c.id}</td>
                            <td>{c.title}</td>
                            <td className="hidden sm:table-cell">{c.description}</td>
                            <td>{convertMiladiToJalali(c.createdAt)}</td>
                            <td className="flex justify-center pt-2 gap-4">
                                <button>
                                    <BsPen/>
                                </button>
                                <button className="text-red-400">
                                    <BsTrash/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Categories
