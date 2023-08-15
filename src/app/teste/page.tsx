import axios from "axios";

type UrlProps = {
  cod: number;
  link: string;
  descr_nome: string; 
}

const getUrls = async () => {
  const response = await axios.get<UrlProps[]>(`https://transparencia.apps.tcu.gov.br/rest/transparencia/servicoPorKeyword/contas`);

  return response.data;
}

export default async function Axios(){
  const urls = await getUrls();

  return (
    <>
      <h1>Axios</h1>
      {urls.map(url => (
        <p key={url.cod}>Codigo:{url.cod} Link:{url.link} Descricao:{url.descr_nome}</p>
        ))}
    </>
  );  
}