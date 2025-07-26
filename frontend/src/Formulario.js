function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>


            <input type='text' value={obj.nome}  placeholder='Nome'  onChange={eventoTeclado} name="nome"  className='form-control'/>
            <input type='text' value={obj.marca} placeholder='Marca' onChange={eventoTeclado} name="marca" className='form-control'/>

            {
                botao
                ?
                <button type="button" onClick={cadastrar} className='btn btn-primary'>
                <i className="fas fa-plus" ></i> Adicionar
            </button>
            
                :

                <div>
                    <button type="button" onClick={alterar} className="btn btn-warning">
                        <i className="fas fa-edit"></i> Alterar
                    </button>
                    <button type='button' onClick={remover}  value='Remover'   className='btn btn-danger'>
                        <i className="fas fa-remove"></i> Remover
                    </button>
                    <button type='button' onClick={cancelar} value='Cancelar'  className='btn btn-secondary'>
                        <i className="fas fa-cancel"></i> Cancelar
                        </button>
                </div>
            }
            
        </form>
    )
    
}

export default Formulario;