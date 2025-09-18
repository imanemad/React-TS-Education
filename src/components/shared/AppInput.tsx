import type { ComponentProps } from "react"

const AppInput = ({title,id,className,...rest}:Omit<ComponentProps<"input">,"title"> & {title:string}) => {
    return (
        <div className="mb-5">
            <label htmlFor={id}
                className="block mb-2 text-sm text-gray-900 dark:text-white">
                    {title}
            </label>
            <input type="text" 
                    id={id} 
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    block w-full p-2.5 ${className}`} 
                    {...rest} />
        </div>
    )
}

export default AppInput
