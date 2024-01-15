function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert("Cadastro realizado com sucesso!")
    }

    return(
        <>
            <h1>Formulário de Contato</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form