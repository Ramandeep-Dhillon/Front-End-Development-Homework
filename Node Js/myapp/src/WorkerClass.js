import React from "react";
class WorkerClass extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {Name : "Ramandeep Singh", count : 0}
        this.clickHandler = this.clickHandler.bind(this);

    }
    clickHandler()
        {
            alert(this.state.count++)
        }
    
    render()
    {
               
        return (            
        <div>
            <h1>{this.state.Name}</h1>
            <h1>Class component created by{this.props.Name}</h1>
            <button onClick={this.clickHandler}>Get Count</button>
        </div>)
    }
   
}


export default WorkerClass