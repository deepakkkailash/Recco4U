
import Form from './Form'
import ReccoButton from './ReccoButton'
import {useState,useEffect} from 'react'

import arrow from '../assets/swipe-up-arrow.gif'
const AppStuff = ({what,Navigator,availableWhatWheredata})=>{
    const [welcometext,setwelcometext] =useState('')
    const [i,seti] = useState(0)
    const [welcometextfinish,setwelcometextfinish] = useState(false)
    const thewelcomestuff = 'Search for Something up top!'


    if(what.type=='Non-Auth'){

        if(availableWhatWheredata){

            if(availableWhatWheredata.status==200){
                    return(
                <div className='bg-grey-300 rounded-lg w-[50vw] h-[40vh] p-[40px]'>
                    <h3></h3>
                </div>

            )
            }
            else if(availableWhatWheredata.status=404){

                return(
                    <div className='flex flex-col gap-[10px] items-center'>
                        <h3 className='font-mono font-bold text-white'>{availableWhatWheredata.title}</h3>
                       <ReccoButton what='Log in to ask' action={()=>{Navigator({type:'Auth',mode:'Login'})}} color='red'/>

                    </div>
                )
            }

        }
        else{
            useEffect(()=>{
                if(i==thewelcomestuff.length){
                    setTimeout(()=>{  setwelcometextfinish(true)},1000)

                    return
                }
                else{
                    setTimeout(()=>{  setwelcometext(welcometext+thewelcomestuff[i])
                    seti(i+1)},100)

                }

            },[welcometext,i])

            return(
            <div className='animate-pulse text-red-500 font-mono font-bold flex flex-row gap-[10px] text-3xl items-center'>
                {welcometext}

                {welcometextfinish==true?<img src={arrow} className='w-[300px] h-[300px] object-contain'/>:null}
            </div>
            )
        }


        }



    else if(what.type=='Auth'){
        return(
            <Form mode={what.mode} Navigator={Navigator}  />
       )
    }

}

export default AppStuff;