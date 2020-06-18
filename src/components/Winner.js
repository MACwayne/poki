import React from 'react';

function Winner(props) {

        console.log("LEFT: " + props.left)
    //console.log("PASSED PROPS: "+ props.pokemon)

    if (props.right.length === 0) {
        return (
            <div>Select right battle</div>
        )
    }
    
    if (props.left.length === 0)  {
        return (
            <div>Select left battle</div>
        )
    }

    function score(poke) {
        var totalScore = 0

        totalScore += poke.stats[0].base_stat
        totalScore += poke.stats[1].base_stat
        totalScore += poke.stats[2].base_stat
        totalScore += poke.stats[3].base_stat
        totalScore += poke.stats[4].base_stat
        totalScore += poke.stats[5].base_stat

        return totalScore
    }

    if (score(props.left[0]) > score(props.right[0])) {
        return (
            <div>Left Wins!</div>
        )
    }

    if (score(props.left[0]) < score(props.right[0])) {
        return (
            <div>Right Wins!</div>
        )
    }

    if (score(props.left[0]) === score(props.right[0])) {
        return (
            <div>Tie!</div>
        )
    }

    return(
        null
    )
    
    
    // if (props.pokemon.length !== 0) {
    //     return (
    //         <div style={
    //             {
    //             border: '2px solid red'
    //             }
    //         }>
    //         {props.pokemon.map(poke =>
    //         <Container style={
    //             {
    //             border: '2px solid red'
    //             }
    //         }>
    //             <Row>
    //                 <Col>
    //                     <img src ={poke.sprites.front_default} />
    //                     {poke.name}
    //                 </Col>
    //                 <Col>
                    
    //                     HP : {poke.stats[0].base_stat}{"\n"}
    //                     ATK: {poke.stats[1].base_stat}{"\n"}
    //                     DEF: {poke.stats[2].base_stat}{"\n"}
    //                     SAK: {poke.stats[3].base_stat}{"\n"}
    //                     SDF: {poke.stats[4].base_stat}{"\n"}
    //                     SPD: {poke.stats[5].base_stat}{"\n"}

    //                 </Col>
    //                 <Col>
    //                     <Button
    //                         pokemon={poke} 
    //                         action= {props.action} 
    //                         type={props.type} 
    //                         collection={props.collection} 
    //                         battleLeft={props.battleLeft}
    //                         battleRight={props.battleRight}
    //                     />
    //                 </Col>
    //             </Row>
    //         </Container>
    //         )}
    //         </div>
    //     );
    // } else {
    //     return (null);
    // }
}


export default Winner