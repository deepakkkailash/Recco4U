const Options = ({content,type})=>{

    if(type=='what'){
         return(
        <option className='font-bold text-white font-mono'>{content.name}</option>
        )
    }
    else if(type=='where'){
        return(<option className='font-bold text-white font-mono'>{content}</option>)
    }

}
export default Options;