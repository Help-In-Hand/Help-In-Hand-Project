var React = require('react');
var Link = require('react-router').Link;

var GotHungUpOn = React.createClass({
    render: function(){
        return(
            <div className='patientDisconnectedByButton'>
                <p>The counselor has ended the call.</p> 
                <p>Thanks for your visit today</p>
            </div>
        );
    }
});

module.exports = GotHungUpOn;