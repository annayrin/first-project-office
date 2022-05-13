import "./Popup.css";
import {useEffect, useState} from "react";
import {IoMdResize} from "react-icons/io";
function Popup({active, close,popUpToButton}){

   // const sizes = ["small","medium", "large"];

    const [className, setClassName] = useState("modal")

    // eslint-disable-next-line no-restricted-globals
    function addClassName(current = event.target.name){
        console.log(current)
        setClassName(`modal ${current}`)
    }
    function changeClassName(){
        return className;
    }

    useEffect(()=>{
        changeClassName();
        },[className]

    )

    //    let i = 0;
    // function changeTheSize(){
    //     if(i === 4 ){
    //         i=0;
    //     }
    //     i++;
    //     console.log()
    //     return sizes[i-1];
    //
    // }

    if(!active){
        return null;
    }

    return(
        <div className="backdrop" onClick={ ()=>
            {close();
            popUpToButton();
            addClassName("modal")}
        }>
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