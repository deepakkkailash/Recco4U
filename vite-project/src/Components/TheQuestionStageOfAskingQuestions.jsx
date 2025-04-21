import {useState,useEffect} from 'react'
import WhatSelection from './WhatSelection'

const TheQuestionStageOfAskingQuestions = ({whatisuserquestion,changestage,changeQuestion})=>{
        const [text,settext] = useState('')
        const [donetyping,setdonetyping] = useState(false)
        const [i,seti] = useState(0)
        const thetext = 'Alright...Now choose what do you want from the picklist below'


        useEffect(()=>{
            if(i==thetext.length){
                setdonetyping(true)
                return
            }
            else{
                setTimeout(()=>{settext(text+thetext[i])
                seti(i+1)},100)

            }
        },[text,i])
        return(
            <div className='flex flex-col items-center'>
                <p className='font-mono font-bold text-black'>
                    {text}
                </p>
                {donetyping?<WhatSelection  type='question' changeQuestion={changeQuestion} />:null}
                {whatisuserquestion!=null && whatisuserquestion!=' '? <button onClick={changestage}  className={`rounded-lg p-[20px] bg-white  font-mono font-bold text-black mt-2 hover:opacity-[0.5]`}>Go</button>:null}
            </div>
        )
}

export default TheQuestionStageOfAskingQuestions