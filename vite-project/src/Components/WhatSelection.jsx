import questions from '../meta/questions.js'
import wheres from '../meta/wheres.js'
import Option from './Options'
const WhatSelection = ({type,changeQuestion,changeWhere})=>{
    if(type=='question'){
         return(
            <select className='p-[10px] rounded-lg bg-white' onChange={changeQuestion}>
                <option default ></option>
                {questions.map((item)=>{
                    return(
                        <Option content={item} type={'what'}/>
                    )
                })}
            </select>
        )

    }
    else if(type=='Where'){
            return(
                <select className='p-[10px] rounded-lg bg-white' onChange={changeWhere}>
                    <option default></option>
                    {wheres.map((item)=>{
                        return <Option content={item} type={'where'} />
                    })}

                </select>
            )
    }

}

export default WhatSelection;