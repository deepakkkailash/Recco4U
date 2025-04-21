import QuestionHeader from './QuestionHeader'
import AnswerSection from './AnswerSection'
import QuestionFooter from './QuestionFooter'

const ViewQuestionPage = ({whatisthequestion,whereistheuser,NumberOfIAlsoWants})=>{
    return (
        <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-black'>

            <div className=' bg-white flex flex-col justify-center items-center rounded-lg w-[60vw] h-[40vh] text-black font-mono font-bold'>
                <QuestionHeader what={whatisthequestion} where={whereistheuser} />
                <AnswerSection what={whatisthequestion} where={whereistheuser} />
                <QuestionFooter NumberOfIAlsoWants={NumberOfIAlsoWants} />

            </div>
        </div>
    )
}

export default ViewQuestionPage;