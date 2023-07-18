const HeroCard = ()=>{
    return(
        <div className="container mx-auto md:max-w-3xl">
            <div className="flex items-center justify-center flex-col rounded-xl bg-[#1e283c] py-5 md:flex-row md:py-0 md:overflow-hidden">
                <img className="w-40 h-40 rounded-full mb-2 md:rounded-none md:mb-0 md:mr-4" src="https://auniao.pb.gov.br/noticias/caderno_cultura/morte-de-nikola-tesla-genio-da-eletricidade-completa-74-anos/n-tesla.jpg/@@images/0f277d8d-9159-4a97-b592-859f635454e9.jpeg" alt="Nikola Tesla Image" />
                <div className="flex items-center justify-center flex-col md:items-start">
                    <p className="text-white mb-2 text-center md:text-left">"Se você quiser descobrir os segredos do Universo, pense em termos de energia, frequência e vibração."</p>
                    <strong className="text-[#4288ad]">Nikola Tesla</strong>
                    <span className="text-[#535e71]">inventor, engenheiro eletrotécnico</span>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;