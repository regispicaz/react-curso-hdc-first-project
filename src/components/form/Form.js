import { clear } from "@testing-library/user-event/dist/clear"
import { useState } from "react"

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} com senha ${password} foi cadastrado com sucesso!`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario} className="loginForm">
                <div className="inputFlex">
                    <label htmlFor="name">Nome de Usuário</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div className="inputFlex">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="******" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                    <input type="submit" value="Limpar" />
                </div>
            </form>
        </>
    )
}

export default Form