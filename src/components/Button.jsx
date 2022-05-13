import {useEffect, useState} from "react";

function Button({openPopUp,showButton}){

    const [show, setShow] = useState(true);

    function hideTheButton(){
        setShow(showButton);
    }

    useEffect(()=>{
        hideTheButton();
    },[showButton])

    if(!show){
        return null;
    }

    return(
        <button className="popupActive" onClick={() => {
            openPopUp();
            hideTheButton();
        }}>Click here</button>
    )
}

export default Button;