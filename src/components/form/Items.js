import PropTypes from 'prop-types'

function Items({marca, ano_lancamento}){
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

//Validando o formato de dado
Items.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

//Passando valor padrão para Props
Items.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Items