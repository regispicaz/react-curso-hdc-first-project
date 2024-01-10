//import logo from './logo.svg';
import './App.css';
import './Custom.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';
import SiteFooter from './components/Footer';

function App() {

  const name = 'Régis Picáz'
  const foto = "https://pbs.twimg.com/profile_images/1543610405028765696/Eb1rmL3E_400x400.jpg"
  const idade = 34
  const profissao = "Programador"
  //const urlImg = "https://via.placeholder.com/200"

  return (
    <div className="App">
      <HelloWorld />

      <Frase />
      
      <Pessoa foto={foto} name={name} idade={idade} profissao={profissao}  />

      <SayMyName nome={name} />

      <SiteFooter nome={name} />
    </div>
  );
}

export default App;
