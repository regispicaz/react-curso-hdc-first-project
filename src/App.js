//import logo from './logo.svg';
import './App.css';
import './Custom.css';
// import HelloWorld from './components/HelloWorld';
// import Pessoa from './components/Pessoa';
// import SayMyName from './components/SayMyName';
// import Frase from './components/Frase';
// import Items from './components/form/Items';
// import Evento from './components/Evento';
import Form from './components/form/Form'
import SiteFooter from './components/Footer';

function App() {

  const name = 'Régis Picáz'
  // const foto = "https://pbs.twimg.com/profile_images/1543610405028765696/Eb1rmL3E_400x400.jpg"
  // const idade = 34
  // const profissao = "Programador"
  //const urlImg = "https://via.placeholder.com/200"

  return (
    <div className="App">
      {/* <HelloWorld />

      <Frase />
      
      <Pessoa foto={foto} name={name} idade={idade} profissao={profissao}  />

      <SayMyName nome={name} />
      
      <Items marca={"Fiat"} ano_lancamento={2014} />
      <Items marca={"Nissan"} ano_lancamento={2013} />
      <Items marca={"Chevrolet"} ano_lancamento={1977} />
      <Items marca={"Mercedes"} ano_lancamento={1980} />
      <Items />

      <Evento /> */}

      <Form />

      <SiteFooter nome={name} />

    </div>
  );
}

export default App;
