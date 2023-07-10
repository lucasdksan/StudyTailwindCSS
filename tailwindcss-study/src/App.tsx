import OrderComponent from "./components/OrderComponent";

const App = ()=>{
  return(
    <>
      <div>
        <div className="text-3xl text-modify-green bg-blue-600 w-1/3 h-24">1</div>
        <div className="text-3xl text-modify-green bg-blue-600 w-1/2 h-24">2</div>
        <div className="text-3xl text-modify-green bg-blue-600 w-screen h-24">3</div>
      </div>
      <OrderComponent />
    </>
  );
}

export default App;