import {useState} from 'react';
import AppStuff from './AppStuff';

import HeaderComp from './HeaderComp.jsx';

const App = ()=>{
    const [what,setwhat]= useState({type:'Landing'})
    const [whattosearch,setwhattosearch]=useState(null)
    const [wheretosearch,setwheretosearch]= useState(null)
    const Navigator=(param)=>{
        console.log('Hello')
        setwhat(param)

    }



    const changeWhat = (event)=>{

        if(event.key=='Enter'){

               setwhattosearch(event.target.value)
        }

    }
      const changeWhere = (event)=>{
        if(event.key=='Enter'){
               setwheretosearch(event.target.value)
        }

    }


    return(
    <div className=' bg-black w-[100vw] h-[100vh] flex flex-col items-center gap-[300px] '>
        <HeaderComp Navigator={Navigator} whattosearch={whattosearch} wheretosearch={wheretosearch} changeWhat={changeWhat} changeWhere={changeWhere} />
        <AppStuff what={what} Navigator={Navigator}/>

    </div>
    )

}

export default App;