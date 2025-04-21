import {useState,useEffect} from 'react'
import Panda from '../assets/Panda.png'
import TheQuestionStageOfAskingQuestions from './TheQuestionStageOfAskingQuestions'
import TheWhereStageOfAskingQuestions from './TheWhereStageOfAskingQuestions'
import ConfirmationStageOfAskingQuestions from './ConfirmationStageOfAskingQuestions'
const AskQuestion = ({Navigator})=>{
    const [stage,setstage] = useState(0)
    const [text,settext] = useState('')
    const [whatisuserquestion,setwhatisuserquestion] = useState(null)
    const [whereisuser,setwhereisuser] = useState(null)
    const [i,seti] = useState(0)

    const changewhatisuserquestion = (event)=>{

            setwhatisuserquestion(event.target.value)

    }

    const changewhereisuser = (event)=>{

            setwhereisuser(event.target.value)

    }
    const changestage = ()=>{

        let nextstage = stage+1
        setstage(nextstage)
        console.log(nextstage)

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

            <div className={`${stage==1?'bg-red-400':stage==2?'bg-red-500':stage==3?'bg-red-600':'bg-red-700'} flex flex-row gap-[30px] items-center rounded-lg p-[20px] w-[60%] h-[40%]`}>
                <img src={Panda} className='animate-fadein w-[70%] h-[70%]'/>
                {stage==0?(<p className='font-mono font-bold text-white text-wrap '>{text}{text.length==thedesc.length? <button className='p-[5px] bg-black rounded-lg' onClick={changestage}>Go</button>:null}</p>)
                :stage==1?(<div className='font-mono font-bold text-white '><TheQuestionStageOfAskingQuestions changestage={changestage} whatisuserquestion={whatisuserquestion} changeQuestion={changewhatisuserquestion}/></div>)
                :stage==2?(<TheWhereStageOfAskingQuestions whatquestion={whatisuserquestion} changeWhere={changewhereisuser} where={whereisuser} changestage={changestage}/>)
                :stage==3?(<ConfirmationStageOfAskingQuestions whatquestion={whatisuserquestion} where={whereisuser} Navigator={Navigator} />):null}
            </div>
    </div>
    )
}
export default AskQuestion