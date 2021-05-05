import { MG } from '../apis';

export default function generateNewGoblin(callback, ...param){

    const resHeaders = {};

    const headers = new Headers();
    headers.set("authorization", localStorage.getItem("password"));
    headers.set("id", localStorage.getItem("id"));

    const request = new Request(`${MG}/randomSheet/goblin`,{
        method : "POST",
        mode: "cors",
        headers
    });

    fetch(request)
    .then(response => {
        resHeaders['ok'] = response.ok;
        return response.json();

    })
    .then(data => {
        data['ok'] = resHeaders['ok'];

        return  callback(data, ...param);

    })
    .catch(err => {console.log(`Error: ${err}`)});
}