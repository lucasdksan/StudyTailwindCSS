const GroupHover = ()=>{
    return(
        <div className="container mx-auto">
            <div className="flex flex-col bg-white group p-5 hover:bg-green-400">
                <span className="text-black group-hover:text-white">Apenas um teste</span>
                <span className="text-black group-hover:text-red-300">Apenas um teste</span>
                <span className="text-black group-hover:text-gray-700">Apenas um teste</span>
            </div>
        </div>
    );
}

export default GroupHover;