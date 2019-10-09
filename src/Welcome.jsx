import React from 'react';

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lastName:'Silva'
        };
    }
    componentDidMount(){
        this.setState({
            lastName:' Zingaro'
        });
    }
    render(){
        const texto = <h1>Bem vindo, {this.props.name+this.state.lastName}</h1>
        return (
            <div>
                {texto}
            </div>
        );
    }
}

export default Welcome;
