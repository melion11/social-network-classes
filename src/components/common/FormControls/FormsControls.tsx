import s from './FormsControls.module.css'
import {FC, ReactNode} from 'react';
import {Field} from 'redux-form';


export type FormControlProps = {
    input: {
        name: string;
    };
    meta: {
        touched?: boolean;
        error?: string;
    }
    children: ReactNode
}

export const FormControl: FC<FormControlProps> = (props) => {
    const {input, meta: {touched , error}, children} = props

    const hasError = error && touched

    return(
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            {children}
            <div>
                {hasError &&  <span className={s.error}>{error}</span>}
            </div>
        </div>
    )
}



export const Textarea: FC<FormControlProps> = (props) => {
    const {input, meta,  ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input: FC<FormControlProps> = (props) => {
    const {input, meta,  ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder: string,
                            name: string,
                            validators: any[],
                            component: React.FC<FormControlProps>,
                            props?: { type: string },
                            text: string = '') => {
    return (
        <div style={{display:'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', color: 'black'}}>
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={validators}
                   {...props}/>
            {text}
        </div>
    )
}