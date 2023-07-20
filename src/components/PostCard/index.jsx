import { Container } from "./styles";

export function Card({title, description, imgUrl, ...rest}) {
    return (
        <Container {...rest}>
            <img src={imgUrl}/>
            <h1> {title} </h1>
            <p> {description} </p>
            <span>
                <a> Ler mais </a>
            </span>
        </Container>
    )
}