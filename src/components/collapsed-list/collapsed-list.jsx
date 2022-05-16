import React, {useState} from "react";
import classes from "./collapsed-list.module.css";

const CollapsedList = () => {
    const [open, setOpen] = useState([])

    const onCollapse = id => {
        let initialOpen = [...open]
        if (initialOpen.includes(id)) {
           initialOpen.splice(initialOpen.indexOf(id), 1)
            //initialOpen=initialOpen.filter(item => item !== id)
        } else {
            initialOpen.push(id)
        }
        setOpen(initialOpen)
    }


    return (
        <div className={classes.collapsedList}>
            <ol>
                <li>
                    <span onClick={() => onCollapse(1)}>Header 1</span>
                    {open.includes(1) && (
                        <ol className={classes.insideList}>
                            <li>
                                <span onClick={() => onCollapse(5)}>Header 2</span>
                                {open.includes(5) && (
                                    <ol className={classes.insideList}>
                                        <li>list 2 1</li>
                                        <li>list 2 2</li>
                                        <li>list 2 3</li>
                                    </ol>
                                )}
                            </li>
                            <li>list 1 2</li>
                            <li>list 1 3</li>
                        </ol>
                    )}
                </li>
                <li>
                    <span onClick={() => onCollapse(2)}>Header 2</span>
                    {open.includes(2) && (
                        <ol className={classes.insideList}>
                            <li>list 2 1</li>
                            <li>list 2 2</li>
                            <li>
                                <span onClick={() => onCollapse(3)}>Header 2</span>
                                {open.includes(3) && (
                                    <ol className={classes.insideList}>
                                        <li>list 2 1</li>
                                        <li>list 2 2</li>
                                        <li>
                                            <span onClick={() => onCollapse(4)}>Header 2</span>
                                            {open.includes(4) && (
                                                <ol className={classes.insideList}>
                                                    <li>list 2 1</li>
                                                    <li>list 2 2</li>
                                                    <li>list 2 3</li>
                                                </ol>
                                            )}
                                        </li>
                                    </ol>
                                )}
                            </li>
                        </ol>
                    )}
                </li>
            </ol>
        </div>
    )
}

export default CollapsedList