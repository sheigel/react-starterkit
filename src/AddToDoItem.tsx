import * as React from 'react'

export default class AddToDoItem extends React.Component<{onAdd:(text:string)=>void}, {}> {
    newItemInput:HTMLInputElement
    onAdd = ()=>{
        this.props.onAdd(this.newItemInput.value)
        this.newItemInput.value = ""
    }

    render() {
        return (
            <div>
                <input ref={(input)=>this.newItemInput=input} type="text"/>
                <button onClick={this.onAdd}>Create</button>
            </div>
        )
    }
}