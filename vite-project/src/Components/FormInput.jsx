import InputComponent from './InputComponent'
import tick from '../assets/tick.png'
 const FormInput = (props)=>{
 return(
         <div className='flex flex-row gap-[2px]'>
                                <InputComponent formcomponent={props.fc} placeholder={props.placeholder}/>
                                {props.valid==true? <img src={tick} />:null}
         </div>
    )
 }
 export default FormInput;