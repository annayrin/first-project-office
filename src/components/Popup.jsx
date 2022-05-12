import "./Popup.css";
import {useEffect, useState} from "react";
import {IoMdResize} from "react-icons/all";
function Popup({active, close,popUpToButton}){

    const sizes = ["small","medium", "large"];
    let i = 0;

    const [className, setClassName] = useState("modal");

    function addClassName(e){
        console.log(e.target.name)
        setClassName(`modal ${e.target.name}`)
    }

    function changeClassName(){
        return className;
    }

    function changeTheSize(){

        console.log(sizes[i-1])
        console.log(i)
        setClassName(`modal ${sizes[i]}`);
        console.log(className)
        i++;
        console.log(i)
    }

    // useEffect(()=>{
    //     changeClassName();
    //     },[className]
    //
    // )






    if(!active){
        return null;
    }

    return(

    <div className={changeClassName()}>

        <div className="modal-content">
            <div className="modal-header">
                <IoMdResize className="resizeIcon" onClick={changeTheSize}></IoMdResize>
              {/*<button onClick={addClassName} name="small">Small</button>*/}
              {/*  <button onClick={addClassName} name="medium">Medium</button>*/}
              {/*  <button onClick={addClassName} name="large">Large</button>*/}
            </div>
            <div className="modal-body">
                aqui esta el contenido
            </div>
            <div className="modal-footer">

                <button className="buttonConfirm" onClick={() => {
                    close();
                    popUpToButton();
                }}>
                    Confirm
                </button>
                <button className="buttonClose" onClick={()=> {
                    close();
                    popUpToButton()
                }
                }>
                    Close
                </button>
            </div>
        </div>
    </div>

    )

}

export default Popup;