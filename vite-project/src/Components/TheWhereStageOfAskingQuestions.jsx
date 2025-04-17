import {useState,useEffect} from 'react'
import WhatSelection from './WhatSelection'
const TheWhereStageOfAskingQuestions = ({whatquestion,changeWhere,where,changestage})=>{
        const [text,settext] = useState('')
        const [i,seti]= useState(0)
        const [donetyping,setdonetyping] = useState(false)
        const thestuff = `So where are you searching the ${whatquestion}`
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
                    {where==null || where==''?null:<button onClick={changestage}  className='rounded-lg p-[10px] w-[70px] h-[50px] mt-3 bg-black font-mono font-bold text-white hover:opacity-[0.5]'>Go</button>}
            </div>
    )


}

export default TheWhereStageOfAskingQuestions