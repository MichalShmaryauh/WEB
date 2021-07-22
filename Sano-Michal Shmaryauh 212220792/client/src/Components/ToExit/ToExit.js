
/**
 THIS COMPONENT REASET THE userId IN  LOCAL_STORAGE  IN THE EXIT
 */
import  img from './exit.jpg'


export default function ToExit() {
    return(
        <div>
            <img src={img}  width="800" height="500" alt="" />
            {
                 localStorage.removeItem("userId")
            }
        </div>
       
    
    )
    
}