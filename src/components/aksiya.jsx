import { aksiyaimg } from "../img"
import { styles } from "../utli/style"

const Aksiya = () =>{
    return(
        <div className={`${styles.paddingY} sm:px-60 px-0`}>
            <img  src={aksiyaimg} alt="" />
            <div className="text-center mt-6">
                <h3 className={`${styles.heading2} text-black`}>Название Акции</h3>
                <p className={`${styles.paragraph}`}>Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому. </p>
            </div>
        </div>
    )
}
export default Aksiya;