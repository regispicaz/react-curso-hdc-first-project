
function Pessoa({foto, name, idade, profissao}){
    return(
        <div className="ImgCard">
            <img src={foto} alt={foto} />
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>

        </div>
    )
}

export default Pessoa