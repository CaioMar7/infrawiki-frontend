
import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

export function Button({title, loading=false, redirect=false, ...rest}) {
    const navigate = useNavigate();

    function handleNav(redirect) {
        if (redirect == -1) {
            navigate(-1)
        } else {
            navigate(redirect)
        }
    }

    return (
        <Container type="button" disabled={loading} onClick={ redirect ? () => handleNav(redirect) : ""} {...rest} >
            { loading ? 'Carregando...' : title }
        </Container>
    )
}