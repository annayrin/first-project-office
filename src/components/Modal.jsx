import {useEffect, useState} from "react";
import Popup from "./Popup";
import "./Popup.css";
import Button from "./Button";
import MobileTable from "./MobileTable";
import DesktopTable from "./DesktopTable";

function Modal(){


    const [active, setActive] = useState(false);
    const [showButton, setShowButton] =  useState(true)
    const [resize, setResize] = useState("modal");
    const [width0, setWidth0] = useState(window.innerWidth);

    function openPopUp(){
        setShowButton(false);
        setTimeout(()=>{setActive(true)},500)

    }

    function close(){
        setActive(false);
    }

     function popUptoButton(){
         setTimeout(()=> setShowButton(true),500)
     }




//     useEffect(() => {
//         const handleWindowResize = () => setWidth0(window.innerWidth)
//
//         window.addEventListener("resize", handleWindowResize);
//
//         return () =>
//             window.removeEventListener("resize", handleWindowResize);
//     }, []);
//
// function resizable() {
//     if (width0 <= 420) {
//         setResize("small")
//     } else if (width0 < 1024 && width0 > 420) {
//         setResize("medium")
//     } else {
//         setResize("large")
//     }
// }
//
// useEffect(()=>{
//     resizable()
// },[width0]) //no esta funccionando


    return(
        //<div className={active?"container backdrop":"container"} onClick={close}>
        <div className="container">
            <Popup active={active} close={close} popUpToButton={popUptoButton} resize={resize}/>
            <Button openPopUp={openPopUp} showButton={showButton}/>
        </div>
    )
}

export default Modal;