import { Link } from "react-router-dom";
import { listaProdutos } from "../../components/listaProdutos";
import styles from "../Produtos.module.css";

export default function Produtos() {
  document.title = "Produtos";

  return (
    <>
      <h1>Lista de Produtos</h1>
      <div>
        <table className={styles.tblEstilo}>

          <thead className={styles.tblHeader}>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>IMAGEM</th>
              <th>PREÇO</th>
              <th>EDITAR/EXCLUIR</th>
            </tr>
          </thead>

          <tbody>
            {listaProdutos.map((item, indice) => (
              <tr key={indice} className={styles.tblRow}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>
                  <img src={`${item.img}`} alt={`${item.nome}`} />
                </td>
                <td>{item.preco}</td>
                <td>
                  {" "}
                  <Link to={`/editar/produtos/${item.id}`}>
                    {" "}
                    Editar
                  </Link>{" "}
                  /{" "}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    {" "}
                    Excluir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={6}>PRODUTOS</td>
            </tr>
          </tfoot>

        </table>
      </div>
    </>
  );
}
