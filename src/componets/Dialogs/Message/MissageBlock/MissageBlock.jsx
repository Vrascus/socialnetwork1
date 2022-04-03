import c from "../../Dialogs.module.css";
import React from "react";

let newMissagesElement = React.createRef ();

let addMissages = () => {
    let text = newMissagesElement.current.value;
    alert(text);
}

const MissageBlock = (props) =>{
    return(
        <div>
            <div>
                <textarea ref={newMissagesElement}></textarea>
            </div>
        <div className={c.missageBlock}>

            <button onClick={ addMissages }>Добавить</button>
        </div>
        </div>
    )


};

export default MissageBlock;

