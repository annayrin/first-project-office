import React from "react";
import classes from "./tree-categories.module.css";

const TreeCategories = () => {
    const commentData = [{
        id:1,
        title: "Fake article title.",
        author: "someone",
        comments:[{
            id: 2,
            text: "Example comment here.",
            author: "user2",
            children:[{
                id: 3,
                text: "Another example comment text.",
                author: "user3",
                children:[{
                    id: 4,
                    text: "Another example comment text.",
                    author: "user4",
                    children: "endpoint"
                }]

            }]

        }]


    }]


    return (
        <div className={classes.treeCategories}>

        </div>
    )
}

export default TreeCategories