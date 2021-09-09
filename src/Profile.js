import React from "react";
import "./profile.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "user12039812093",
            profilePic: "https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg.",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div className="profile">
                <h1> {this.username} Username </h1>
                <Avatar className="profile__picture" src={this.profilePic} />

                <form onSubmit={this.handleSubmit}>
                    <span> 
                        <h3> Username: <input type="text" value={this.state.username} onChange={this.handleChange} /> </h3>
                    </span>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}

export default Profile;