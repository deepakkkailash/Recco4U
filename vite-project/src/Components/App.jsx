import {useState} from 'react';
import AppStuff from './AppStuff';

import HeaderComp from './HeaderComp.jsx';

const App = ()=>{
    const [what,setwhat]= useState({type:'Landing'})
    const Navigator=(param)=>{
        console.log('Hello')
        setwhat(param)

    }
    return(
    <div className=' bg-black w-[100vw] h-[100vh] flex flex-col items-center gap-[300px] '>
        <HeaderComp Navigator={Navigator} />
        <AppStuff what={what} Navigator={Navigator}/>

    </div>
    )

}

export default App;