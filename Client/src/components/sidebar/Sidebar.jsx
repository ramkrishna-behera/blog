import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const PF = "http://localhost:5000/images/"

  const [author, setAuthor] = useState([]);
  const [cats, setCats] = useState([]);

    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
      };
      getCats();

      const getAuthor = async () => {
        const res = await axios.get("/users");
        setAuthor(res.data);
      };
      getAuthor();
      console.log(author);

    }, []);

    
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">AUTHORS</span>
        <img
          src=""
          alt=""
        />
        <ul className="sidebarList">
          {author.map((u) => (
              <Link to={`/?user=${u.username}`} className="link">
                <li className="sidebarListItem">
                  <div className="profileContainer">
                    <img className="topImg" src={u.profilePic ? PF + u.profilePic : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="" />
                    <span className="usernameHolder">{u.username}</span>
                  </div>
                </li>
              </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
