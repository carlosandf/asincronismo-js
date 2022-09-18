import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  title: "PlatziConf 2022",
  price: 200,
  description: "¡Vive la Conf desde Bogotá o de forma virtual desde cualquier ciudad! Crece con más de 20 referentes en la industria de la creatividad, tecnología, blockchain, negocios y más.",
  categoryId: 6,
  images: ["https://pbs.twimg.com/media/FZr1cGfWQAMLtDi.jpg"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));