const data = {
  postLego (legoToSave) {
    fetch("http://localhost:8088/legos", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
    
    })
  }
  
  // deleteLego (legoId) {
  //   fetch(`http://localhost:8088/legos/${legoId}`, {
  //   method: "DELETE",
  //   headers: {
  //       "Content-Type": "application/json"
  //   }
  //   })
  // }
};

// data.deleteLego(2);
// data.deleteLego(3);
const Colordata = {
  postLego (Colorstosave) {
    fetch("http://localhost:8088/Colors", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(Colorstosave)
    
    })
  }};