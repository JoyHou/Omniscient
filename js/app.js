/**
 * Created by Joy on 4/3/17.
 */

import {ErrorCode} from './Constants'
import SignIn from './profile/SignIn.react'
import SignUp from './profile/SignUp.react'

class Page extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: 'SignUp',
            userName: null

        };
        this.profileToggle = this.profileToggle.bind(this);
        this.afterSigned = this.afterSigned.bind(this);
        this.afterLogOut = this.afterLogOut.bind(this);
    }

    beforeRender() {
        $.ajax({
            url: 'http://omniscient.us-west-1.elasticbeanstalk.com/profile',
            dataType: 'json',
            cache: false,
            success: () => {},
        })
    }

    profileToggle() {
        if (this.state.profile === 'SignUp') {
            this.setState({profile: 'SignIn'})
        } else if (this.state.profile === 'SignIn') {
            this.setState({profile: 'SignUp'})
        }
    }

    afterSigned(data) {
        this.setState({
            profile: 'SignedIn',
            userName: data.profile.user_name
        });
    }

    afterLogOut() {
        this.setState({profile: 'SignIn'});
    }

    render() {
        let profilePanel = null;
        if (this.state.profile === 'SignUp') {
            profilePanel = <SignUp profileToggle={this.profileToggle} afterSigned={this.afterSigned}/>;
        } else if (this.state.profile === 'SignIn') {
            profilePanel = <SignIn profileToggle={this.profileToggle} afterSigned={this.afterSigned}/>;
        } else if (this.state.profile === 'SignedIn') {
            profilePanel = <Profile userName={this.state.userName} afterLogOut={this.afterLogOut}/>;
        }
        return (
            <div className="page">
                {profilePanel}
                <Window items={this.props.data}/>
            </div>
        )
    }
}


class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            logOutStatus: false
        };

        this.logOutHandler = this.logOutHandler.bind(this);
    }

    logOutHandler() {
        $.ajax({
            url: "http://omniscient.us-west-1.elasticbeanstalk.com/profile/logout",
            dataType: 'json',
            type: 'POST',
            cache: false,
            success: function (data) {
                if (data.success) {
                    this.props.afterLogOut();
                }
            }.bind(this)
        })
    }

    render() {
        let logOutMessage = null;
        if (this.state.logOutStatus) {
            logOutMessage = "You've logged out successfully!";
        } else {
            logOutMessage = <a href="#" onClick={this.logOutHandler}>log out</a>;
        }
        return (
            <div className="profile col-sm-2">
                <h2 id="userName">{this.props.userName}</h2>
                <div id="logOutMessage">{logOutMessage}</div>
            </div>
        )
    }
}



class Window extends React.Component {

    render() {

        return (
            <div className="window col-sm-8">
                <CommandBox />
            </div>
        )
    }
}

class Item extends React.Component {
    constructor() {
        super();

        this.itemCompletedHandler = this.itemCompletedHandler.bind(this);
    }
    itemCompletedHandler() {
        if (this.props.item.completed === false) {
            this.setState({completed: true });
        } else {
            this.setState({completed: false});
        }
    }

    render() {
        return (
            <div className="item">
                <input type="checkbox" onClick={this.itemCompleteHandler}/>
                <p className="itemContent">{this.props.item.itemContent}</p>
            </div>
        )
    }
}


class CommandBox extends React.Component {


    render() {
        return (
            <div className="commandBox">
                <input type="text" onChange={() => {}}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('content')
);