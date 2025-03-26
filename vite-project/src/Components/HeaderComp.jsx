import InputComponent from './InputComponent';
import ReccoButton from './ReccoButton'
const HeaderComp = (props)=>{
            return(
            <div className=' mt-2 flex flex-row  items-center justify-around w-[100vw]'>
                <h1 className='font-bold font-mono text-white text-5xl hover:opacity-[0.5] hover:cursor-pointer' onClick={()=>{props.Navigator({type:'Landing'})}}>
                    Recco4me
                </h1>
                <InputComponent formcomponent={{answer:false}} placeholder='Search For Anything' />
                <ReccoButton what='Log in' action={()=>{props.Navigator({type:'Auth',mode:'Login'})}}/>
            </div>

            )


}

export default HeaderComp;