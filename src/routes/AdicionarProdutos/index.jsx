import { useState } from "react";

import { listaProdutos } from "../../components/listaProdutos";

import { useNavigate } from "react-router-dom";

import style from "../Produtos.module.css"



export default function Index() {

    const navigate = useNavigate()

    const [produtos, setProdutos] = useState(listaProdutos);

    const [novoProduto, setNovoProduto] = useState({

        id: listaProdutos.length + 1,
        nome: "",
        preco: "",
    });



    const adicionarProduto = () => {
        setProdutos([...produtos, { ...novoProduto, id: novoProduto.id }]);
        setNovoProduto({
            id: novoProduto.id + 1,
            nome: "",
            preco: "",

        });

        listaProdutos.push(novoProduto);

        navigate("/produtos")

    };

    const handleChange = (event) => {

        const { name, value } = event.target;

        setNovoProduto({...novoProduto, [name]: value,});

    };

    return (
        <>
            <h1 className={style.h1}>Adicionando produtos</h1>

            <div>

                <form>

                    <div>

                        <label htmlFor="idNome">Nome:</label>
                        <input

                            type="text"

                            id="idNome"

                            name="nome"

                            value={novoProduto.nome}

                            onChange={handleChange}

                        />

                    </div>

                    <div>

                    </div>

                    <div>

                        <label htmlFor="idPreco">Preço:</label>
                        <input

                            type="text"

                            id="idPreco"

                            name="preco"

                            value={novoProduto.preco}

                            onChange={handleChange}

                        />

                    </div>

                    <button type="button" onClick={adicionarProduto}>

                        Adicionar Produto

                    </button>

                </form>

            </div>

        </>

    );

}