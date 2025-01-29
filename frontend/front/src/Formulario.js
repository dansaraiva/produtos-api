function Formulario({botao, eventoTeclado, cadastrar, obj}){
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
                    <input type='button' value='Alterar'   className='btn btn-warning'/>
                    <input type='button' value='Remover'   className='btn btn-danger'/>
                    <input type='button' value='Cancelar'  className='btn btn-secondary'/>
                </div>
            }
            
        </form>
    )
    
}

export default Formulario;