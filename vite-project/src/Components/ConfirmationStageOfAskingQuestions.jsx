const ConfirmationStageOfAskingQuestions = ({whatquestion,where})=>{
    return(<div className='flex flex-col items-center font-bold text-3xl font-mono '>
        <span className='text-black'>{whatquestion}</span>
        <span>IN </span>
        <span className='text-white'>{where}</span>
    </div>)
}

export default ConfirmationStageOfAskingQuestions