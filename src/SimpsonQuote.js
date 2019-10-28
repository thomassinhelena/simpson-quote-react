import React from 'react';
import './SimpsonQuote.css'
import axios from 'axios';

class SimpsonQuote extends React.Component{
  constructor(){
    super();
    this.state = {
      character: null,
      image: null,
      quote: null,
    };
  }
  
  componentDidMount = () =>{
    this.SimpsonsQuotes();
  }

  SimpsonsQuotes = () => {
    const url = 'https://quests.wilders.dev/simpsons-quotes/quotes'
    axios.get(url)
    .then((sim) => {
      console.log(sim)
      this.setState({
        character : sim.data[0].character,
        image: sim.data[0].image,
        quote: sim.data[0].quote,
      })
    })
  }

  render(){
    return(
      <div>
        <figure className="QuoteCard">
          <div>
            <img src={this.state.image} />   
          </div> 
          <div>
            <p>{this.state.quote}</p> 
            <p>{this.state.character}</p>
          </div>
          <button id="button" onClick={this.SimpsonsQuotes}>Change Simpson Quote</button>
        </figure>
        
      </div>
    )
  }
}
export default SimpsonQuote;