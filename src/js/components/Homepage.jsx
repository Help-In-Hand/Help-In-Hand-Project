var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;


// var mysql = require('mysql');

// // create a connection to our Cloud9 server
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'takanarisasaki',
//   password : '',
//   database: 'mentalHelp'
// });

// var mentalHelp = require('../mentalHelp');




var Homepage = React.createClass({
    setInitialState: function() {
        return {};
    },
    _handleSignupSubmit: function(e) {
        e.preventDefault();
        // mentalHelp.createUser({username: 'Bob', password: 'leponge'}, function(err,response) {
        //     if (err) {
        //         console.log(err);
        //     }
        //     else {
        //         console.log(response);
        //     }
        // })
        //Need to store these info into database
        
        console.log('comes in here!!!')
    },
    render: function() {
        return (
            <div className="homepage">
            
                <form onSubmit={this._handleLoginSubmit} >
                    <input type="text" name="loginUsername" placeholder="Enter your username" ref="loginUsernameInput" />
                    <input type="text" name="loginPassword" placeholder="Enter your password" ref="loginPasswordInput" />
                    <button> Login! </button>
                </form>
                
                <form onSubmit={this._handleSignupSubmit} >
                    <input type="text" name="signupUsername" placeholder="Enter your username" ref="signupUsernameInput" />
                    <input type="text" name="signupPassword" placeholder="Enter your password" ref="signupPasswordInput" />
                    <button> Sign Up! </button>
                </form>
                
                <section> 
                    <h2> Fill out the form! </h2>
                    <a href='/forms'> Fill out the form! </a>               
                </section>
                
                
                
                <section>
                    <h2> About us </h2>
                    <p> We are a team of volunteer who's gonna help you! </p>
                </section>                
                
                <section>
                    <h2> Services </h2>
                    <p> We provide bunch of services </p>
                </section>
                
                
            </div>
        );
    }
    
});

module.exports = Homepage;