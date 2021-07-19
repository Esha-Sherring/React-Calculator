
import { Component } from 'react';
import './App.css';
import KeyPadComponent from './components/KeyPadComponent';
import ResultComponent from './components/ResultComponent';

class App extends Component {

  constructor(){
    super();


    this.state= {
      result:""
    }
  }

  onClick = button =>{
      if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
  }

  calculate = () =>
  {
     let checkr=" ";
     if(this.state.result.includes('--'))
       checkr = this.state.result.replace('--','+')
       else{
         checkr = this.state.result;
       }

       try{
         this.setState({
            // eslint-disable-next-line
           result: eval(checkr)
         })

       }catch(err)
       {
          this.setState({
                result: "error"
            })
       }

  }

  reset = () =>{
    this.setState({
      result:""
    })
  }
backspace = () => {
        this.setState({
            result: this.state.result.slice(0,-1)
        })
    };
 
  render(){
    return(
      <div className="calculator-body">
         <h1 style={{textAlign:"center"}}>Simple Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
      </div>
    )
  }



}

export default App;
