import React from 'react';
import css from './style.module.css'

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
            <div  className={css.title} >
                {texto}
            </div>
        );
    }
}

export default Welcome;
