import React from 'react';
import Button from './Button'
import { Container, Row, Col } from 'react-bootstrap';

function PokemonList(props) {

    //console.log("PASSED PROPS: "+ props.pokemon)
    
    if (props.pokemon.length !== 0) {
        return (
            <div style={
                {
                border: '2px solid red'
                }
            }>
            {props.pokemon.map(poke =>
            <Container style={
                {
                border: '2px solid red'
                }
            }>
                <Row>
                    <Col>
                        <img src ={poke.sprites.front_default} />
                        {poke.name}
                    </Col>
                    <Col>
                    
                        HP : {poke.stats[0].base_stat}{"\n"}
                        ATK: {poke.stats[1].base_stat}{"\n"}
                        DEF: {poke.stats[2].base_stat}{"\n"}
                        SAK: {poke.stats[3].base_stat}{"\n"}
                        SDF: {poke.stats[4].base_stat}{"\n"}
                        SPD: {poke.stats[5].base_stat}{"\n"}

                    </Col>
                    <Col>
                        <Button
                            pokemon={poke} 
                            action= {props.action} 
                            type={props.type} 
                            collection={props.collection} 
                            battleLeft={props.battleLeft}
                            battleRight={props.battleRight}
                        />
                    </Col>
                </Row>
            </Container>
            )}
            </div>
        );
    } else {
        return (null);
    }
}


export default PokemonList