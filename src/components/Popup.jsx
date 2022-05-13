import "./Popup.css";
import {useEffect, useState} from "react";
import {IoMdResize} from "react-icons/io";
function Popup({active, close,popUpToButton,resize}){

   // const sizes = ["small","medium", "large"];

    const [className, setClassName] = useState("modal")

    // eslint-disable-next-line no-restricted-globals
    function addClassName(current = event.target.name){

        setClassName(`modal ${current}`)
    }
    function changeClassName(){
        return className;
    }

    // useEffect(()=>{
    //     console.log(resize)
    //     setClassName(`modal ${resize}`)
    //     },[resize]
    //
    // )


    if(!active){
        return null;
    }

    return(
        <div>
        <div className="backdrop" onClick={ ()=>
            {close();
            popUpToButton();
            addClassName("modal")}
        }>
        </div>
        <div className={changeClassName()}>
        {/*<div className="modal-content">*/}
            <div className="modal-header">
                {/*<IoMdResize className="resizeIcon" onClick={changeTheSize}></IoMdResize>*/}
                <button onClick={()=>addClassName()} name="small" className="sizeButton">S</button>
                <button onClick={()=>addClassName()} name="medium"className="sizeButton">M</button>
                <button onClick={()=>addClassName()} name="large"className="sizeButton">L</button>
            </div>
            <div className="modal-body">
                aqui esta el contenido
            </div>
            <div className="modal-footer">

                <button className="buttonConfirm" onClick={() => {
                    close();
                    popUpToButton();
                    addClassName("modal")
                }}>
                    Confirm
                </button>
                <button className="buttonClose" onClick={()=> {
                    close();
                    popUpToButton();
                    addClassName("modal")
                }
                }>
                    Close
                </button>
            </div>
        {/*</div>*/}
    </div>
        </div>

    )

}

export default Popup;