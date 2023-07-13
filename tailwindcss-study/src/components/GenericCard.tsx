const GenericCard = ()=>{
    return(
        <div className="rounded bg-white flex flex-col p-2 max-w-xs">
            <div className="flex flex-row items-center gap-2.5 mb-2.5">
                <img src="https://avatars.githubusercontent.com/u/47578616?v=4" alt="GitHub Image"  className="w-12 h-12 rounded-full"/>
                <div className="flex flex-col">
                    <strong className="">Lucas da Silva Leoncio</strong>
                    <span className="text-gray-400">Te mandou um convite!</span>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="text-white p-1 px-2 bg-blue-900 rounded">Aceitar</button>
                <button className="p-1 px-2 rounded border-2 border-gray-600">Negar</button>
            </div>
        </div>
    );
}

export default GenericCard;