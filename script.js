async function requisitar2(){
    let url = 'https://alunos.b7web.com.br/api/ping';

    let params = {'method': 'POST'};

    let r  = await fetch(url, params);
    console.log(r);
}