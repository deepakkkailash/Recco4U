import {useState, useEffect} from 'react'
import TheInAppNavigtor from './TheInAppNavigator.jsx'

const LoggedInUserConsole = ({Navigator})=>{
             const [whattodisplay,setwhattodisplay]= useState('Ask a question')
            const [content, setcontent] = useState(null)
            const changeContent = ()=>{
                    setcontent(whattodisplay)
    }
    const changewhattodisplay = ()=>{
        if(whattodisplay=='Ask a question'){
            setwhattodisplay('Answer a question')
        }
        else{
             setwhattodisplay('Ask a question')
        }
    }

        const fetchcheck = async ()=>{
                 let res = await fetch('http://127.0.0.1:5000/everyrequestcheck',{
                    method:'GET',
                    credentials: 'include'

                }
                )

                let data = await res.json()
                if(data.status==200){
                        console.log('hey')

                 }else if(data.status==500){
                        Navigator("Landing")

                 }
        }
        useEffect( ()=>{


    fetchcheck();

        },[])


                return !content?
                (
                <div className='bg-black flex flex-col items-center justify-end h-[100vh] w-[100vw]'>
                    <TheInAppNavigtor whattodisplay={whattodisplay} changewhattodisplay={changewhattodisplay} changeContent={changeContent} />
            </div>):(<></>)









}

export default LoggedInUserConsole