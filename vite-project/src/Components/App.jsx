import {useState,useRef} from 'react';
import AppStuff from './AppStuff';

import HeaderComp from './HeaderComp.jsx';

const App = ()=>{
    const [what,setwhat]= useState({type:'Non-Auth'})
    const [whattosearch,setwhattosearch]=useState(null)
    const [wheretosearch,setwheretosearch]= useState(null)
    const [availableWhatWheredata, setavailableWhatWheredata] = useState(null)

    const whatref = useRef(null)
    const whereref = useRef(null)
    const Navigator=(param)=>{

        setwhat(param)

    }

    const fetchstuff = async ({what,where})=>{
        let formData = new FormData();
        formData.append('what',what)
        formData.append('where',where)
        console.log(what,where)
        let res = await fetch('http://127.0.0.1:5000/FindQuestion',{
            method:'POST',
            body:formData
        });

        let data = await res.json();
        if(data.status==200){
            if(data.AnswersAvailable){
                setavailableWhatWheredata({status:200,title:`${what} in ${where}`,answers:data.ANSWERS,AskedBy:data.AskedBy})

            }
            else{
                 setavailableWhatWheredata({status:403,title:`${what} in ${where}`,answers:null,AskedBy:data.AskedBy})
            }
        }else if(data.status==404){
                setavailableWhatWheredata({status:404,title:`No one has asked for ${what} in ${where}`,answers:null,AskedBy:null})
        }
        console.log(data)

    }








    const changeWhatNWhere = ()=>{
        console.log(whatref.current.value)
        console.log(whereref.current.value)
        setwhattosearch(whatref.current.value)
        setwheretosearch(whereref.current.value)
        console.log(whattosearch,wheretosearch)
        let obj = {what:whatref.current.value,where:whereref.current.value}

        fetchstuff(obj)
    }

         return(
    <div className=' bg-black w-[100vw] h-[100vh] flex flex-col items-center gap-[300px] '>
        <HeaderComp Navigator={Navigator} whattosearch={whattosearch} wheretosearch={wheretosearch} changeWhatNWhere={changeWhatNWhere} whatref={whatref} whereref={whereref}/>
        <AppStuff what={what} Navigator={Navigator} availableWhatWheredata={availableWhatWheredata} setwhat={what} />

    </div>
    )




}

export default App;