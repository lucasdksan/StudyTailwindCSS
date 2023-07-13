import BorderElement from "./components/BorderElement";
import BtnEdit from "./components/BtnEdit";
import GenericCard from "./components/GenericCard";
import OrderComponent from "./components/OrderComponent";
import WarningCard from "./components/WarningCard";

const App = ()=>{
  return(
    <>
      <div>
        <div className="text-3xl text-modify-green bg-blue-600 w-1/3 h-24">1</div>
        <div className="text-3xl text-modify-green bg-blue-600 w-1/2 h-24">2</div>
        <div className="text-3xl text-modify-green bg-blue-600 w-screen h-24">3</div>
      </div>
      <OrderComponent />
      <BorderElement>
        <span className="text-white">Texto Silva</span>
        <input className="w-32 outline-none" type="text" />
      </BorderElement>
      <BtnEdit />
      <WarningCard link="asdas" />
      <GenericCard />
    </>
  );
}

export default App;