var React = require('react');
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var withRouter = require('react-router').withRouter;
var fr = require('../../firebase/firebase.js');
var $ = require('jquery');


var ContactUs = React.createClass({
	submitEmailInfo: function () {
		$.post('/contactUs', {
			username: this.refs.contactUsUsernameEntry.value,
			emailAddress: this.refs.contactUsEmailEntry.value,
			title: this.refs.contactUsUserTitleEntry.value,
			message: this.refs.contactUsMessageEntry.value
		})
		.then(
			function(response){
				console.log(response);
				if (response.ok){
					browserHistory.push('/');
				}
				else {
					alert('there was an error');
				}
			}
		);
	},
    render: function() {
        return (
        	<div className="contactUsForm">

					<form className="form-horizontal">
            <fieldset>
            
            
              <legend className="legend">Contact Us</legend>

                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="textinput">Username or Pseudonym: </label>  
                  <div className="col-md-4">
                  <input id="textinput" ref="contactUsUsernameEntry" type="text" placeholder="username or pseudonym" className="form-control input-md" />
                  </div>
                </div>
                
                
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="textinput">Email: </label>  
                  <div className="col-md-4">
                  <input id="textinput" ref="contactUsEmailEntry"  type="text" placeholder="email address" className="form-control input-md"/>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="textinput">Title: </label>  
                  <div className="col-md-4">
                  <input id="textinput" ref="contactUsUserTitleEntry" type="text" placeholder="title" className="form-control input-md"/>
                  </div>
                </div>                
                
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="textarea">Message: </label>
                  <div className="col-md-4">                     
                    <textarea className="form-control" ref="contactUsMessageEntry" id="textarea" name="textarea" placeholder="message"></textarea>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="singlebutton"></label>
                  <div className="col-md-4">
                    <button id="singlebutton" className="btn btn-primary" onClick={this.submitEmailInfo}>Submit</button>
                  </div>
                </div>
            </fieldset>
          </form>
	</div>
	);
	}
});



var ContactUsWithRoute = withRouter(ContactUs);

module.exports = ContactUsWithRoute;
