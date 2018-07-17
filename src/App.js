import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'idk.js';

const imgStyle = {
  width: '100%',
  maxWidth: '300px'
};

const flexStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'space-around',
  margin: '0 auto',
  width: '80%'
}

const flexCol = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px'
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this._unSplash = this._unSplash.bind(this);
  }
  render() {
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ImageContainer />
        {this._unSplash()}
      </div>
    );
  }

  _unSplash() {
    var _handleRequest = function(){
      if(this.readyState == 4 && this.status == 200){ //Explain this in a bit.
        var response = JSON.parse(request.responseText);

        // return(<Image src={response.results[0].urls.thumb} />);
        for (var i = 0; i < response.results.length; i++) {
          console.log(response.results[i].urls.thumb);
        }
      }
    }

    let url = "https://api.unsplash.com/search/photos/?query=dog"; //We are searching for the query home.
    var request = new XMLHttpRequest();
    request.onreadystatechange = _handleRequest;
    request.open('GET',url,true);
    request.setRequestHeader('Authorization','Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a'); // Unique client ID.
    request.send();
  }
}

class Image extends Component {
  render() {
    return (
      <div className="doggie" style={flexCol}>
        <img style={imgStyle} src={this.props.src}/>
        <a href={this.props.link}>{this.props.credit}</a>
      </div>
    );    
  }
}

class ImageContainer extends Component {
  constructor(props, context) {
    super(props, context);
    // this._unSplash = this._unSplash.bind(this);

    this._buildImages = this._buildImages.bind(this);
  }
  render() {
    return (
      <div style={flexStyle}>
        {this._buildImages(doggos)}
      </div>
    )
  }

  // _unSplash() {
  //   var _handleRequest = function(){
  //     if(this.readyState == 4 && this.status == 200){ //Explain this in a bit.
  //       var response = JSON.parse(request.responseText);
  //       var arr = []
  //       // return(<Image src={response.results[0].urls.thumb} />);
  //       for (var i = 0; i < response.results.length; i++) {
  //         arr.push (response.results[i].urls.thumb)
  //         console.log(arr);
  //       }
  //     }
  //   }

  //   let url = "https://api.unsplash.com/search/photos/?query=dog"; //We are searching for the query home.
  //   var request = new XMLHttpRequest();
  //   request.onreadystatechange = _handleRequest;
  //   request.open('GET',url,true);
  //   request.setRequestHeader('Authorization','Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a'); // Unique client ID.
  //   request.send();
  // }


  _buildImages(array) {

    let mapImages = array.map((item, i) => {
      return (<Image src={ item.src } credit={ item.author } link={ item.link } key={i}/>);
      }
    );
    return mapImages;
  }
}

const doggos = [
  {
    src: 'https://images.unsplash.com/photo-1424709746721-b8fd0ff52499?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91e56be51d66e3d485f758a5643c3146&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }, 
  {
    src: 'https://images.unsplash.com/photo-1424709746721-b8fd0ff52499?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91e56be51d66e3d485f758a5643c3146&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }, 
  {
    src: 'https://images.unsplash.com/photo-1506242395783-cec2bda110e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b73810d74416ad71b7a67db0609e5f8c&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }, 
  {
    src: 'https://images.unsplash.com/photo-1506242395783-cec2bda110e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b73810d74416ad71b7a67db0609e5f8c&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }, 
  {
    src: 'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-0.3.5&s=ddb5cf323c391132192a0522fb0a5667&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }, 
  {
    src: 'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-0.3.5&s=ddb5cf323c391132192a0522fb0a5667&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }, 
  {
    src: 'https://images.unsplash.com/photo-1446231855385-1d4b0f025248?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b225b82aed59ec4163fffedc145f33d6&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }, 
  {
    src: 'https://images.unsplash.com/photo-1446231855385-1d4b0f025248?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b225b82aed59ec4163fffedc145f33d6&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }, 
  {
    src: 'https://images.unsplash.com/photo-1436658040953-a21ef6596481?ixlib=rb-0.3.5&s=30c7f4b8ffabb8e744eaefc4456e0de8&auto=format&fit=crop&w=1506&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1436658040953-a21ef6596481?ixlib=rb-0.3.5&s=30c7f4b8ffabb8e744eaefc4456e0de8&auto=format&fit=crop&w=1506&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?ixlib=rb-0.3.5&s=523e719652269f6638dcda3e8688d2f9&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?ixlib=rb-0.3.5&s=523e719652269f6638dcda3e8688d2f9&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=1502&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=1502&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-0.3.5&s=3130ab5f137e960a619495d95fcc9987&auto=format&fit=crop&w=1502&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-0.3.5&s=3130ab5f137e960a619495d95fcc9987&auto=format&fit=crop&w=1502&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32b62c3f1149e3b00c30c78357ab4918&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32b62c3f1149e3b00c30c78357ab4918&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77cd76f9b6272c88063bfc41842e2f6e&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  },
  {
    src: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77cd76f9b6272c88063bfc41842e2f6e&auto=format&fit=crop&w=1500&q=80', 
    author: 'Unsplash',
    link: 'https://unsplash.com'
  }
];



console.log(doggos.length);

export default App;
