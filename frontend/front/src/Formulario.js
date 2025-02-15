function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            <input type='text' value={obj.nome}  placeholder='Nome'  onChange={eventoTeclado} name="nome"  className='form-control'/>
            <input type='text' value={obj.marca} placeholder='Marca' onChange={eventoTeclado} name="marca" className='form-control'/>

            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary'/>
                :

                <div>
                    <input type='button' onClick={alterar}  value='Alterar'   className='btn btn-warning'/>
                    <input type='button' onClick={remover}  value='remover'   className='btn btn-danger'/>
                    <input type='button' onClick={cancelar} value='cancelar'  className='btn btn-secondary'/>
                </div>
            }
            
        </form>
    )
    
}

export default Formulario;