const ReccoButton = ({what,action,type})=>{
    return(<button type={type=='button'?type:undefined} className='bg-red-700 rounded-xl font-bold font-mono w-fit h-fit p-[8px] text-white' onClick={action}>{what}</button>)
}
export default ReccoButton;