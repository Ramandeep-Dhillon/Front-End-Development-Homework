import Listitem from "./ListItems"
function ShoppingList(props){
    return(
        <div>

            <Listitem item={props.items[0]} />
        <ol>
            <Listitem item={props.items[1]} />
            <Listitem item={props.items[2]} />
            <Listitem item={props.items[3]} />
            <Listitem item={props.items[4]} />
        </ol>
        </div>
    )

}

export default ShoppingList