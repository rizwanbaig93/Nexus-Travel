import { ReactDOM } from "react";
import { ReactComponent } from "react";
const Video = (props) => {
    return (
      <video className="video" autoPlay muted loop>
        <source src={props.videoUrl}  type={props.type} />
      </video>
     );
  } 
  
  
  const  Message = (props) => {
      return (
          <p> {props.message }</p>
      )
  }
  
  
  const Menu = (props) => {
     
    return (
        
      <ul className="nav">
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    
    )
          
  }
   
   const Title = (props) => {
     return (
       <h1 className="text">{props.title}</h1>
     )
   };
  
  
  // eslint-disable-next-line no-undef
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        videoUrl: "http://thenewcode.com/assets/videos/fashion.mp4",
        type: "video/mp4"
      }
    }
    
    render(){
      return (
        <div>
          <Menu />
           <Title title="Women & Men Collection" />
              <Video className="video" videoUrl = {this.state.videoUrl} type =   {this.state.type}/>
          <div className="container">
            <div className="row" style={{marginTop :"60px"}}>
              <div className="col-md-6">
                <p className="text-center text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae earum inventore quo unde, tempora a laudantium assumenda quis minus praesentium rerum eaque itaque recusandae natus dicta iusto non aperiam.
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-center text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae earum inventore quo unde, tempora a laudantium assumenda quis minus praesentium rerum eaque itaque recusandae natus dicta iusto non aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>
       
       )
    }
  }
  
  
  ReactDOM.render(<App />, document.getElementById("app"));
  
   