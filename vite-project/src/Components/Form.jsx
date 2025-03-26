import FormInput from './FormInput'
import ReccoButton from './ReccoButton'
import {useState,useEffect,useRef} from 'react'

const Form = ({mode,Navigator})=>{
    const initrender = useRef({username:true,password:true})
    const [username, setusername] = useState(null)
    const [password,setpassword] = useState(null)
    const [isusernamevalid,setisusernamevalid]= useState(false)
    const [ispasswordvalid,setispasswordvalid]= useState(false)
    const SubmitForm = ()=>{
        console.log(username,password)

    }
    const updateUsername = (event)=>{
        setusername(event.target.value)

    }

    const updatePassword = (event)=>{
        setpassword(event.target.value)
        }

    useEffect(()=>{
         if(initrender.current.username==true){
            initrender.current.username=false
            return;
         }
         if(event.target.value.length>10){
            setisusernamevalid(true)
        }else{
             setisusernamevalid(false)
        }
    },[username])
    useEffect(()=>{
         if(initrender.current.password==true){

                initrender.current.password=false;
                return;
          }
        let allowedspecs = ['$','.','*','%']
        const checkPresence = (value)=>{
                if(password.includes(value)){
                    return true
                }
        }
          if(event.target.value.length>12 && allowedspecs.some(checkPresence)){
            setispasswordvalid(true)
        }else{
             setispasswordvalid(false)
        }

    },[password])
return(

    <form  className='bg-stone-900 w-[30vw] h-[50vh] rounded-lg flex flex-col items-center  justify-around'>
                <h3 className='text-2xl font-mono text-white font-bold'>{mode}</h3>
                <div className='flex flex-col gap-[10px] items-center'>
                    <FormInput fc={{answer:true, type:'text', name:'username',onChange:updateUsername}} placeholder='username' valid={isusernamevalid}  />
                    <FormInput fc={{answer:true, type:'password',name:'password',onChange:updatePassword}}placeholder='Password' valid={ispasswordvalid}/>
                </div>
                <ReccoButton type={'button'} what={mode} action={SubmitForm}/>
               {mode=='Login'?<span className='text-sm font-mono font-bold text-white'>New to the Fam? <button type='button' onClick={()=>{Navigator({type:'Auth',mode:'Sign Up'})}} className=' text-red-500 hover:text-sky-500'>@</button> Here</span>
               :<span className='text-sm font-mono font-bold text-white'>Already a homie? <button type='button' onClick={()=>{Navigator({type:'Auth',mode:'Login'})}} className=' text-red-500 hover:text-sky-500'>@</button> Here </span>
               }
        </form>
)
}


export default Form