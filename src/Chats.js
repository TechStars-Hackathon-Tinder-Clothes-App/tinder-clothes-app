import React, {useState, useEffect} from "react";
import "./Chats.css";
import Chat from "./Chat"
import database from "./firebase";

function Chats() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  
  return <div className="chats">

{people.map((person) => (
         <Chat
         name={person.name}
         message="No one has said anything yet." 
         timestamp="Now" 
         profilePic="" // https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg
         />
        ))}
    
      {/* <Chat
      name="Daniil"
      message="Wuff" 
      timestamp="6 mins ago" 
      profilePic="https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg"
      />
      <Chat
      name="James"
      message="Bork" 
      timestamp="1 hr ago" 
      profilePic="https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg"/>
      <Chat
      name="Bennett"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://i.pinimg.com/originals/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg"/> */}
  </div>;
};

export default Chats;
