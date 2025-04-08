import {useState, useEffect} from 'react'
import TheInAppNavigtor from './TheInAppNavigator.jsx'
import AnswerQuestion from './AnswerQuestion'
import AskQuestion from './AskQuestion'
const LoggedInUserConsole = ({Navigator})=>{
            const [Loading,SetLoading] = useState(false)
            const [whattodisplay,setwhattodisplay]= useState('Ask a question')
            const [content, setcontent] = useState(null)
            const changeContent = ()=>{
                    setcontent(whattodisplay)
    }



        const fetchcheck = async ()=>{

                 let res = await fetch('http://127.0.0.1:5000/everyrequestcheck',{
                    method:'GET',
                    credentials: 'include'


                }
                )

                let data = await res.json()
                console.log(data)
                SetLoading(false)
                if(data.LoginStatus==200){
                        null;

                 }else if(data.LoginStatus==400){
                        console.log('dei dei dei    ')
                        Navigator({type:"Non-Auth"})

                 }
        }
        useEffect( ()=>{

                setTimeout(fetchcheck,5000)
                SetLoading(true)


        },[])
        if(!Loading){
                if(!content){
                console.log('helo')
                return( <div className='bg-black flex flex-col items-center justify-end h-[100vh] w-[100vw]'>
                    <TheInAppNavigtor whattodisplay={whattodisplay} changeContent={changeContent} />
            </div>)
        }
        else if(content=='Answer a question'){
            return(<AnswerQuestion />)
        }
        else if(content=='Ask a question'){
                return(<AskQuestion />)
        }

        }
        else{

            return(
                <div className='bg-black w-[100vw] h-[100vh] flex flex-col items-center justify-center text-white'>
                    <div className='bg-transparent animate-spin rounded-[50%] border border-stone-500 border-[16px] w-[120px] h-[120px] border-t-sky-500'>
                </div>
                </div>


            )
        }











}

export default LoggedInUserConsole