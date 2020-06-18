import React, { useState } from 'react';


function Button(props) {
  var id = props.pokemon.id
  if (props.type === "add") {
    if ((!props.collection.hasOwnProperty(id))) {
      return (
        <div>
          {/* <button> */}
          <button onClick={() => props.action(props.pokemon)}>
           Add
          </button>
          <button onClick={() => props.battleLeft(props.pokemon)}>
           Left battle
          </button>
          <button onClick={() => props.battleRight(props.pokemon)}>
           Right battle
          </button>
        </div>
      );
    }
  } else if (props.type === "remove") {
    return (
      <div>
        {/* <button> */}
        <button onClick={() => props.action(props.pokemon)}>
         Remove
        </button>
      </div>
    );
  } else {
    return(
      null
    )
  }
  return(
    null
  )

}

export default Button;

// import React from 'react';

// function NewToDo(props) {
//   return (
//     <div>
//         <form onSubmit={ props.onSubmit }>
//             <input type="submit" value="Submit">Add to collection</input>/>
//         </form>
//     </div>
//   );
// }

// export default NewToDo;
