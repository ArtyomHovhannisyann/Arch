import React,{useEffect, useState} from "react"; 
import { Link } from "react-router-dom"; 
import "../../css/Header/header.css";

export default function Header({ setShowMenu }) {
  const [headerState, setHeaderState] = useState(``);

  const scrollEventForHeader = ()=>{
    setHeaderState("header-with-bg")
    if (window.scrollY == 0) {
      setHeaderState("")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll",scrollEventForHeader)
    return () => {
       window.removeEventListener("scroll",scrollEventForHeader)
    }
    
    
  }, []);
  return ( 
  <div className={`header ${headerState}`}   >
    <div
      className="menu-icon menu-black-icon"
      onClick={() => setShowMenu(true)}
    ></div>
    <div className="header-logo team-header-logo">
      <Link to="/home">
        <h3>Anarch</h3>
      </Link>
    </div>
  </div>
    );
  }
  