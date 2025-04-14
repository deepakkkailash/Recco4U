import {useState,useEffect} from 'react'
import WhatSelection from './WhatSelection'
const TheWhereStageOfAskingQuestions = ({whatquestion,changeWhere})=>{
        const [text,settext] = useState('')
        const [i,seti]= useState(0)
        const [donetyping,setdonetyping] = useState(false)
        const thestuff = `So where are you searching the thing for ${whatquestion}`
        useEffect(()=>{
            if(i==thestuff.length){
                setdonetyping(true)
                return
            }
            else{
               setTimeout(()=>{
                settext(text+thestuff[i])
                seti(i+1)
            },100)
            }

        },[text,i])
        return (
            <div className='flex flex-col items-center font-mono font-bold font-white'>
                    {text}
                    {donetyping?<WhatSelection type='Where' changeWhere={changeWhere} />:null}
            </div>
        )
}

export default TheWhereStageOfAskingQuestions