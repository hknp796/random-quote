import "./style.css";
import axios from "axios";
import React,{ useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import fontawesome from '@fortawesome/fontawesome';
export default function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetchQuote();
  }, []);
  const fetchQuote = () => {
    axios.get("https://api.quotable.io/random").then((response) => {
      console.log(response.data);
      setState(response.data);
    });
  };
const uri= encodeURIComponent(state.content + state.author)
  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left"> </i>
        <span id="text">{state.content}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{state.author}</span>
      </div>
      <div className="buttons">
        <a
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=` + uri
          
      }
          className="button"
          id="tweet-quote"
          title="Tweet this quote!"
          target="_top"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <button onClick={fetchQuote} className="button" id="new-quote">
          New quote
        </button>
      </div>
    </div>
  );
}
