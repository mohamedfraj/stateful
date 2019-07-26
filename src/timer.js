import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            Timer: 0,//time en ms
            isrunning: false
        }
    }

    start = () => {
        if (this.state.isrunning == false) {
            if (this.state.interval) {
                return
            }
            const interval = setInterval(() => {
                this.setState({
                    Timer: this.state.Timer + 1000
                })
            },
                1000);

            this.setState({
                interval: interval
            })
            this.setState({ isrunning: !this.state.isrunning })
        } else {
            if (!this.state.interval) {
                return
            }
            clearInterval(this.state.interval)
            this.setState({
                interval: undefined
            })
            this.setState({ isrunning: !this.state.isrunning })
        }
    }
    reset = () => {
        clearInterval(this.state.interval)
        this.setState({
            isrunning: false,
            Timer: 0,
            interval: undefined
        })
    }

    render() {
        var heure = Math.floor((this.state.Timer / 3600000) % 24)
        var minute = Math.floor((this.state.Timer / 60000) % 60)
        var second = Math.floor((this.state.Timer / 1000) % 60)
        if (heure < 10) heure = "0" + heure
        if (minute < 10) minute = "0" + minute
        if (second < 10) second = "0" + second
        return (
            <div>
                <h1 className='time hms'>{heure} : {minute} : {second}</h1>
                <h1 className='hms'>Hour Minute Second</h1>
                <button className='btn' onClick={this.start} type='button'>start</button>
                <button className='btn' onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default Timer;