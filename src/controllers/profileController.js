import { MG } from '../apis';
 
export function listProfileSheets(query, callback, ...param){

    const resHeaders = {};

    const headers = new Headers();
    headers.set("authorization", localStorage.getItem("password"));
    headers.set("id", localStorage.getItem("id"));

    const request = new Request(
        `${MG}/profile/list?page=${query}`,
        {
            method : "GET",
            mode: "cors",
            headers
        }
    );

    fetch(request)
        .then(response => {
            resHeaders['X-Total-Count'] = response.headers.get("X-Total-Count");
            return response.json();
        })
        .then(data => {
            data['headers'] = resHeaders;
            return callback(data, ...param);

        })
    .catch(err => {console.log(`Error: ${err}`)});
};

export function profileSheet(id, callback, ...params){
    const headers = new Headers();
    headers.set("authorization", localStorage.getItem("password"));
    headers.set("id", localStorage.getItem("id"));

    const request = new Request(
        `${MG}/profile/${id}`,
        {
            method : "GET",
            mode: "cors",
            headers
        }

    );

    fetch(request)
        .then(response => {
            return response.json();

        })
        .then(data => {
            return callback(data, ...params);

        })
    .catch(err => {console.log(`Error: ${err}`)});
}
