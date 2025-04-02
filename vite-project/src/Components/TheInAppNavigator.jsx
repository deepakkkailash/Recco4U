import {useState,useEffect} from 'react'


const TheInAppNavigtor = ()=>{
    const [whattodisplay,setwhattodisplay]= useState('Ask a question')
    const [content, setcontent] = useState(null)
    const changewhattodisplay = ()=>{
        if(whattodisplay=='Ask a question'){
            setwhattodisplay('Answer a question')
        }
        else{
             setwhattodisplay('Ask a question')
        }
    }


    const changeContent = ()=>{
         setcontent(whattodisplay)
    }

    if(!content){
         return(
            <div onClick={changeContent} onMouseEnter={changewhattodisplay} onMouseLeave={changewhattodisplay}  className={`rounded-[50%] w-50 h-50 flex flex-col items-center justify-center animate-bounce ${whattodisplay=='Ask a question'?'bg-red-500':'bg-sky-500'} text-white font-bold font-mono`}>
                {whattodisplay}
            </div>
    )

    }
    else{






    }


}

export default TheInAppNavigtor