// ES Modules syntax
import Unsplash, { toJson } from "unsplash-js";


const unsplash = new Unsplash({
  applicationId: "{70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a}",
  secret: "{2b7b2981c7b47e0e2084a751389827f01257c635ddfcd810663d8cb386f10853}",
  callbackUrl: "{http://localhost:3000/callback}"
});


unsplash.search.photos("dogs", 1)
  .then(toJson)
  .then(json => {
    console.log(json);
  });

  // unsplash.photos.getRandomPhoto({ username: "naoufal" })
  // .then(toJson)
  // .then(json => {
  //   // Your code
  // });



  // componentDidMount() {
  //   fetch('https://api.unsplash.com/photos/?client_id=' + unsplash.applicationId)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ imgs: data });
  //     })
  //     .catch(err => {
  //       console.log('Error happened during fetching!', err);
  //     });
  // }

// ----- START RANT
//IDK WHAT TO DO WIHT THIS BUT IT HAS TO BE SOMETHING RIGHT??? 
// function handleRequest(){
//   if(this.readyState == 4 && this.status == 200){ //Explain this in a bit.
//   console.log(JSON.parse(request.responseText));
//    }
// }

// var url;
// url = "https://api.unsplash.com/search/photos/?query=home"; //We are searching for the query home.
// var request = new XMLHttpRequest();
// request.onreadystatechange = handleRequest;
// request.open('GET',url,true);
// request.setRequestHeader('Authorization','Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a'); // Unique client ID.
// request.send();

// ----- END RAND 

let authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
  "write_likes",
  "read_collections",
  "write_collections"
]);

console.log(userAuthentication(code));
currentUser();
users();
photos();
collections();
stats();

function userAuthentication(code) {
  return unsplash.auth.userAuthentication(code)
    .then(toJson)
    .then(json => json.access_token);
}

function currentUser() {
  console.log("\nCurrent User");

  unsplash.currentUser.profile()
    .then(toJson)
    .then(json => {
      console.log('profile', json);
    });

  unsplash.currentUser.updateProfile({ location: "¯\_(ツ)_/¯" })
    .then(toJson)
    .then(json => {
      console.log('updateProfile', json);
    });
}

function users() {
  console.log("\nUsers")

  unsplash.users.profile('naoufal')
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.users.photos("naoufal")
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.users.likes("naoufal")
    .then(toJson)
    .then(json => {
      console.log(json);
     });
}

function photos() {
  console.log("\nPhotos");

  unsplash.photos.listPhotos(1, 10)
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.searchPhotos("bear", undefined, 1, 1)
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.getPhoto("kZ8dyUT0h30")
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.getRandomPhoto({ featured: true })
    .then(toJson)
    .then(json => {
      console.log(json.links.html);
    });

}

function categories() {
  console.log("\nCategories");

  unsplash.categories.listCategories()
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.categories.category(4)
    .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.categories.categoryPhotos(4, 1, 1)
    .then(toJson)
    .then(json => {
      console.log(json);
    });
}

function collections() {
  console.log("\nCollections");

   unsplash.collections.listCollections(1, 10)
     .then(toJson)
     .then(json => {
       console.log(json);
     });

   unsplash.collections.listCuratedCollections(1, 10)
     .then(toJson)
     .then(json => {
       console.log(json);
     });

   unsplash.collections.getCollection(151165)
     .then(toJson)
     .then(json => {
       console.log(json);
     });

   unsplash.collections.getCuratedCollection(94)
     .then(toJson)
     .then(json => {
       console.log(json);
     });


   unsplash.collections.getCollectionPhotos(151165)
     .then(toJson)
     .then(json => {
       console.log(json);
     });

   unsplash.collections.getCuratedCollectionPhotos(94)
     .then(toJson)
     .then(json => {
       console.log(json);
     });

   unsplash.collections.createCollection("Birds", "Wild birds from 'round the world", true)
     .then(toJson)
     .then(json => {
       console.log(json);
     });

}



class ImageContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    }
    // this._unSplash = this._unSplash.bind(this);
    // this._buildImages = this._buildImages.bind(this);
    // this._fetchdata = this._fetchdata.bind(this);

  }


  render() {
    return (
      <div style={flexStyle}>
        {/* {this._buildImages(doggos)} */}
        {/* {this._unSplash()} */}
        {/* {this._fetchdata()} */}
      </div>
    )
  }
  


  _fetchdata (query) {
    let url = `https://api.unsplash.com/search/photos/?query=` + query;
    fetch(url, {
      method: "GET",
      headers: {
        "Authorization" :'Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a'
      },
    }).then((res) => {
      if (res.ok) {
        // Convert response to Json
        res.json().then((data) => {

          // this.setState() => {
          //   data: data.results
          // };
          // data = data.results;
          console.log(p)
          // let mapImages = this.data.map((item, i) => {
          //   return (<Image className='img' src={ item.urls.small } uName={ item.user.name } uLink={ item.user.links.self } key={ item.id }/>);
          //   }
          // );
          // console.log(mapImages);
  
          return ;
          
        });
      } else if (res.status == 401) {
      alert("Oops! You are not authorized.");
      }
    }, function(e) {
      alert("Error submitting form!");
  });
  
  }


  _unSplash() {
    var _handleRequest = () => {
      if(this.readyState === 4 && this.status === 200){ //Explain this in a bit.
        var response = JSON.parse(request.responseText);
        var arr = [];
        // console.log(arr);
        // console.log(response.results);
        // return(<Image src={response.results[0].urls.thumb} />);
        for (var i = 0; i < response.results.length; i++) {
          arr.push(response.results[i]);
        }
        console.log(arr);


        this.setState({
          data: arr 
        });
        
        console.log(this.state.data);

        let mapImages = this.state.data.map((item, i) => {
          return (<Image src={ item.links.self } uName={ item.user.name } uLink={ item.user.links.self } key={ item.id }/>);
          }
        );
        console.log(mapImages);

        return mapImages;
        // return (<Image uName={ arr[i].user.name } uLink={ arr[i].user.links.self } key={arr[i].id}/>);
      }
    };

    let url = "https://api.unsplash.com/search/photos/?query=dog";
    var request = new XMLHttpRequest();
    request.onreadystatechange = _handleRequest;
    request.open('GET',url,true);
    request.setRequestHeader('Authorization','Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a'); // Unique client ID.
    request.send();
  }




  //id, links.self, user.links.self, user.name 

  _buildImages(array) {

    let mapImages = array.map((item, i) => {
      return (<Image src={ item.src } credit={ item.author } link={ item.link } key={i}/>);
      }
    );
    return mapImages;
  }
}

// Need to pass the query (defined by a click event on input)
// Pass query to the fetch method

// The fetching component should be a common parent component for all these components.
// The loading indicator could be shown in the common parent component from the first criteria.
// The componentDidMount() lifecycle method is the best place to fetch data. 


// Parent container (need to store an array of data from fetch function)
  
  // Topics component
      // input (onChange event determines query value, and click event will call the fetch method, passing along the query)
      // 
      // (future feature:)  pre-defined buttons (click event determines query value... will need to refactor)

  // Image container component 
      // images (data array item : src, author name author src, unsplash)