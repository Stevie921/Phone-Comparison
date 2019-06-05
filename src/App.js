import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
   super(props);
    this.state = {
      pixel: "",
      iphone: "",
      galaxy: "",
      P30: "",
      select: ""
    }
}

 componentDidMount(){
   this.setState({
    pixel: document.getElementById("pixel"),
    iphone: document.getElementById("iphone"),
    galaxy: document.getElementById("galaxy"),
    P30: document.getElementById("P30"),
    select: document.getElementById("select")
   });
 }

 render(){
    return(
     <div>
      <h1>Smartphone Comparison</h1>
      <Phones pixel={this.state.pixel} iphone={this.state.iphone} galaxy={this.state.galaxy} 
      P30={this.state.P30} select={this.state.select}/>
     </div>
    )
  }
}

class Phones extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pixel_compared: false,
      iphone_compared: false,
      galaxy_compared: false,
      P30_compared: false
    }
  }

  handleClick = this.handleClick.bind(this);
  handleSelect = this.handleSelect.bind(this);
  handleRemove = this.handleRemove.bind(this);
  handleReset = this.handleReset.bind(this);

//ADDS CLICKED PHONE TO COMPARISON SECTION IF NOT ALREADY PRESENT
 handleClick(e){
   let compare = document.getElementById("comparison");
   switch(e.target.id){
    case "one":
    compare.appendChild(this.props.pixel);
    this.setState({pixel_compared: true});
    break;
    case "two":
    compare.appendChild(this.props.iphone);
    this.setState({iphone_compared: true});
    break;
    case "three":
    compare.appendChild(this.props.galaxy);
    this.setState({galaxy_compared: true});
    break;
    case "four":
    compare.appendChild(this.props.P30);
    this.setState({P30_compared: true});
    break;
    default:
    return;
   }
   //SHOW SPEC SELECTION
   this.props.select.style.display = 'block';
}

//HIGHLIGHTS THE SELECTED SPECIFICATION TO COMPARE
 handleSelect(){
  let select = document.getElementsByTagName("select")[0];
  let spans = document.getElementsByTagName("span");
  for(let i = 0; i < spans.length; i += 2){
   if(spans[i].innerText === select.value + ":"){
     if(spans[i].parentElement.classList.contains("highlight")){
      spans[i].parentElement.classList.remove("highlight");
     } else {
      spans[i].parentElement.classList.add("highlight");
     }
    }
   }
   select.selectedIndex = 0;
  }

//REMOVES THE SELECTED PHONE FROM COMPARISON
handleRemove(e){
   let phone_grid = document.getElementById("phone-grid");
   switch(e.target.id){
    case "remove_pixel":
    if(this.state.pixel_compared){
     phone_grid.appendChild(this.props.pixel);
     this.setState({pixel_compared: false});
    }
    break;
    case "remove_iphone":
    if(this.state.iphone_compared){
     phone_grid.appendChild(this.props.iphone);
     this.setState({iphone_compared: false});
    }
    break;
    case "remove_galaxy":
    if(this.state.galaxy_compared){
     phone_grid.appendChild(this.props.galaxy);
     this.setState({iphone_compared: false});
    }
    break;
    case "remove_P30":
    if(this.state.P30_compared){
     phone_grid.appendChild(this.props.P30);
     this.setState({P30_compared: false});
    }
    break;
    default:
    return;
   }
   let comparison = document.getElementById("comparison");
   if(comparison.innerHTML === ""){
    this.props.select.style.display = "none";
   }
  }

//RESET TO DEFAULT
  handleReset(){
   let comparison = document.getElementById("comparison");
   let phone_grid = document.getElementById("phone-grid");
   this.props.select.style.display = "none";
   this.setState({
      pixel_compared: false,
      iphone_compared: false,
      galaxy_compared: false,
      P30_compared: false
   });
    if(this.state.pixel_compared){phone_grid.appendChild(this.props.pixel);} 
    if(this.state.iphone_compared){phone_grid.appendChild(this.props.iphone);}
    if(this.state.galaxy_compared){phone_grid.appendChild(this.props.galaxy);} 
    if(this.state.P30_compared){phone_grid.appendChild(this.props.P30);}
    comparison.innerHTML = "";
  }
 
render(){
   return(
    <div>
     <div id="phone-grid">
       <div id="pixel" className="phone">
        <i className="far fa-times-circle" id="remove_pixel" onClick={this.handleRemove}></i>
        <h3>Google Pixel 3</h3>
        <img src="https://bit.ly/2YLJBlB" alt="google pixel 3"/>
         <p><span>Price:</span><span>£399.99</span></p>
         <p><span>OS:</span><span>Android 9</span></p>
         <p><span>Camera:</span><span>12.2 MP</span></p>
         <p><span>Display:</span><span>5.5"</span></p>
         <p><span>Storage:</span><span>32/128 GB</span></p>
         <div className="overlay"><button id="one" onClick={this.handleClick}>Compare</button></div>
      </div>

      <div id="iphone" className="phone">
        <i className="far fa-times-circle" id="remove_iphone" onClick={this.handleRemove}></i>
        <h3>Apple iPhone X</h3>
        <img src="https://bit.ly/2GbSDPe" alt="Apple iPhone X"/>
        <p><span>Price:</span><span>£499.99</span></p>
        <p><span>OS:</span><span>iOS 11</span></p>
        <p><span>Camera:</span><span>12 MP</span></p>
        <p><span>Display:</span><span>5.8"</span></p>
        <p><span>Storage:</span><span>64/256 GB</span></p>
        <div className="overlay"><button id="two" onClick={this.handleClick}>Compare</button></div>
       </div>

       <div id="galaxy" className="phone">
        <i className="far fa-times-circle" id="remove_galaxy" onClick={this.handleRemove}></i>
        <h3>Samsung Galaxy S10</h3>
        <img src="https://bit.ly/2HBgWK9" alt="Samsung Galaxy S10"/>
        <p><span>Price:</span><span>£579.99</span></p>
        <p><span>OS:</span><span>Android 9</span></p>
        <p><span>Camera:</span><span>12 MP</span></p>
        <p><span>Display:</span><span>6.1"</span></p>
        <p><span>Storage:</span><span>128/512 GB</span></p>
        <div className="overlay"><button id="three" onClick={this.handleClick}>Compare</button></div>
       </div>

       <div id="P30" className="phone">
        <i className="far fa-times-circle" id="remove_P30" onClick={this.handleRemove}></i>
        <h3>Huawei P30 Pro</h3>
        <img src="https://bit.ly/2HBIvTF" alt="Huawei P30 Pro"/>
        <p><span>Price:</span><span>£899.99</span></p>
        <p><span>OS:</span><span>Android 9</span></p>
        <p><span>Camera:</span><span>40 MP</span></p>
        <p><span>Display:</span><span>6.47"</span></p>
        <p><span>Storage:</span><span>128/512 GB</span></p>
        <div className="overlay"><button id="four" onClick={this.handleClick}>Compare</button></div>
       </div>

     </div>
     
     <div id="select">
      <h2>Select which specification you want to compare</h2>
      <select onChange={this.handleSelect}>
        <option value="Selected">Select Spec...</option>
        <option value="Price">Price</option>
        <option value="OS">OS</option>
        <option value="Camera">Camera</option>
        <option value="Display">Display</option>
        <option value="Storage">Storage</option>
      </select>
      <h4>Select again to remove highlighting</h4>
      <button id="reset" onClick={this.handleReset}>Reset</button>
    </div>
     
      <div id="comparison"></div>
   </div>
    )
  }
}

export default App;





//FIRST SAVE
// import React from 'react';
// import './App.css';

// class App extends React.Component{
//   constructor(props){
//     super(props);
//   }
  
//   render(){
//   return(
//      <div>
//       <h1>Smartphone Comparison</h1>
//       <Phones/>
//      </div>
//     )
//   }
// }

// class Phones extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       pixel_compared: false,
//       iphone_compared: false,
//       galaxy_compared: false,
//       P30_compared: false
//     }
//   }

//   handleClick = this.handleClick.bind(this);
//   handleSelect = this.handleSelect.bind(this);
//   handleRemove = this.handleRemove.bind(this);
//   handleReset = this.handleReset.bind(this);

// //ADDS CLICKED PHONE TO COMPARISON SECTION IF NOT ALREADY PRESENT
//  handleClick(e){
//    let compare = document.getElementById("comparison");
//    switch(e.target.id){
//     case "one":
//     let pixel = document.getElementById("pixel");
//     compare.appendChild(pixel);
//     this.setState({pixel_compared: true});
//     break;
//     case "two":
//     let iphone = document.getElementById("iphone");
//     compare.appendChild(iphone);
//     this.setState({iphone_compared: true});
//     break;
//     case "three":
//     let galaxy = document.getElementById("galaxy");
//     compare.appendChild(galaxy);
//     this.setState({galaxy_compared: true});
//     break;
//     case "four":
//     let P30 = document.getElementById("P30");
//     compare.appendChild(P30);
//     this.setState({P30_compared: true});
//     break;
//    }
//    //SHOW SPEC SELECTION
//    let select = document.getElementById("select");
//    select.style.display = 'block';
// }

// //HIGHLIGHTS THE SELECTED SPECIFICATION TO COMPARE
//  handleSelect(){
//   let select = document.getElementsByTagName("select")[0];
//   let spans = document.getElementsByTagName("span");
//   for(let i = 0; i < spans.length; i += 2){
//    if(spans[i].innerText === select.value + ":"){
//      if(spans[i].parentElement.classList.contains("highlight")){
//       spans[i].parentElement.classList.remove("highlight");
//      } else {
//       spans[i].parentElement.classList.add("highlight");
//      }
//     }
//    }
//    select.selectedIndex = 0;
//   }

// //REMOVES THE SELECTED PHONE FROM COMPARISON
// handleRemove(e){
//    let phone_grid = document.getElementById("phone-grid");
//    switch(e.target.id){
//     case "remove_pixel":
//     let pixel = document.getElementById("pixel");
//      if(this.state.pixel_compared){
//      phone_grid.appendChild(pixel);
//      this.setState({pixel_compared: false});
//     }
//     break;
//     case "remove_iphone":
//     let iphone = document.getElementById("iphone");
//      if(this.state.iphone_compared){
//      phone_grid.appendChild(iphone);
//      this.setState({iphone_compared: false});
//     }
//     break;
//     case "remove_galaxy":
//     let galaxy = document.getElementById("galaxy");
//      if(this.state.galaxy_compared){
//      phone_grid.appendChild(galaxy);
//      this.setState({iphone_compared: false});
//     }
//     break;
//     case "remove_P30":
//     let P30 = document.getElementById("P30");
//      if(this.state.P30_compared){
//      phone_grid.appendChild(P30);
//      this.setState({P30_compared: false});
//     }
//     break;
//    }
//    let comparison = document.getElementById("comparison");
//    let select = document.getElementById("select");
//    if(comparison.innerHTML === ""){
//     select.style.display = "none";
//    }
//   }

// //RESET TO DEFAULT
//   handleReset(){
//    let pixel = document.getElementById("pixel");
//    let iphone = document.getElementById("iphone");
//    let galaxy = document.getElementById("galaxy");
//    let P30 = document.getElementById("P30");
//    let comparison = document.getElementById("comparison");
//    let select = document.getElementById("select");
//    let phone_grid = document.getElementById("phone-grid");
//    select.style.display = "none";
//    this.setState({
//       pixel_compared: false,
//       iphone_compared: false,
//       galaxy_compared: false,
//       P30_compared: false
//    });
//     if(this.state.pixel_compared){phone_grid.appendChild(pixel);} 
//     if(this.state.iphone_compared){phone_grid.appendChild(iphone);}
//     if(this.state.galaxy_compared){phone_grid.appendChild(galaxy);} 
//     if(this.state.P30_compared){phone_grid.appendChild(P30);}
//     comparison.innerHTML = "";
//   }
 
// render(){
//    return(
//     <div>
//      <div id="phone-grid">
//        <div id="pixel" className="phone">
//         <i className="far fa-times-circle" id="remove_pixel" onClick={this.handleRemove}></i>
//         <h3>Google Pixel 3</h3>
//         <img src="https://bit.ly/2YLJBlB"/>
//          <p><span>Price:</span><span>£399.99</span></p>
//          <p><span>OS:</span><span>Android 9</span></p>
//          <p><span>Camera:</span><span>12.2 MP</span></p>
//          <p><span>Display:</span><span>5.5"</span></p>
//          <p><span>Storage:</span><span>32/128 GB</span></p>
//          <div className="overlay"><button id="one" onClick={this.handleClick}>Compare</button></div>
//       </div>

//       <div id="iphone" className="phone">
//         <i className="far fa-times-circle" id="remove_iphone" onClick={this.handleRemove}></i>
//         <h3>Apple iPhone X</h3>
//         <img src="https://bit.ly/2GbSDPe"/>
//         <p><span>Price:</span><span>£499.99</span></p>
//         <p><span>OS:</span><span>iOS 11</span></p>
//         <p><span>Camera:</span><span>12 MP</span></p>
//         <p><span>Display:</span><span>5.8"</span></p>
//         <p><span>Storage:</span><span>64/256 GB</span></p>
//         <div className="overlay"><button id="two" onClick={this.handleClick}>Compare</button></div>
//        </div>

//        <div id="galaxy" className="phone">
//         <i className="far fa-times-circle" id="remove_galaxy" onClick={this.handleRemove}></i>
//         <h3>Samsung Galaxy S10</h3>
//         <img src="https://bit.ly/2HBgWK9"/>
//         <p><span>Price:</span><span>£579.99</span></p>
//         <p><span>OS:</span><span>Android 9</span></p>
//         <p><span>Camera:</span><span>12 MP</span></p>
//         <p><span>Display:</span><span>6.1"</span></p>
//         <p><span>Storage:</span><span>128/512 GB</span></p>
//         <div className="overlay"><button id="three" onClick={this.handleClick}>Compare</button></div>
//        </div>

//        <div id="P30" className="phone">
//         <i className="far fa-times-circle" id="remove_P30" onClick={this.handleRemove}></i>
//         <h3>Huawei P30 Pro</h3>
//         <img src="https://bit.ly/2HBIvTF"/>
//         <p><span>Price:</span><span>£899.99</span></p>
//         <p><span>OS:</span><span>Android 9</span></p>
//         <p><span>Camera:</span><span>40 MP</span></p>
//         <p><span>Display:</span><span>6.47"</span></p>
//         <p><span>Storage:</span><span>128/512 GB</span></p>
//         <div className="overlay"><button id="four" onClick={this.handleClick}>Compare</button></div>
//        </div>

//      </div>
     
//      <div id="select">
//       <h2>Select which specification you want to compare</h2>
//       <select onChange={this.handleSelect}>
//         <option value="Selected">Select Spec...</option>
//         <option value="Price">Price</option>
//         <option value="OS">OS</option>
//         <option value="Camera">Camera</option>
//         <option value="Display">Display</option>
//         <option value="Storage">Storage</option>
//       </select>
//       <h4>Select again to remove highlighting</h4>
//       <button id="reset" onClick={this.handleReset}>Reset</button>
//     </div>
     
//       <div id="comparison"></div>
//    </div>
//     )
//   }
// }


// export default App;









