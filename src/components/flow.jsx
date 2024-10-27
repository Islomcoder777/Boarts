
import { styles } from "../utli/style"
import { flowimg } from "../utli/constants"
import { scet, scet1 } from "../img"

const Flow = () =>{
    return(
        <div>
            <div className={`flex justify-evenly sm:py-10 py-5`}>
               {flowimg.map((idx) =>(
                <img className="sm:w-[70px] w-[40px]" key={idx.id} src={idx.img} alt="" />
               ))}
            </div>
            <div className={`flex justify-evenly scet  ${styles.paddingY}`}>
                <img className="sm:w-[600px] w-[300px] sm:ml-0 ml-3" src={scet} alt="" />
                <img className="sm:w-[600px] w-[300px] sm:ml-0 ml-3" src={scet1} alt="" />
            </div>
        </div>
    )
    
}
export default Flow