const ReccoButton = ({what,action,type,color})=>{
    return(<button type={type=='button'?type:undefined} className={`${color=='red'? 'bg-red-500':'bg-green-500'} rounded-xl font-bold font-mono w-fit h-fit p-[8px] text-white`} onClick={action}>{what}</button>)
}
export default ReccoButton;