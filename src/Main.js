import logo from './images/youtube2.png'
import menu from './images/menu.png'
import searchbtn from './images/searchbtn.svg'
import React, {Component} from 'react';
import homeSvg from './images/home.svg';
import historySvg from './images/history.svg';
import serviceSvg from './images/service.svg';
import contactSvg from './images/contact.svg';
import appleIcon from './images/apple.jpeg';
import mkbhdIcon from './images/mkbhd.jpeg';
import mrbeastIcon from './images/mrbeast.jpeg';
import teslaIcon from './images/tesla.jpeg';
import showMoreIcon from './images/down.svg';
//Logo
function Logo(props){
  const logoPic = <img className="logo" src={logo} alt='logo'/>
  return logoPic;
}
//Menu button
function Menu(props){
  const burgurBtn = () => {
    console.log('Click');
    const navElement = document.getElementById("nav");
    // Toggle the menu
    navElement.classList.toggle("show-menu");
  }

  const menuBtn = <img className="menu" src={menu} alt='logo' onClick={() => burgurBtn()}/>;
  return menuBtn;
}
//Search Button
function SearchBtn(props){
  const menuBtn = <img className="searchbtn" src={searchbtn} alt='searchbtn'/>;
  return menuBtn;
}

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  //Calling the API
  componentDidMount(){
    fetch('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json')
    .then((res) => res.json())
    .then((json) =>{
      this.setState({
        isLoaded: true,
        items:json,
      })
    })
  }
  
  render(){
    var{isLoaded, items} = this.state;
    //Checking if the API is loaded
    if(!isLoaded){
      return <div>Loading..</div>
    }
    else{
      return (
        <div>
          <div className="header">
            <div className='left'>
              <Menu className="burgur-btn" />
              <div className='highlight'></div>
              <Logo />
            </div>
            <div className='mid'>
              <input className='search' placeholder="Search"></input>
              <button className='srchbtn'>
                <div className='srchbtn-logo'>
                  <SearchBtn />
                </div>
              </button>
            </div>
            <div className='right'>
              <div className='search-btn'>
                <div className='srchbtn-logo'>
                  <SearchBtn />
                </div>
              </div>
              <div className='profile'></div>
            </div>
          </div>
          <div className="main">
            <nav id='nav'>
              <ul>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={homeSvg} alt="home-icon"></img>
                  </div>
                  <p>Home</p>
                </li></a>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={historySvg} alt="home-icon"></img>
                  </div>
                  <p>History</p>
                </li></a>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={serviceSvg} alt="home-icon"></img>
                  </div>
                  <p>Services</p>
                </li></a>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={contactSvg} alt="home-icon"></img>
                  </div>
                  <p>Contact</p>
                </li></a>
              </ul>
              <div className='line'></div>
              <h1>Subscriptions</h1>
              <ul className='subscribe'>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={appleIcon} alt="home-icon"></img>
                  </div>
                  <p>Apple</p>
                </li></a>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={mkbhdIcon} alt="home-icon"></img>
                  </div>
                  <p>Marques Brownlee</p>
                </li></a>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={mrbeastIcon} alt="home-icon"></img>
                  </div>
                  <p>Mr Beast</p>
                </li></a>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={teslaIcon} alt="home-icon"></img>
                  </div>
                  <p>Tesla</p>
                </li></a>
                <a href="home"><li>
                  <div className='icon'>
                    <img src={showMoreIcon} alt="home-icon"></img>
                  </div>
                  <p>Show more</p>
                </li></a>
              </ul>
            </nav>
            <div className="content">
              <div className="container-fluid">
                <div className="px-lg-5">
                  <div className="row">
                  {items.map(item => (
                    <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                      <div className="rounded shadow-sm">
                        <a href={item.videoUrl}><img src={item.thumbnailUrl} alt="" className="card-img-c"></img></a>
                        <div className='profile-pic'></div>
                        <div className="details">
                          <h5><a href={item.videoUrl} className="text-white title">{item.title}</a></h5>
                          <p className="small mb-0 author">{item.author}</p>
                        </div>
                      </div>
                    </div>
                  ))};
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default Main;
