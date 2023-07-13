interface Props {
    link: string;
}

const WarningCard = ({ link }:Props)=>{
    return(
        <div className="p-3 border-l-4 border-l-yellow-500 bg-yellow-100 flex gap-1"> 
            <p>Você não tem mais acesso. </p>
            <a className="underline" href={link}>Faça o upgrade da sua conta</a>
        </div>
    )
}

export default WarningCard;