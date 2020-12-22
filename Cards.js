import React,{useState} from 'react'
import TinderCard from 'react-tinder-card';
import "./Cards.css";
//import axios from "./axios";

function Cards() {
    const [people] = useState([
        {
            name: "Pavan",
            imgUrl: "images/Pavan.jpg"
        },
        {
            name: "Sai Vipul Mohan",
            imgUrl: "images/Vipul.jpg"
        },
        {
            name: "Gurunath",
            imgUrl: "images/gurunath.jpg"
        },
        {
            name: "Vinay Kumar",
            imgUrl: "images/Vinay_kumar.jpg"
        },
        {
            name: "Pavan",
            imgUrl: "images/Pavan.jpg"
        },
        {
            name: "Sai Vipul Mohan",
            imgUrl: "images/Vipul.jpg"
        },
        {
            name: "Gurunath",
            imgUrl: "images/gurunath.jpg"
        },
        {
            name: "Vinay Kumar",
            imgUrl: "images/Vinay_kumar.jpg"
        }
    ]);

    // useEffect(() => {
    //     async function fetchData()
    //     {
    //         const req = await axios.get('/tinder/cards');

    //         setPeople(req.data);
    //     }

    //     fetchData();
    // }, []);

    const swiped = (direction,nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outofFrame = (name) => {
        console.log(name + " left the screen");
    };

    return (
        <div className="Cards">
            <div className="TinderCards_Container">
                {people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outofFrame(person.name)}
                    >
                        <div style={ {backgroundImage: `url(${person.imgUrl})` } }
                           className="card" >
                               <h1>{person.name}</h1>
                        </div> 
                    </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default Cards
