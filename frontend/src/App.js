import React, { useEffect, useState } from "react";
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  //Objeto produto
  const produto = {
    codigo: null,
    nome: '',
    marca: ''
  }

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

useEffect(() => {
  fetch('/api/listar')
    .then(retorno => {
      if (!retorno.ok) {
        throw new Error(`HTTP error! status: ${retorno.status}`);
      }
      return retorno.json();
    })
    .then(retorno_convertido => {
      console.log('API Response:', retorno_convertido); // Debug log
      if (Array.isArray(retorno_convertido)) {
        setProdutos(retorno_convertido);
      } else {
        console.error('API did not return an array:', retorno_convertido);
        setProdutos([]); // Set empty array as fallback
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
      setProdutos([]); // Set empty array on error
    });
}, []);
  //Obter dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  }

  //Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'

      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setProdutos([...produtos, retorno_convertido]);
          alert('Produto cadastrado com sucesso!');
          limparFormulario();
        }
      })
  }

  //Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/alterar', {
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert('Produto alterado com sucesso!');
          
          //Cópia do vetor de produtos
          let vetorTemp = [...produtos];

          //Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.codigo === objProduto.codigo;
          });

          //Alterar produto do vetorTemp
          vetorTemp[indice] = objProduto;

          //Atualizar o vetor de produtos
          setProdutos(vetorTemp);

          limparFormulario();
        }
      })
  }

  //Remover produto
  const remover = () => {
    fetch('http://localhost:8080/remover/' + objProduto.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem);

        //Cópia do vetor de produtos
        let vetorTemp = [...produtos];

        //Índice
        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objProduto.codigo;
        });

        //Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        //Atualizar o vetor de produtos
        setProdutos(vetorTemp);

        limparFormulario();

      })
  }

  //Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  //Selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);

  }

  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar}/>
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;
