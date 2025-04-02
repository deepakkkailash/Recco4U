import {useState, useEffect} from 'react'
import TheInAppNavigtor from './TheInAppNavigator.jsx'

const LoggedInUserConsole = ({Navigator})=>{

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


        return(
            <div className='bg-black flex flex-col items-center justify-end h-[100vh] w-[100vw]'>
                    <TheInAppNavigtor />
            </div>


        )

}

export default LoggedInUserConsole