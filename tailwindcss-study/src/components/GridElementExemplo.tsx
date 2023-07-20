const GridElementExemplo = ()=>{
    return (
        <div className="container mx-auto">
            <div className="p-3 rounded-md bg-gray-400">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <div className="w-full h-60 bg-cover bg-center bg-no-repeat md:col-span-2 md:row-span-2 md:h-full bg-[url(https://i.pinimg.com/736x/a7/49/a1/a749a19b5682568d87b23ba71cadf6cd.jpg)]"></div>
                    <div className="w-full h-60 bg-cover bg-center bg-no-repeat bg-[url(https://blog.hth.com.br/wp-content/uploads/2022/07/Casa-com-piscina.jpg)]"></div>
                    <div className="w-full h-60 bg-cover bg-center bg-no-repeat bg-[url(https://media.gazetadopovo.com.br/haus/2016/05/casa-pequena1-768x512-c603df60.jpg)]"></div>
                </div>
                <h1 className="text-2xl font-bold mt-3">Título da casa</h1>
                <ul className="flex gap-2 mt-3">
                    <li className="rounded-full px-3 py-1 bg-green-700 text-white">Campo</li>
                    <li className="rounded-full px-3 py-1 bg-green-700 text-white">Moderno</li>
                    <li className="rounded-full px-3 py-1 bg-green-700 text-white">Piscina</li>
                </ul>
            </div>
        </div>
    );
}

export default GridElementExemplo;