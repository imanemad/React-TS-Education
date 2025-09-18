import type { ComponentProps } from "react"
import { ImSpinner } from "react-icons/im"

const ButtonSubmit = ({title,className,loading,...rest}:ComponentProps<"button"> & {loading?:boolean}) => {
    return (
        <button {...rest} 
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 rounded-lg text-sm sm:w-auto px-5 py-2.5
                disabled:opacity-50
                ${className}
                ${loading}`}
                disabled={loading}>

                    <div className="flex items-center gap-2">
                        <span>
                            {title || "ثبت"}
                        </span>
                        {loading && 
                            <span>
                                <ImSpinner size={22} className="animate-spin"/>
                            </span>
                        }
                    </div>
        </button>
    )
}

export default ButtonSubmit
