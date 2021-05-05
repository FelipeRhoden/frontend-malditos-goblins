import React from 'react';

import './styles.css';

import vidaIcon from '../../assets/Vida.png';
import manaIcon from '../../assets/Mana.png';
import escudoIcon from '../../assets/Escudo.png';
import goblinIcon from '../../assets/Goblin.png';
import olhoIcon from '../../assets/Olho.png';
import lixeiraIcon from '../../assets/Lixeira.png'

function Item(props){

    const { race, name, occupation,vitality, protection, mana, level} = props.content;

    return (
        <li className="card">
            <section className="cardHeader">
                <div className="cardHeaderRound vitality">
                    <span>{vitality}</span>
                    <img className="headerRoundImg left" src={vidaIcon} alt='Vitalidade'/>
                </div>
                <div className="cardHeaderRound protection">
                    <span>{protection}</span>
                    <img className="headerRoundImg left" src={escudoIcon} alt='Proteção'/>
                </div>
                <span className="cardHeaderText" >{race}</span>
                <div className="cardHeaderRound mana">
                    <img className="headerRoundImg right" src={manaIcon} alt='Mana'/>
                    <span>{mana}</span>
                </div>
                <div className="cardHeaderRound level">
                    <img className="headerRoundImg right" src={goblinIcon} alt='Nível'/>
                    <span>{level}</span>
                </div>
            </section>

            <section className="cardContainer">
                <div className="cardContainerContent">
                    <p>Nome: {name}</p>
                    <p>Ocupação: {occupation}</p>
                </div>
            </section>

            <section className="cardButtonsRound">
                <span className="buttonsRound" onClick={props.onView}>
                    <img  src={olhoIcon} alt='Visualizar Ficha'/>
                </span>

                <span className="buttonsRound" onClick={props.onDelete}>
                    <img  src={lixeiraIcon} alt='Excluir Ficha'/>
                </span>

            </section>
        </li>
    )
}

export default Item;