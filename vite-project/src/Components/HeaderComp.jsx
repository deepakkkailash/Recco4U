import InputComponent from './InputComponent';
import ReccoButton from './ReccoButton'
import {useState} from 'react'
const HeaderComp = (props)=>{

            return(
            <div className=' mt-2 flex flex-row  items-center justify-around w-[100vw]'>
                <h1 className='font-bold font-mono text-white text-5xl hover:opacity-[0.5] hover:cursor-pointer' onClick={()=>{props.Navigator({type:'Non-Auth'})}}>
                    Recco4me
                </h1>
                <InputComponent formcomponent={{answer:false}} placeholder='Search For Anything' whattosearch={props.whattosearch} wheretosearch={props.wheretosearch} whatref={props.whatref} whereref={props.whereref} />
               <ReccoButton what='Search' action={props.changeWhatNWhere} color='green'/>

                <ReccoButton what='Log in' action={()=>{props.Navigator({type:'Auth',mode:'Login'})}} color='red'/>
            </div>

            )


}

export default HeaderComp;