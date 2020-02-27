import React from "react"
import MenuList from "./menu";
import Logo from "./logo";


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // modify the state, this will automatically recall render() below.
    this.setState((prevState) => {
      return { animate: !prevState.animate }
    });
  }
  render(){
    let animationClasses = (this.state.animate ? ' open': '');
    return (
             <header className="nav">
               <div className="nav__holder nav--sticky">
                 <nav className="navbar navbar-expand-lg" id="se-navbar">
                   <div className="container">
                    <Logo/>
                     <button
                       className="nav-icon-toggle navbar-toggler"
                       data-toggle="collapse"
                       data-target="#se-nav"
                       aria-controls="se-nav"
                       aria-expanded="true"
                       aria-label="Toggle navigation"
                       onClick={this.handleClick}
                     >
                       <span className="nav-icon-toggle__box">
                         <span className="nav-icon-toggle__inner"></span>
                       </span>
                     </button>
                     <div className={`navbar-collapse collapse show ${animationClasses}`} id="se-nav">
                         <MenuList />
                       </div>
                   </div>
                 </nav>
               </div>
             </header>
    );
  }

}