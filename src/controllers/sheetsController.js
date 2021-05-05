import { MG } from '../apis';

export default 
    function deleteGoblin(id, callback, ...param){
        const headers = new Headers();
        headers.set("authorization", localStorage.getItem("password"));
        headers.set("id", localStorage.getItem("id"));

        const request = new Request(`${MG}/sheet/${id}`,{
            method : "DELETE",
            mode: "cors",
            headers
        });

        fetch(request)
        .then(response => {
                const data = {ok: response.ok}
                
                return callback(data, ...param);

        })
        .catch(err => {console.log(`Error: ${err}`)});

    }