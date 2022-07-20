import './Rodape.css'

const Rodape = () =>{
    return (
        <footer>
            <section className='rodape'>
                <div className='logos-redes-sociais'>
                    <img src='imagens/fb.png' alt='Logo Facebook'/>
                    <img src='imagens/tw.png' alt='Logo Twitter'/>
                    <img src='imagens/ig.png' alt='Logo Instagram'/>
                </div>
                <img src='imagens/logo.png' alt='Logo Rodapé'/>
                <p>
                    Desenvolvido por Leo.
                </p>
            </section> 
        </footer>
    )
}

export default Rodape