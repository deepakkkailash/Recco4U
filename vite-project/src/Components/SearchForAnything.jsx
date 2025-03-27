const SearchForAnything = (props)=>{
    return(
                    <input type='text' name={props.name} placeholder={props.placeholder} className={'p-[10px] w-[50%] rounded-lg h-fit bg-gray-500 font-bold text-white hover:bg-gray-600 focus:bg-black '+(props.valueset?' border border-red-500':null)} onKeyDown={props.onChange}/>
    )

}

export default SearchForAnything