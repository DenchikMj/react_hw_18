import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Post from './components/posts/Post';
import Contacts from './components/contacts/Contacts';
import Photos from './components/photos/Photos';
import HomePage from './components/home/HomePage';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const CHEWBACCA_IMAGE = "https://static.wikia.nocookie.net/rustarwars/images/7/73/Chewbaccaheadshot.jpg?fit=scale";
const CHEWBACCA_POST_IMAGE = "https://snob.ru/i/indoc/f1/blog_entry_0500652001450338120.jpg?fit=scale";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <Link className="linc-style-menu" to="/">Home</Link>
              </li>
              <li>
                <Link className="linc-style-menu" to="/post">Posts</Link>
              </li>
              <li>
                <Link className="linc-style-menu" to="/photos">Photos</Link>
              </li>
              <li>
                <Link className="linc-style-menu" to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/post">
              <div className="post-container">
                <Post author={{
                  name: "Anakin Skywalker",
                  photo: ANAKIN_IMAGE,
                  nickname: "@dart_vader"
                }}
                  content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
                  image={RAY_IMAGE}
                  date={"26 февр."}
                />
                <Post author={{
                  name: "Chewbacca ",
                  photo: CHEWBACCA_IMAGE,
                  nickname: "@chewbacca777"
                }}
                  content="We are not in Kansas... ?!"
                  image={CHEWBACCA_POST_IMAGE}
                  date={"27 февр."}
                />
              </div>
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
