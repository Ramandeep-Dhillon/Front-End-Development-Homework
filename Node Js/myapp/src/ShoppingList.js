import Listitem from "./ListItems"
function ShoppingList(props){
    return(

        <><Listitem items={props.items[0]} /><ol>
            <Listitem items={props.items[1]} />
            <Listitem items={props.items[2]} />
            <Listitem items={props.items[3]} />
            <Listitem items={props.items[4]} />
        </ol></>
    )

}

export default ShoppingList