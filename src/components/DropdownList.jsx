import "./DropdownList.css";
import {useEffect, useState} from "react";

function DropdownList({showList, sendToDropdown}){
    const list =["Moscow", "London", "Erevan"];

    const [visible, setVisible] = useState(false)

    const [checkedState, setCheckedState] = useState(
        new Array(list.length).fill(false)  //guardo los false, por si los chequea las cambie por true
    );

    const [array, setArrayToParentTotal] = useState([]);

    const handleOnChange = (i) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === i ? !item : item
        );

        setCheckedState(updatedCheckedState);


        const chosen = updatedCheckedState.map(
            (currentState, index) =>{
                if (currentState === true) {
                    return list[index];
                }
            }

        );

        setArrayToParentTotal(chosen);
console.log(array);
    };

    useEffect(()=>{
        sendToDropdown(array);
    }, [array])


    useEffect(()=>{
        setVisible(showList)
    },[showList])




    if(!visible){
        return null;
    }

    return(
        <ul>
            {list.map((item, index) =>{
            return <li key={index}>
            <div className="listItem">
                <div className="left-section">
                    <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                         checked={checkedState[index]}
                         onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`checkbox-${index}`}>{item}</label>
                </div>

            </div>
        </li>})}
        </ul>
    )
}
export default DropdownList;