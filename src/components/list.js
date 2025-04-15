import React from "react";

const list = () => {

    let add = ()=>{
        let inp = document.getElementById("inp");
        let ul = document.getElementById("ul");
        let string1 = inp.value === '' ? '' : inp.value;
       const checkbox =  document.createElement("input");
       checkbox.type = 'checkbox';
    //    ul.appendChild(checkbox);
    //    ul.appendChild(list);
    const listItem = document.createElement("li");
    listItem.innerHTML = string1;

    listItem.prepend(checkbox); // add checkbox inside the li
    ul.appendChild(listItem);
    ul.appendChild(string1);
    }
    return (
        <div>
            <input type="text" id="inp"></input>
            <button onClick={add}>Add</button>
            <div>
                <ul id="ul">

                </ul>
            </div>
        </div>
    )
}

export default list;