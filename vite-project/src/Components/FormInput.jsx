import InputComponent from './InputComponent'
import {useState,useRef} from 'react'
import tick from '../assets/tick.png'
 const FormInput = (props)=>{
 const [seepassword, setseepassword] = useState(false)

 const changeseepassword = ()=>{
       setseepassword(!seepassword)

 }

 if(props.placeholder=='Password'){

                 return(
            <div className='flex flex-row gap-[2px] items-center'>
                <div className='flex flex-row gap-[5px] items-center'>
                    <InputComponent seepassword={seepassword}  formcomponent={props.fc} placeholder={props.placeholder}/>
                    <span className='text-sm font-bold text-white' onClick={changeseepassword}>{!seepassword?'See':'Hide'}</span>
                </div>
                 {props.valid==true? <img src={tick} />:null}
            </div>

        )


 }
 else{
     return(
         <div className='flex flex-row gap-[2px]'>
                                <InputComponent formcomponent={props.fc} placeholder={props.placeholder}/>
                                {props.valid==true? <img src={tick} />:null}
         </div>
    )
 }

 }
 export default FormInput;