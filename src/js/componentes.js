import "../css/estilos.css";
import logowp from "../assets/img/webpack-logo.png";

export const saludar = nombre => {
    console.log('creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `hola ${nombre} soy yo`;
    document.body.append(h1)

    const img = document.createElement('img')
    img.src = logowp;
    document.body.append(img);
}