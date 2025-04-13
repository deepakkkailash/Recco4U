import {useState,useEffect} from 'react'


const TheInAppNavigtor = ({whattodisplay,handleMouseEnter, handleMouseExit, changeContent})=>{

            console.log('helo')



         return(

            <div onClick={()=>{changeContent()}}  className={`rounded-[50%] w-50 h-50 flex flex-col items-center justify-center animate-bounce ${whattodisplay=='Ask a Question'?'bg-red-500':'bg-sky-500'} text-white font-bold font-mono`}>
                {whattodisplay}
            </div>

    )





}

export default TheInAppNavigtor