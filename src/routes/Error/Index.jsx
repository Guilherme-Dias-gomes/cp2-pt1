import { Link } from "react-router-dom"

export default function Error() {

    return(
        <main>
            <h1>| Erro 404 - Pagína não encontrada |</h1>
            <Link to='/'>Retornar para a Home</Link>
        </main>
    )
    
}