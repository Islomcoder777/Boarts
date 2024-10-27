import { Navbar, Nav, Sale, Flow, Scetch, Aksiya, Scetcht, Scitka, Fooder } from "./components";
import Bloc from "./components/bloc";






const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`w-full`}>
       <div className={`j`}>
       <Navbar/>
       <Nav/>
       </div>
      </div>
      <div className={`w-full`}>
        <div className={`o`}>
          <Sale/>
        </div>
      </div>
      <div className="j">
        <div className={`c`}>
          <Flow/>
        </div>
      </div>
      <div>
        <div className="sm:px-16 px-0">
          <Scetch/>
        </div>
        <Aksiya/>      
      </div>
      <div>
        <Scetcht/>     
      </div>
      <div className="w-full mt-11">
        <div>
          <Bloc/>
         
        </div>
      </div>
      <Scitka/>
      <Fooder/>
    </div>
    
  )
};
export default App;