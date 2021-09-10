import React from "react";
import "./profile.css";
import Avatar from "@material-ui/core/Avatar";
import "./Material UI components/Textfield"
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "user12039812093",
            profilePicUrl: "https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg.",
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
                <h1> {this.state.username} </h1>
                <Avatar className="profile__picture" 
                src={this.state.profilePicUrl}
                style = {{
                    height:'15vh',
                    width: '15vh'
                }}
                />
                    <span>
                        <TextField id="standard-basic" label="Username" value={this.state.username} onChange={this.handleChange}/>
                        <Button
                        variant="contained"
                        onClick={this.handleSubmit}
                        disableElevation
                        >
                            Save
                        </Button>
                    </span>
            </div>
        )
    }
}

export default Profile;


// const [people, setPeople] = useState([]);

// useEffect(() => {
//   const unsubscribe = database
//     .collection("people")
//     .onSnapshot((snapshot) =>
//       setPeople(snapshot.docs.map((doc) => doc.data()))
//     );

//   return () => {
//     unsubscribe();
//   };
// }, []