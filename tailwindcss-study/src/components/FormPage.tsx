const FormPage = () => {
    return (
        <div className="h-screen w-full bg-[#101626] p-4 flex flex-col items-center justify-center">
            <div className="max-w-md flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl text-white">Sistema de Login</h1>
                <form action="" className="w-full gap-3 flex flex-col">
                    <fieldset className="flex flex-col items-start justify-center gap-2 w-full h-auto">
                        <label htmlFor="email" className="text-white">Endereço de e-mail</label>
                        <input type="email" id="email" className="w-full outline-none bg-[#202837] h-10 px-3 rounded focus:border-[#ffb000]" />
                    </fieldset>
                    <fieldset className="flex flex-col items-start justify-center gap-2 w-full h-auto">
                        <label htmlFor="senha" className="text-white">Senha</label>
                        <input type="password" id="senha" className="w-full outline-none bg-[#202837] h-10 px-3 rounded" />
                    </fieldset>
                    <button className="text-white uppercase w-full bg-[#ffb000] h-10 rounded" type="submit">Entrar</button>
                </form>
                <p>Não é membro? <a href="">Faça seu cadastro agora</a></p>
            </div>
        </div>
    );
}

export default FormPage;