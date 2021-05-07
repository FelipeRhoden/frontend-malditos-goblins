import { MG } from  '../apis';

export function login(name, password, callback, ...param){

    const headers = new Headers();
    headers.set('name', `${name}`);
    headers.set('authorization', `${password}`);

    const request = new Request(`${MG}/login`, {
        method : "POST",
        mode: "cors",
        headers
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

export function logout(){
  localStorage.clear();
}