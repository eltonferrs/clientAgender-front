import {InputHTMLAttributes, forwardRef} from "react"
import { FieldError } from "react-hook-form"

interface IInputProps extends  InputHTMLAttributes<HTMLInputElement>{
    type: string;
    placeholder: string;
    errors?: FieldError;
}

export const Input = forwardRef<HTMLInputElement,IInputProps>(({errors,...rest},ref) =>{
    return(
        <div>
            <input {...rest} ref={ref}/>
            {errors?<p>{errors.message}</p>:<></>}
        </div>
    )
})