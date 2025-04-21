const ConfirmationStageOfAskingQuestions = ({whatquestion,where,Navigator})=>{
    const submitStuff = async ()=>{
        let data = new FormData();
        if((whatquestion!='' || whatquestion!=null) && (where!='' || where!=null)){
               data.append('what',whatquestion)
               data.append('where',where)
        }

        let res = await fetch(`http://127.0.0.1:5000/addquestion`,{
            method:'POST',
            credentials: 'include',
            body:data
        })

        let databackfromserver = await res.json();

        if(databackfromserver.status==200){
                Navigator({type:'Non-Auth',val:'ViewQuestionPage',what:whatquestion,where:where})
        }

    }
    return(<div className='flex flex-col items-center font-bold font-mono '>
        <span className='text-black text-3xl'>{whatquestion}</span>
        <span>IN </span>
        <span className='text-white text-3xl'>{where}</span>
        <button onClick={submitStuff} className='p-[20px] bg-white font-mono font-bold text-black rounded-lg hover:opacity-[0.5]' >That is right!</button>
    </div>)
}

export default ConfirmationStageOfAskingQuestions