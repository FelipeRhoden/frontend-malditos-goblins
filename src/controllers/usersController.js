import { MG } from  '../apis';

export function signUp(name, password, callback, ...param){

    const headers = new Headers();
    headers.set('Content-Type', 'application/json')

    const request = new Request(`${MG}/user`, {
        method : "POST",
        mode: "cors",
        headers,
        body: `{
            "name": "${name}", 
            "password": "${password}"
        }`
    })

    fetch(request)
    .then(response => response.json())
    .then(data => {
        if (data.error)
            throw data.error;
        
        localStorage.setItem('id', data.id);
        localStorage.setItem('name', name)
        localStorage.setItem('password', password);
        
        return callback(data, ...param)
    })
    .catch(err => console.log(`Error: ${err}`));
}