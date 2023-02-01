



  import "./App.css";
  import React from "react";
 import imag from "./imag.webp"
  
  class App extends React.Component {

  
    //  const [Person, setPerson] = useState([{fullName='Fedi Touzri'} ,{bio='I love anime and im so passionate about it '} , {imgSrc={fedi}} ,{profession='senior web developer'} ,{bool=false}]);
  
    constructor(props) {
      super(props);
      this.state = {
        fullName:"Hamtro",
        bio: "Hamtaro (Tottoko Hamutaro in Japan) is a children's anime series produced by TMS Entertainment and aired on TV Tokyo from July 7, 2000 to March 31, 2006. It is based on the children's book and manga series of the same name by Ritsuko Kawai and published by Shogakukan. It has also been translated into numerous languages and aired in other countries (albeit not covering the entire series in most dubs).The series follows the adventures of a young hamster named Hamtaro and his friends, the Ham-Hams, who meet up in a clubhouse built by their leader, Boss.",
        imgSrc: imag, 
        profession: "Hamtaro the little hamster lives with his mistress, Laura. Very curious and very sociable, he has lots of friends with whom he shares adventures full of twists and turns. Together they form the Ham-Ham club. ",
        bool: false,
        counter: 0,
      };
    }
  
    componentDidMount = () => {
      setInterval(() => {
        this.setState((prevState) => ({
          counter: prevState.counter + 1,
        }));
      }, 1000);
    };
       // clearInterval = () => {
         //   this.clearInterval(this.counter);
        //   this.counter = 0;
        // };
    
      
    toggle() 
    {
      this.setState({ bool: !this.state.bool });
      if (!this.state.bool) { 
        this.setState({ counter: 0 });
      }
    }
  
    render()
     {
      return (
        <div className="App">
          {this.state.bool ? (
            <div>
              <h1 style={{ color: " orange" }}>
                {" "}
                This is Ham-Ham Gang main character{" "}
              </h1>
              <h2 style={{ color:  "orange"}}> Hamtaro Walker's bio</h2>
              <h3 style={{ color: " grey" }}>
                This is {this.state.fullName}. {this.state.bio} 
              </h3>
              <img src= {this.state.imgSrc} 
                width="400px" 
                height="400px"
                       alt="profile image" 
              />
              <h2 style={{ color: "orange" }}>Profession</h2>
              <h3 style={{ color: "grey" }}>{this.state.profession}</h3>
            </div>
          ) : null}
          <br /> <br />
          {this.state.bool ? (
            <div>
              {this.state.counter}
              <br />
              <br />
              <button onClick={() => this.toggle()}>Hide</button>
            </div>
          ) : (
            <button onClick={() => this.toggle()}>Show</button>
          )}
          <br />
        </div>
      );
    }
  }
  export default App;       
  
       