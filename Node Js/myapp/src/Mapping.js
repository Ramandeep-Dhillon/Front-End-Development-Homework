function Mapping(props)
{
    var mappedData = props.Products.map((item) =>{
        return <li>Product Name : {item.Name} |  Price : ${item.Price}</li>
    })
    return(
        <div>
            <ol>{mappedData}</ol>
        </div>
    )
}

export default Mapping