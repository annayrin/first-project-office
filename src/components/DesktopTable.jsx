import dataObject from "../Data-Object";
import {useState} from "react";
import "./DesktopTable.css"


function DesktopTable(){


    const [data, setData] = useState(dataObject);
    const headers = Object.keys(data[0]);
    console.log(headers);



    return(
        <div className ='desktopDiv'>
            <div className ='scrollable'>
            <table className ='desktopTable'>
                <thead>
                <tr>
                    {headers.map((item) =>
                        <th key={item} className={item}>{item.charAt(0).toUpperCase()+item.slice(1)}</th>
                    )
                    }
                </tr>
                </thead>
                <tbody>
                {data.map((item)=>(
                    <tr key={item.id}>
                        {Object.values(item).map((val) => (
                                <td key={val} >
                                    {val}
                                </td>
                            )
                        )}
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
        </div>

    )

}
export default DesktopTable;



