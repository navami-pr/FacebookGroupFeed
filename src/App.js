import React from 'react';
import './app.css';
import ShowList from './ShowList';
import { withRouter } from 'react-router-dom';
import { Button} from 'react-bootstrap';


class App extends React.Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
    this.state = {
      feeds: []
    };
  }
  routeChange() {
    let path = `/Form`;
    this.props.history.push(path);
  }

  componentDidMount() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId      : '1747983188680794',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.3'
      });
   
      var token = "EAAY1yA0I4FoBAGOq8EeZBSRjZAMZCRZA4u04fJncGr14Vu6eqjCRfiZBA41pd5jbk25ZApf6d6WQZCIutjnwDZA8SQpkbxDwYGmwsMpNWglhNDNvL3IVGvd8k8MfZBNXh6SDlxe4oyPtSt6G4ofF4QCjZCL5MhzTqmFl88SIDs3p3SQSnmPTkGNQJS5r5ZCcMi3MjBDsHrXBfI3iwZDZD";
      window.FB.api("/1389776634498901/feed?fields= link,name,message,story,full_picture,from,source", response  =>  {
          if (response && !response.error) {
            console.log(response)
            this.setState({
              feeds: response["data"]
            });
          }
        }, {access_token: token}
      );
    };
  }
  // const MainPage= () => (
  //   <div>Main Page</div>
  // );
  render(){
    const {feeds} = this.state
    return (
      <div>
        <div className="fb-header-base">
        </div>
        <div className="fb-header">
          <div id="img1" className="fb-header"><img src="facebook1.png" className = "logo" alt=""/></div>
        </div>hellow
        <div className="center">
        <ShowList items={feeds}/>
      </div> 
      <Button color="primary" className="px-4" onClick={this.routeChange}>Login</Button>
      </div> 
    );
  }
}


export default App;
