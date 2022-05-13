import DropdownList from "./DropdownList";
import {useState} from "react";
import "./DropdownList.css"

function Dropdown(){

    const [showList, setShowList] = useState(false)
    const [listName, setListName] = useState([])

    function handleOnClick(){
            setShowList(!showList)
    }

  function sendToDropdown(arr){
        setListName(arr);
  }

    return(
        <div className="dropBody">
            <div className="dropHead">
                <div className="dropHeader">
                <div className="dropTitle">Dropdown</div>
                <button className="dropButton" onClick={handleOnClick}>+</button>
                </div>
                    <div>
                    {listName.map((item,i)=> {
                        return <div className="dropChosens" key={i}>{item}</div>
                    })}
                </div>

            </div>
            <DropdownList showList={showList}  sendToDropdown={sendToDropdown}/>
        </div>
    )
}

export default Dropdown;