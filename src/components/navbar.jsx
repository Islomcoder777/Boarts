
import { styles } from "../utli/style"
import { img1, img2, img3, vector, close, menu, image } from "../img"
import { useState } from "react";



const Navbar = () =>{

    const [toggleNav, setToggleNav] = useState(false)
  
    const toggleHendler = () => setToggleNav(prev => !prev );

    // flex justify-evenly bg-black text-white py-0 h-11
    return(
        <div className={`w-full py-2 ${styles.flexBetween} sm:bg-black bg-slate-600 text-white navbar`}>
            <ul className=' mt-3 text-[16px] sm:flex hidden flex-1 m-4'>
                
                <li className={`flex mx-3`}>
                <img src={vector} alt="" className='w-[14px] h-[14px] mt-2 m-2' /> Ваш регион доставки:   Москва</li>
                <li><select className='bg-black mx-2' name="pets" id="pet-select">
  {/* <option value="">--Please choose an option--</option> */} 
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select></li>
    
            </ul>
            <ul className=" mt-4 text-[16px] sm:flex hidden m-4">
                
                <li className='flex ml-3'><img src={img1} alt="" className='w-[50px] h-[40px] pb-4 mx-3' /> Ваш регион доставки:   Москва</li>
                <li className='flex ml-3'><img src={img2} alt="" className='w-[40px] h-[40px] pb-4 mx-3' /> Магазины</li>
                <li className='flex ml-2'><img src={img3} alt="" className='w-[40px] h-[40px] pb-4 mx-3'/> Магазины</li>
    
            </ul>
            <div className={'sm:hidden flex flex-1 justify-end items-center'}>

            <img src={image} alt="" className="w-[150px] mx-12 bg-transparent"/>
    <img src={toggleNav ? close : menu} alt="" className=' max-w-[30px] h-[30px] object-contain m-2' onClick={toggleHendler}/>

            <div className={`${!toggleNav ? 'hidden' : 'flex'} bg-slate-600  p-6 bg-black-gradient absolute top-9 left-0 right-0  w-full sidebar`}>
            <ul className='list-none justify-end mt-2 text-[12px] items-center flex-1'>
                
                <li className='flex mx-3'><img src={vector} alt="" className='w-[14px] h-[14px] mt-2 m-2' /> Ваш регион доставки:   Москва</li>
                <li><select className='bg-slate-600 mx-5 mt-2' name="pets" id="pet-select">
  {/* <option value="">--Please choose an option--</option> */}
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select></li>
    
            </ul>
            <ul className=" list-none justify-end mt-2 text-[12px] items-center flex-1">
                
                <li className='flex ml-3 mb-2'><img src={img1} alt="" className='w-[20px] h-[30px] pb-4 mx-3' /> Ваш регион доставки:   Москва</li>
                <li className='flex ml-3'><img src={img2} alt="" className='w-[20px] h-[30px] pb-4 mx-3' /> Магазины</li>
                <li className='flex ml-2'><img src={img3} alt="" className='w-[20px] h-[30px] pb-4 mx-3'/> Магазины</li>
    
            </ul>
            </div>
            </div>
        </div>
    )


}

export default Navbar