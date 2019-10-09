import React from 'react'
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            time: new Date()
        };
    }
    tick = () => {
        this.setState({ time: new Date() });
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            return this.tick();
        }, 1000);
    }

    render() {
        return (
            <div>{this.state.time.toLocaleString()}</div>
        );
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
}

export default Clock;