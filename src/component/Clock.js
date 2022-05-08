import React from 'react';

class Clock extends React.Component {
    state = { date : new Date() };
    refress() {
        
        console.log("calling");
        this.setState( {
            date : new Date()
        });
    }

    render() {
        setTimeout(() => {
            this.refress();
        }, 1000);
        const { date } = this.state;
        const { locale } = this.props;
        return (
            <div>
                <h1> {date.toLocaleTimeString(locale)} </h1> 
                <button onClick={ this.refress.bind(this) } > Refress </button> 
            </div>
        );
    }
}
export default Clock;