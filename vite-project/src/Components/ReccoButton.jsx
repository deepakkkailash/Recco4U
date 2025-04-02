const ReccoButton = ({what,action,type,color})=>{
    return(<button type={type=='button'?type:undefined} className={`${color=='red'? 'bg-red-500  p-[8px] ':'bg-green-500 pr-[15px] pl-[15px] pt-[10px] pb-[10px]'} rounded-xl font-bold font-mono w-fit h-fit text-white`} onClick={action}>{what}</button>)
}
export default ReccoButton;