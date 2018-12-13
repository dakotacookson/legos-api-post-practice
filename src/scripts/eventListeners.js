const eventListeners = {
  handleFormSubmission () {
    // Get input values from form
    const creator = document.querySelector("#lego__creator").value;
    const name = document.querySelector("#lego__name").value;
    const color = document.querySelector("#lego__color").value;
    const shape = document.querySelector("#lego__shape").value;
    
    // Create an object to represent a lego
    const legoObject = {
      creatorName: creator,
      legoName: name,
      legoColor: color,
      legoShape: shape
    }
    const red = document.querySelector("#red").value;
    const Green = document.querySelector("#Green").value;
    const Yellow = document.querySelector("#Yellow").value;
    const Blue = document.querySelector("#Blue").value;
    const Orange = document.querySelector("#Orange").value;
    const Black = document.querySelector("#Black").value;

    const Colorstosave = {
      color1: red,
      color2: Green,
      color3: Yellow,
      color4: Blue,
      color5: Orange,
      color6: Black,
    }
    // console.log("legoToSave", legoToSave);

    // Post to API and pass legoToSave
    data.postLego(legoObject),
    Colordata.postLego(Colorstosave);
  }}
