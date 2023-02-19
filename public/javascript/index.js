const charactersAPI = new APIHandler('http://localhost:8000/characters');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function () {
    charactersAPI.getFullList().then((allCharacters) => {
      const parentDiv = document.querySelector(".characters-container")
      const hiddenDivOnFetch = document.getElementsByClassName("character-info")
      //this function goes through the array of data then creates the information"
   console.log(all)
      allCharacters.forEach((element) => {
        console.log(element.name)
        const singleCharacter = document.createElement("div")
        singleCharacter.className = "character-info";

        //this creates the id
        const nuevoDivId = document.createElement("div")
        nuevoDivId.classList.add = ("id")
        nuevoDivId.innerHTML = `id: ${element.id}`
        singleCharacter.appendChild(nuevoDivId)
        //this creates the name
        const nuevoDivName = document.createElement("div")
        nuevoDivName.classList.add = ("name")
        nuevoDivName.innerHTML = `Name: ${element.name}`
        singleCharacter.appendChild(nuevoDivName)

        //this creates the occupation
        const nuevoDivOccu = document.createElement("div")
        nuevoDivOccu.classList.add = ("occupation")
        nuevoDivOccu.innerHTML = `Occupation: ${element.occupation}`
        singleCharacter.appendChild(nuevoDivOccu)

        //this creates the weapon
        const nuevoDivWeap = document.createElement("div")
        nuevoDivWeap.classList.add = ("weapon")
        nuevoDivWeap.innerHTML = `weapon: ${element.weapon}`
        singleCharacter.appendChild(nuevoDivWeap)

        //this creates the cartoon
        const nuevoDivCart = document.createElement("div")
        nuevoDivCart.classList.add = ("cartoon")
        nuevoDivCart.innerHTML = `cartoon: ${element.cartoon}`
        singleCharacter.appendChild(nuevoDivCart)


        parentDiv.appendChild(singleCharacter)

      });
      hiddenDivOnFetch[0].style.display = "none"

    })
  })
  //       const parentDiv = document.querySelector(".characters.container")
  //     const hiddenDivOnFetch = document.getElementById(
  //       "character-info-to-hide"
  //     )

  //     allCharacters.forEach((element) => {
  //       const singleCharacter = document.createElement("div")
  //       singleCharacter.className = "character-info";

  //       const nuevoDivName = document.createElement("div")
  //       nuevoDivName.classList = "name"
  //       nuevoDivName.innerHTML = `Name: ${character.name}`
  //       singleCharacter.appendChild(nuevoDivName)

  //       parentDiv.appendChild(singleCharacter)

  //     });
  //     hiddenDivOnFetch.style.display = "none"

});

// document.getElementById('fetch-one').addEventListener('click', function () {


// });

// document.getElementById('deconste-one').addEventListener('click', function (event) {

// });

// document.getElementById('edit-character-form').addEventListener('submit', function (event) {

// });

// document.getElementById('new-character-form').addEventListener('submit', function (event) {

// });
