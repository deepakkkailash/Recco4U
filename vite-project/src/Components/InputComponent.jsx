const InputComponent = (props)=>{

    if(props.formcomponent.answer){

        return(
        <input type={props.formcomponent.type} name={props.formcomponent.name} onChange={props.formcomponent.onChange} placeholder={props.placeholder} className='p-[10px] w-[90%] rounded-lg h-fit bg-gray-700 font-bold text-white hover:bg-gray-600 focus:bg-black' />)
    }
    else{
    return(
        <input type='text' placeholder={props.placeholder} className='p-[10px] w-[60%] rounded-lg h-fit bg-gray-700 font-bold text-white hover:bg-gray-600 focus:bg-black' />
    )
    }
}

export default InputComponent;