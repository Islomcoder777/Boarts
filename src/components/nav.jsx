import { image } from "../img";
import { navigationLinks } from "../utli/constants";
import { useState } from "react";
// flex justify-evenly mt-10
const Nav = () =>{
    const [colors, setColors] = useState('home');
   const colorsAct = id => setColors(id);
    return(
        <div className='w-full py-6'>
            <div className="nav-h flex-1 justify-evenly mt-10 sm:flex hidden">
            <ul className=" mt-3 font-montserrat flex font-semibold">
                <li>Мужчинам</li>
                <li>Мужчинам</li>
                <li>Мужчинам</li>
            </ul>
            <img src={image} alt="" />
            <ul className=" mt-3 font-montserrat flex font-semibold">
                <li>Мужчинам</li>
                <li>Мужчинам</li>
                <li>Мужчинам</li>
            </ul>
            </div>
           <ul className="flex-1 justify-evenly bg-slate-300 mt-10 p-7  sm:flex hidden ">
           {navigationLinks.map((nav) =>(
                <li  key={nav.id} className={`text-[18px] font-montserrat  ${colors === nav.id ? 'text-white' : 'text-slate-600'} `} onClick={() => colorsAct(nav.id)}>
                    {nav.title}
                </li>
            ))}
           </ul>
        </div>
    )
}

export default Nav;