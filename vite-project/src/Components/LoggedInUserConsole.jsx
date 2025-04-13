import {useState, useEffect} from 'react'
import TheInAppNavigtor from './TheInAppNavigator.jsx'
import AnswerQuestion from './AnswerQuestion'
import AskQuestion from './AskQuestion'
const LoggedInUserConsole = ({Navigator})=>{
            const [Loading,SetLoading] = useState(false)
            const [whattodisplay,setwhattodisplay]= useState('Ask a question')
            const [content, setcontent] = useState(null)
            const changetoask = ()=>{
                    setcontent('Ask a Question')
    }
            const changetoanswer = ()=>{
                    setcontent('Answer a Question')
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
                    <div className='flex flex-row gap-[90px]'>
                        <TheInAppNavigtor whattodisplay={'Ask a Question'} changeContent={changetoask} />
                         <TheInAppNavigtor whattodisplay={'Answer a Question'} changeContent={changetoanswer} />
                    </div>
            </div>)
        }
        else if(content=='Answer a Question'){
            return(<AnswerQuestion />)
        }
        else if(content=='Ask a Question'){
                return(<AskQuestion />)
        }

        }
        else{

            return(
                <div className='bg-black w-[80vw] h-[80vh] flex flex-col items-center justify-center text-white'>
                    <div className='bg-transparent animate-spin rounded-[50%] border border-stone-500 border-[16px] w-[120px] h-[120px] border-t-sky-500'>
                    </div>
                </div>


            )
        }











}

export default LoggedInUserConsole