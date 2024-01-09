import { useState } from "react"
import MyList from "./MyList"

let nextId = 3;

function MyContainer() {
    const [items, setItems] = useState([
        {id:1, text:"item 1", clicked: false},
        {id:2, text:"item 2", clicked: false},
    ])

    function handleClick() {
        const newText = document.getElementById("textInput").value
        document.getElementById("textInput").value = ""
        setItems([
            ...items, 
            {
                id: nextId++,
                text: newText,
                clicked: false
            }
        ])
    }

    function updateItem(id) {
        const found = items.find((element) => element.id == id)
        found.clicked = true
        setItems([...items])
    }

    return <div>
        <textarea id="textInput" placeholder="input something"></textarea>
        <button onClick={handleClick}>Press me</button>
        <MyList
            updateItem={updateItem}
            header="Yup uh huh mhm"
            items={items}
        />
    </div>
}

export default MyContainer