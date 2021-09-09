import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "user12039812093",
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
                <h1> Profile </h1>
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