import { useState, useEffect } from 'react';

import { profileSheet } from '../../controllers/profileController';

import './styles.css';

import vidaIcon from '../../assets/Vida.png';
import manaIcon from '../../assets/Mana.png';
import escudoIcon from '../../assets/Escudo.png';
import goblinIcon from '../../assets/Goblin.png';
import goblinBody from '../../assets/GoblinBody.png';
import facaIcon from '../../assets/Faca.png';
import scrollIcon from '../../assets/Scroll.png';
import cordaIcon from '../../assets/Corda.png';
import trevoIcon from '../../assets/Trevo.png';
import mochilaIcon from '../../assets/Bag.png';
import restosMochilaIcon from '../../assets/RestosMochila.png';

export default function Sheet(props){

    useEffect(()=>{
        const id = localStorage.getItem("idSheet");
        if (id) 
            profileSheet(id, updateSheet);

    }, [])

    const 
        [race, updateRace] = useState('Race'), 
        [name, updateName] = useState('Name'), 
        [occupation, updateOccupation] = useState('Occupation'), 
        [appearance, updateAppearance] = useState('Appearance'), 
        [vitality, updateVitality] = useState(0), 
        [protection, updateProtection] = useState(0), 
        [mana, updateMana] = useState(0), 
        [level, updateLevel] = useState(0), 
        [combat, updateCombat] = useState(0),
        [knowledge, updateKnowledge] = useState(0),
        [skill, updateSkill] = useState(0),
        [luck, updateLuck] = useState(0),
        [equips, updateEquips] = useState([]),
        [classCardInventary, updateClassCardInventary] = useState('card sheet');

    function updateSheet(data){
        updateRace(data['race']);
        updateName(data['name']);
        updateOccupation(data['occupation']);
        updateAppearance(data['appearance']);
        updateVitality(data['vitality']);
        updateProtection(data['protection']);
        updateMana(data['mana']);
        updateLevel(data['level']);
        updateCombat(data['combat']);
        updateKnowledge(data['knowledge']);
        updateSkill(data['skill']);
        updateLuck(data['luck']);
        updateEquips(data['equips']
            .map(
                element => (
                    <p 
                        key={element['id']}
                        className="equips"
                    >
                        {element['description']}
                    </p>
                )
            )
        );
        return;
    }
    
    function toggleVisibleInventary(){
        if (classCardInventary === 'card sheet')
            updateClassCardInventary('card sheet inventario')
        else
            updateClassCardInventary('card sheet');
        
        return;
    }
    
    return (
        <div className={classCardInventary}>
            <section className="cardHeader">
                <div className="cardHeaderRound vitality">
                    <span>{vitality}</span>
                    <img className="headerRoundImg left" src={vidaIcon} alt='Vitalidade'/>
                </div>
                <div className="cardHeaderRound protection">
                    <span>{protection}</span>
                    <img className="headerRoundImg left" src={escudoIcon} alt='Proteção'/>
                </div>
                <span className="cardHeaderText">{race}</span>
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
                    <p className="cardContainerText">Nome: {name}</p>
                    <p className="cardContainerText">Aparência: {appearance}</p>
                    <p className="cardContainerText">Ocupação: {occupation}</p>
                    {equips}
                    <div className="cardContainerContentBody">
                        <img src={goblinBody} alt="Goblin"/>
                        <div className="attr">
                            <p>Atributos</p>
                            <div className="attrItem">
                                <img src={facaIcon} alt="Combate"/>
                                <span className="combat">{combat}</span>
                            </div>
                            <div className="attrItem">
                                <img src={scrollIcon} alt="Conhecimento"/>
                                <span className="knowledge">{knowledge}</span>
                            </div>
                            <div className="attrItem">
                                <img src={cordaIcon} alt="Habilidade"/>
                                <span className="skill">{skill}</span>
                            </div>
                            <div className="attrItem">
                                <img src={trevoIcon} alt="Sorte"/>
                                <span className="luck">{luck}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <img 
                className="mochilaIcon"  
                src={mochilaIcon} 
                alt="Inventário"
                onClick={toggleVisibleInventary}
            />
            <img 
                className="restosMochila"  
                src={restosMochilaIcon} 
                alt="Restos Mochila"
            />
        </div>
    )
}