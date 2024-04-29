import { useState } from "react";

export default function Player({initialName, symbol, isActive}){
  const [playerName, setPlayerName] = useState(initialName);
   const [isEditing, setIsEditing]= useState(false);
function TriggerEdit(){
    setIsEditing((editing)=> !editing);
};

function handleChange(event){
  setPlayerName(event.target.value);
  }

let editablePlayerName = <span className="player-name">{playerName}</span>
if(isEditing){
  editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>;
}


    return(
    <li className={isActive? "active": ""}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={TriggerEdit}>{isEditing? 'Save': 'Edit'}</button>
    </span>
  </li>
    )
}