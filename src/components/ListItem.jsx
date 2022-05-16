import React from "react"
import "./ListItem.css"
import {useState} from "react";

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

// let count = 0;
// function countNested(array){
//
//     return array.map((item) => {
//
//       if(typeof item === "object"){
//             count++;
//
//       }else{
//           countNested(Object.values(item))
//       }
// return count;
//       })
//
//     }




function ListItem() {


    const [visible, setVisible] = useState(new Array(4).fill(false) )
console.log(visible);



    function nested(array) {

        function fn(e){
            setVisible(visible.map((item,index)=>{

                return item = index === e.target.name-1? !item:item;
            }))
        }

      return array.map((item,index) => (

                <ol key={"ol"+index+item.id}>
                  <div className="header" key={"div"+index+item.id}><h2 className="listTitle"> List {item.id} </h2>
                      <button className="listButton" name={item.id} onClick={fn}>{visible[item.id-1]? "-" : "+"}</button>
                  </div>

                   {visible[item.id-1] && Object.keys(item).map((key) => {
                       if(key !== "id") {
                           if (typeof item[key] !== "object") {
                               return <li key={"li"+item[key]+index}> {item[key]} </li>
                           } else {
                               return nested(item[key])
                           }
                       }
                  })
                  }

               </ol>

          )
        )

    }

    return (
        <div>
            {nested(commentData)}
        </div>

    )

}


export default ListItem;