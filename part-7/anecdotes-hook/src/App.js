import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import About from "./components/About";
import Anecdote from "./components/Anecdote";
import AnecdoteList from "./components/AnecdoteList";
import CreateNew from "./components/CreateNew";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Menu from "./components/Menu";

const App = () => {
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState("");
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: "1",
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: "2",
    },
  ]);

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  return (
    <Router>
      <h1>Software anecdotes {user && `(${user})`}</h1>
      <Menu user={user} />

      <p style={{ margin: "30px 0" }}>{notification}</p>

      <Switch>
        <Route path="/anecdotes/:id">
          <Anecdote anecdotes={anecdotes} />
        </Route>
        <Route path="/create">
          <CreateNew addNew={addNew} notify={setNotification} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login login={setUser} />
        </Route>
        <Route path="/users">
          {user ? "Show Private" : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
