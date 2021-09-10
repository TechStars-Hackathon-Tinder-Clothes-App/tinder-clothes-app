import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Modal from "react-modal";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ReactRoundedImage from "react-rounded-image";
import Paper from "@material-ui/core/Paper";
import { Link, useHistory } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "40%",
    width: "40%",
    justifyContent: "center",
    display: "flex-start",
    flexDirection: "column",
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <Typography
                style={{ width: "100%", justifyContent: "center", marginTop: "2%" }}
                variant="h3"
                component="h2"
                gutterBottom
              >
                You matched with John!
              </Typography>
              <Paper style={{flexDirection:"row", display:"flex", marginTop: "5%", marginBottom: "5%", justifyContent:"center"}} elevation={0}>
                <ReactRoundedImage
                  style={{ backgroundColor: "red", marginRight: "20%" }}
                  roundedSize="0"
                  image={"https://i.imgur.com/0tgFHtJ.jpeg"} 
                />
                <div style={{width:"5%"}}/>
                <ReactRoundedImage
                  style={{ backgroundColor: "red" }}
                  roundedSize="0"
                  image={"https://i.imgur.com/4F4Y7RJ.jpeg"}
                />
              </Paper>

              <Link to="/chat">
              <Button
                onClick={closeModal}
                style={{
                  width: "100%",
                  height: "10%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2%",
                }}
                variant="contained"
                color="primary"
              >
                Send a message
              </Button>
              </Link>
              <Button
                onClick={closeModal}
                style={{ width: "100%", height: "10%" }}
                variant="outlined"
                color="primary"
              >
                Keep swiping
              </Button>
            </Modal>
            <TinderCards handleOpenModal={openModal} />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
