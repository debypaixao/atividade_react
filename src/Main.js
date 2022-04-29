import styles from "./Main.module.css"

function Main(){
    return(
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Logo</h3>
              <p className={styles.texto_h3}> teste modulo CSS</p>
              <p className={styles.texto_h2}> teste modulo CSS</p>
            </div>
            <div className="item_menu">
              <a href="http://www.uol.com.br">Login</a>
            </div>
          </div>
          <div className="form">
            <h2 className={styles.texto_h2}> Entre com os seus Dados</h2>
            <form>
              <input type="text" placeholder="Entre com o seu nome" />
              <input type="text" placeholder="Entre com o seu endereço" />
              <input type="text" placeholder="Entre com o seu telefone" />
              <input type="text" placeholder="Entre com o seu Cep" />
              <input type="submit" value="enviar" />
            </form>
          </div>

        </div>
      </div>
    )
}
export default Main