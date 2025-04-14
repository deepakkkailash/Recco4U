import questions from '../meta/questions.js'
import Option from './Options'
const WhatSelection = ({type,changeQuestion})=>{
    if(type=='question'){
         return(
            <select className='p-[10px] rounded-lg bg-red-500' onChange={changeQuestion}>
                <option default ></option>
                {questions.map((item)=>{
                    return(
                        <Option content={item}/>
                    )
                })}
            </select>
        )

    }
    else if(type=='Where'){
            return(
                <select></select>
            )
    }

}

export default WhatSelection;