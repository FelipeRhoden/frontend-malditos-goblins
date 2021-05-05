import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { listProfileSheets } from '../../controllers/profileController';
import deleteGoblin from '../../controllers/sheetsController';
import generateNewGoblin from '../../controllers/generateSheets';

import Item from '../../components/Item'; 

function List(props){

    const [list, updateList] = useState([]);
    const [query, updateQuery] = useState(0);
    const [total, updateTotal] = useState(0);
    const history = useHistory();

    useEffect(() => {
        listProfileSheets(query, listSheet);

    // eslint-disable-next-line 
    },[list]);

    function listSheet(data){
        if ((query === 0 || list.length < total)){
            try{
                updateTotal(data.headers['X-Total-Count'])
                updateQuery((query + 1));
                
                updateList(
                    list.concat(
                        data.map(element =>
                            <Item 
                                content={element} 
                                key={element.id} 
                                onDelete={()=>deleteGoblin(element.id, refreshList)}
                                onView={() => viewGoblin(element.id)}
                            />
                        )
                    )
                    
                );

            }catch(err){
                console.error(`Error: ${err}`);

            }
        }    
    }

    function viewGoblin(id){
        localStorage.setItem('idSheet', id);
        history.push("/Sheet");
    }
    
    function refreshList(data){
        if (data.ok){
            try{
                updateQuery(0);
                updateList([]);            
    
            }catch(err){
                console.log(`Error: ${err}`);

            }
        }
    }

    return(
        <div id="list">
            <section className="card">
                <section className="cardHeader">
                    <span className="cardHeaderText">{localStorage.getItem('name')}</span>
                </section>
                
                <section className="cardContainer">
                    <button 
                        className="button"
                        onClick={() => generateNewGoblin(refreshList)}
                    >
                        Novo Goblin
                    </button>
                </section>

            </section>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default List;