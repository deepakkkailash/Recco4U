
import Form from './Form'
import ReccoButton from './ReccoButton'
const AppStuff = ({what,Navigator,availableWhatWheredata})=>{


    if(what.type=='Non-Auth'){

        if(availableWhatWheredata){

            if(availableWhatWheredata.status==200){
                    return(
                <div className='bg-grey-300 rounded-lg w-[50vw] h-[40vh] p-[40px]'>
                    <h3></h3>
                </div>

            )
            }
            else if(availableWhatWheredata.status=404){
                       console.log('hel')
                return(
                    <div className='flex flex-col items-center'>
                        <h3 className='font-mono font-bold text-white'>{availableWhatWheredata.title}</h3>
                       <ReccoButton what='Log in to ask' action={()=>{Navigator({type:'Auth',mode:'Login'})}} color='red'/>

                    </div>
                )
            }

        }
        else{
            return(
            <div className=''>

            </div>
            )
        }

    }
    else if(what.type=='Auth'){
        return(
            <Form mode={what.mode} Navigator={Navigator} />
       )
    }

}

export default AppStuff;