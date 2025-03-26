
import Form from './Form'
const AppStuff = ({what,Navigator})=>{

    if(what.type=='Landing'){
       return(
            <div className=''>

            </div>
            )
    }
    else if(what.type=='Auth'){
        return(
            <Form mode={what.mode} Navigator={Navigator} />
       )
    }

}

export default AppStuff;