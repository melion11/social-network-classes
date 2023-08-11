import s from './FormsControls.module.css'
import {FC} from 'react';
import {WrappedFieldMetaProps} from 'redux-form';


export type TextareaPropsType = {
    input: any
    meta: WrappedFieldMetaProps
}

export const FormControl: FC<TextareaPropsType> = ({input, meta,  ...props}) => {


    const hasError = meta.error && meta.touched

    return(
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            {props.children}
            <div>
                {hasError &&  <span className={s.error}>{meta.error}</span>}
            </div>
        </div>
    )
}







export const Textarea: FC<TextareaPropsType> = (props) => {
    const {input, meta,  ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input: FC<TextareaPropsType> = (props) => {
    const {input, meta,  ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}