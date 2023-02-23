// import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({className, placeholder, onChangehandler}) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangehandler}
    />
)

// converted below class Component into functional Component 

// class SearchBox extends Component{
//     render() {
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type="search"
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangehandler}
//             />
//         )
//     }
// }

export default SearchBox;