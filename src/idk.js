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