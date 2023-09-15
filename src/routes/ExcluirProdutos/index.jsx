import { useNavigate, useParams } from "react-router-dom";
import { listaProdutos } from "../../components/listaProdutos";

export default function ExcluirProdutos() {
  document.title = "Excluir Produto";

  const navigate = useNavigate();

  const { id } = useParams();

  const produto = listaProdutos.filter((item) => item.id === parseInt(id))[0];

  const handleDelete = () => {
    
    let indice;
    indice = listaProdutos.findIndex((item) => item.id === parseInt(id));

    listaProdutos.splice(indice, 1);


    navigate("/produtos");
  };

  return (
    <>
      <div>
        <h1>Excluir Produtos</h1>
        <div>
          <section>
            <h2>Deseja realmente excluir esse produto?</h2>
            <h3>Nome: {produto.nome}</h3>
            <h3>Descrição: {produto.desc}</h3>
            <div>
              <img src={produto.img} alt={produto.desc} />
            </div>
            <h3>Preço: {produto.preco}</h3>
          </section>
          <button onClick={handleDelete}>EXCLUIR</button>
          <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
        </div>
      </div>
    </>
  );
}
