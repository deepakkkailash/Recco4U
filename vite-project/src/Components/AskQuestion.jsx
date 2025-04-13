import {useState,useEffect} from 'react'
import Panda from '../assets/Panda.png'
import TheQuestionStageOfAskingQuestions from './TheQuestionStageOfAskingQuestions'
const AskQuestion = ()=>{
    const [stage,setstage] = useState(0)
    const [text,settext] = useState('')
    const [i,seti] = useState(0)
    const changestage = ()=>{
        let nextstage = stage+1
        setstage(nextstage)

    }
    const thedesc = 'Hello....Am the recco panda. Do you want the best of something? Alright lets go hit'


    useEffect(()=>{
        if(i==thedesc.length){
                return
        }else{
            setTimeout(()=>{
                 settext(text+thedesc[i])
                 seti(i+1)
            },100)

        }


    },[text,i])



    return (
    <div className='flex flex-col items-center justify-center bg-black w-[100vw] h-[100vh]'>

            <div className='bg-stone-500 flex flex-row gap-[30px] items-center rounded-lg p-[20px] w-[600px] h-[400px]'>
                <img src={Panda} className='animate-fadein w-[70%] h-[70%]'/>
                {stage==0?(<p className='font-mono font-bold text-white text-wrap '>{text}{text.length==thedesc.length? <button className='p-[5px] bg-black rounded-lg ' onClick={changestage}>Go</button>:null}</p>):stage==1?(<p className='font-mono font-bold text-white '><TheQuestionStageOfAskingQuestions /></p>):null}
            </div>
    </div>
    )
}
export default AskQuestion