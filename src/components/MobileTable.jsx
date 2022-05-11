
import dataObject from "../Data-Object";
import "./MobileTable.css";
import {useState} from "react";

    function MobileTable(){
        const [data, setData] = useState(dataObject);
        const headers = Object.keys(data[0]);


        return(
            <div className ='mobileDiv'>
                <div className ='scrollable'>
                    <table className ='mobileTable'>
                            { data.map((item)=>
                                (<tbody>
                                {headers.map((header) =>
                                    (
                                        <tr key={item[header]}>
                                            <th key={header}>{header.charAt(0).toUpperCase()+header.slice(1)}</th>
                                            <td>{item[header]}</td>
                                        </tr>

                                    )
                                )
                                }
                                </tbody>
                                )
                            )
                            }

                    </table>
                </div>
            </div>

        )

    }

export default MobileTable;

