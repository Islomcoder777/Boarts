import { sciticon, sciticon1, scitka, scitka1 } from "../img";

const Scitka = () =>{
    return(
        <div className="sm:flex grid gap-3 justify-center sm:p-10 p-6">
            <div className="sm:mx-10 mx-0 relative">
                <img className="sm:w-[668px] w-[300px] sm:h-[789px] h-[350px]" src={scitka} alt="" />
                <div className="text-center absolute sm:top-[35%] top-[25%] sm:left-[15%] left-1 text-white">
                    <img className="sm:mx-40 mx-20 mb-3" src={sciticon} alt="" />
                    <h3 className="sm:text-[32px] text-[16px] font-montserrat font-bold sm:pb-5 pb-2">Программа лояльности</h3>
                    <p className="sm:text-[16px]  text-[12px] font-montserrat">Зарабатывайте баллы и получайте преимущества</p>
                    <button className="bg-white border-none sm:px-16 px-12 sm:py-3 py-1 mt-4 font-montserrat font-bold text-black  text-[16px]">Вступить в клуб</button>
                </div>
            </div>
            <div className="sm:mx-10 mx-0 relative">
                <img className="sm:w-[668px] w-[300px] sm:h-[789px] h-[350px]" src={scitka1} alt="" />
                <div className="text-center absolute sm:top-[38%] top-[28%] sm:left-[20%] left-[10%] text-white">
                    <img className="sm:mx-40 mx-[40%] mb-3 sm:w-[60px] w-[50px]" src={sciticon1} alt="" />
                    <h3 className="sm:text-[32px] text-[12px] font-montserrat font-bold sm:pb-5 pb-2">Скидка -10%</h3>
                    <p className="sm:text-[16px] text-[12px] font-montserrat">За подписку на наши новости</p>
                   <label className="relative"> <img src={sciticon1} className="sm:w-[20px] w-[20px] absolute sm:left-3 left-2 top-1 "  alt="" /> <input  type="text"  placeholder='Email' className="bg-slate-500 sm:py-3 py-2 sm:px-10 px-9 border-none sm:mt-5 mt-3"/></label>
                </div>
            </div> 
        </div>
    )
}
export default Scitka;