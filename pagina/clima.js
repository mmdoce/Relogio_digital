async function pegarclima() {
    
   const apiurl = "https://api.openweathermap.org/data/2.5/forecast?lat=-24.4972&lon=-47.8442&appid=cf62eaf4b60611c0b4b9c8fa052b8778"

    const resposta = await fetch(apiurl);
    const dados = await resposta.json();

    return dados;
}

const noHtml = (cidade, tempMin, tempMax) =>{
    console.log(cidade,tempMin, tempMax)
}

async function main () {

    const dados = await pegarclima ()
    const cidade = dados.city.name
    const tempMin = dados.list[0].main.temp_min
    const tempMax = dados.list[0].main.temp_max

    noHtml(dados.cidade, dados.tempMin, dados.tempMax)

}

main()