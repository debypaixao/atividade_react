import './App.css';
import Main from "./Main"
import Conteudo from './Conteudo';
import Ficha from "./Ficha";

function App() {
  return (
    <div className="App">
       <Main />
      <Conteudo />

      <Ficha nome=" O Matheus" idade="19" profissao="Desenvolvedor de GAMES" imagem="http://via.placeholder.com/150" /> <br />

      <Ficha nome=" A Maria" idade="30" profissao="Professora" imagem="http://via.placeholder.com/150" /><br />

      <Ficha nome=" O João" idade="40" profissao="Programador" imagem="http://via.placeholder.com/150" />
        
    </div>
  );
}

export default App;
