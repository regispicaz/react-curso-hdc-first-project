
function Evento({ numero }) {
    
    function meuEvento() {
        const numero = 10
        console.log(`Fui ativado! ${numero}`)
    }
    
    return (
        <>
            <p>Clique para disparar o evento: </p>
            <button onClick={meuEvento}> Ativar!</button>
        </>
    )
}

export default Evento