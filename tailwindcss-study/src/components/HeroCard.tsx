const HeroCard = ()=>{
    return(
        <div className="container mx-auto">
            <div className="flex items-center justify-center flex-col rounded-xl">
                <img className="w-40 h-40 rounded-full" src="https://auniao.pb.gov.br/noticias/caderno_cultura/morte-de-nikola-tesla-genio-da-eletricidade-completa-74-anos/n-tesla.jpg/@@images/0f277d8d-9159-4a97-b592-859f635454e9.jpeg" alt="Nikola Tesla Image" />
                <div className="flex items-center justify-center flex-col">
                    <p className="">Se você quiser descobrir os segredos do Universo, pense em termos de energia, frequência e vibração.</p>
                    <strong className="">Nikola Tesla</strong>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;