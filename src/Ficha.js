function Ficha(props){
    return(
        <>
            <h1>Olá , eu sou {props.nome}</h1>
            <img src={props.imagem} alt="teste de imagem" />
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </>        
    )
}
export default Ficha