function MyList(props) {
    const header = props.header
    const items = props.items
    const updateItem = props.updateItem

    const listItems = items.map((item) => {
        let deco = "none"

        if (item.clicked) {
            console.log("clicked")
            deco = "line-through"
        }

        return (
            <li key={item.id} onClick={() => updateItem(item.id)} style={{ textDecoration: deco }}>{item.text}</li>
        )
    })

    console.log(listItems)

    return (
        <div>
            <h1>{header}</h1>
            <ol>{listItems}</ol>
        </div>
    )
}

export default MyList