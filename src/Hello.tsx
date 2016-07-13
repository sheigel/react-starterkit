import * as React from "react";
import PropTypes = __React.PropTypes;

class SpecialComponent extends React.Component<{on:boolean},{text:number}> {
    constructor() {
        super()
        this.state = {text: 1}
    }

    render() {
        return <div>
            <div>Component is on:{this.props.on}</div>
            {this.state.text}
            <button onClick={()=>this.setState({text:this.state.text+1})}>Buttonu</button>
        </div>
    }
}

class WrapperComponent extends React.Component<{},{on:boolean}> {
    constructor() {
        super()
        this.state = {on: true}
    }

    render() {
        let compo:any;
        if (this.state.on){
            compo = <SpecialComponent on={true}/>
        }else{
            compo = <SpecialComponent on={false}/>
        }

        return <div>
            <div> on:{this.state.on.toString()}</div>
            {compo}
            <button onClick={()=>{ this.setState({on:!this.state.on}) }}>Switch</button>

        </div>
    }
}
export default ({message}: {message:string})=> {
    return (
        <div>
            <WrapperComponent/>
        </div>
    );
}

