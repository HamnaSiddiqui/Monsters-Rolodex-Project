// import { Component } from "react";
import "./card.styles.css";
import './card.styles.css';

const Card = ({monster}) => {
    const {name, email, id} = monster;
    return(
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


// converted below class Component into functional Component 

// class Card extends Component {
//     render(){
//         const {name, email, id} = this.props.monster;
//         return(
//             <div className="card-container" key={id}>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;
