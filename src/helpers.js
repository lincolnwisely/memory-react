// Fischer-Yates shuffle algorithm <3
export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

// export function addProps(array, object) {
//   for (i = 0; i < array.length; i++) {
//     object
//   }

//   array.forEach(function() {

//   })
// }
// export function getData(query) {
//   fetch("https://api.unsplash.com/search/photos/?query=" + query, {
//     method: "GET",
//     headers: {
//       Authorization:
//         "Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a"
//     }
//   }).then(
//     response => {
//       if (response.ok) {
//         response.json().then(data => {
//           let hits = data.results;

//           // Duplicate array before passing to state.
//           hits = hits.reduce((res, current, index, array) => {
//             return res.concat([current, current]);
//           }, []);

//           shuffle(hits);

//           // this({ hits });

//           console.log("hits", hits);
//         });
//       } else if (response.status === 401) {
//         alert("Oops! You are not authorized.");
//       }
//     },
//     function(e) {
//       alert("Error submitting form!");
//     }
//   );
// }
