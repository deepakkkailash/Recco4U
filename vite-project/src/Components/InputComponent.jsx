import SearchForAnything from './SearchForAnything'
import {useState,useEffect} from 'react'
const InputComponent = (props)=>{

    console.log(props.whattosearch, props.wheretosearch)
    if(props.formcomponent.answer){

        return(
        <input type={props.formcomponent.type} name={props.formcomponent.name} onChange={props.formcomponent.onChange} placeholder={props.placeholder} className='p-[10px] w-[90%] rounded-lg h-fit bg-gray-700 font-bold text-white hover:bg-gray-600 focus:bg-black' />)
    }
    else{

             return(

        <div className='flex flex-row gap-[10px] w-[60%]'>
            <SearchForAnything placeholder='The What' name='What' onChange={props.changeWhat}  valueset={props.whattosearch}/>
            <SearchForAnything placeholder='The Where' name='Where' onChange={props.changeWhere} valueset={props.wheretosearch}/>

        </div>
    )
        }




}

export default InputComponent;