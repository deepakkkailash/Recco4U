import {useState} from 'react'
const AskQuestion = ()=>{
    const [stage,setstage] = useState(0)
    const changestage = ()=>{
        setstage(stage+1)
    }
    return (
    <div className='flex flex-col items-center justify-center bg-black w-[100vw] h-[100vh]'>

            <div className='bg-white flex flex-row gap-[40px] rounded-lg p-[20px]'>

                {stage==0?<p className='font-mono font-bold text-black'>Hello....Am the recco panda. Do you want the best of something? Alright lets go hit<button className='rounded-lg bg-sky-500 p-[10px] font-mono text-white font-bold' onClick={changestage}>Go</button> </p>:stage==1?<></>:null}
            </div>
    </div>
    )
}
export default AskQuestion