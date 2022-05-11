
import react, {useEffect, useState} from "react";
import {MediaQuery, } from "react-responsive";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

const Table = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 1024;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleWindowResize);

        return () =>
            window.removeEventListener("resize", handleWindowResize);
    }, []);


    return width < breakpoint ? <MobileTable /> : <DesktopTable />;
}

export default Table;