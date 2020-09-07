 //convert string to bool
 function converttobool(string) {
    switch (string.toLowerCase().trim()) {
      case "true":
      case "yes":
      case "1":
        return true;
      case "false":
      case "no":
      case "0":
      case null:
        return false;
      default: 
        return Boolean(string);
    }
  }

  //edit values with 'u in them
  function fixtext(string) {
    var val = string.replace("u'", " ");
    val = val.replace("_", " ");
    val = val.replace("'", " ");
    val = val.replace("'", " ");
    val = val.trim();
    return val;
  }

  //tabsfunctions
  function openpage(evt, pagename) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pagename).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //sidetabfunction
  function openpage2(evt, pagename) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pagename).style.display = "block";
    evt.currentTarget.className += " active";
    tablinksclose();
  }


  // create an element
  const createNode = (elem) => {
    return document.createElement(elem);
  };

  function createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  // append an element to parent
  const appendNode = (parent, elem) => {
    parent.appendChild(elem);
  };

  //url manipulation
  function urlmanipulation(){
    var a = window.location.href;
    var urllength = a.length;
    var locationid = a.substring(urllength - 22, urllength);
    return locationid;
    }


    // List Element
    const ul = document.querySelector("#business");

    // API URL
    const url = "http://localhost:3001/business";


    //DOM's to get elements from filter form
    const deliveryFilterDOM = document.getElementById("delivery");
    const takeOutFilterDOM = document.getElementById("takeout");
    const reservationFilterDOM = document.getElementById(
      "restaurantreservations"
    );
    const pricevalFilterDOM = document.getElementById("priceval");
    const ratingFilterDOM = document.getElementById("rating");
    const reviewsminFilterDOM = document.getElementById("reviewsmin");

    const tileRootDOM = document.getElementById("headerdetails");

    //text to display when there are no results after filter
    const emptytiles = `<div><h2>There are no results that match this search.</h2></div>`;

    //rendering tiles
    const renderTiles = (data) => {
      // iterate over items
      const listitems = data.forEach((item) => {
        // create the elements
        const tile = `
            <div class="tile">
                  <div class="mainbox">
                  <div class="imgclass"><img class="image" src="${item.thumbnail}" alt="${item.name}"  onerror=this.src="../../imageicondata/food.png" /></div>
                  <div class="overlay"></div>
                  <div class="buttonoverlay">
                  <div class="restname">${item.name}</div>
                  <div class="ratingbox">
                  <img src="../../imageicondata/star.svg" width="16" height="16" /> ${item.stars}
                  </div>
                  </div>
                  </div>
                  <form action="../restaraunt-descriptions/index.html#/${item.business_id}">
                  <div class="bottommain">
                  <button type="submit" class="button">View Details</button></form>
                  </div>
          </div>
          `;
        document
          .getElementById("headerdetails")
          .appendChild(createElementFromHTML(tile));
      });
    };

    // make the API call

    function getData() {
      return fetch(url)
        .then((res) => res.json())
        .catch((err) => {
          console.error("Error: ", err);
        });
    }

    getData().then((data) => {
      renderTiles(data);
    });

    // default open restaraunt list when loaded or click to open the restaraunt list tab
    document.getElementById("defaultOpen").click();

    //menu
    function tablinksdrop() {
      document.getElementById("sideTab").style.width = "150px";
      document.getElementById("main").style.marginLeft = "150px";
    }

    function tablinksclose() {
      document.getElementById("sideTab").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }


    //filter results
    function filterresults() {
      //if existing: to clear previous no results message 
      empty.innerHTML = "";

      // parameters receving value from form
      const allFilterOptions = {
        RestaurantsDelivery: deliveryFilterDOM.checked,
        RestaurantsTakeOut: takeOutFilterDOM.checked,
        RestaurantsReservations: reservationFilterDOM.checked,
        maxPriceRange: parseInt(pricevalFilterDOM.value),
        stars: parseInt(ratingFilterDOM.value),
        review_count: parseInt(reviewsminFilterDOM.value),
      };

      // to consider only selected options in form
      const chosenFilterOptions = Object.keys(allFilterOptions).reduce(
        (acc, key) => {
          if (typeof allFilterOptions[key] === "boolean") {
            if (allFilterOptions[key] === true) {
              return { ...acc, [key]: true };
            } else {
              return acc;
            }
          } else {
            return { ...acc, [key]: allFilterOptions[key] };
          }
        },
        {}
      );

      //fetching results
      getData().then((data) => {
        const filteredResults = data.filter((item) => {
          const {
            RestaurantsDelivery = "False",
            RestaurantsTakeOut = "False",
            RestaurantsReservations = "False",
            RestaurantsPriceRange2 = 6,
          } = item.attributes;
          const { stars = 1, review_count = 0 } = item;
          const filterParams = {
            RestaurantsDelivery: converttobool(RestaurantsDelivery),
            RestaurantsTakeOut: converttobool(RestaurantsTakeOut),
            RestaurantsReservations: converttobool(RestaurantsReservations),
            RestaurantsPriceRange2,
            stars,
            review_count,
          };
          let result = true;
          //counting params with true or number value
          Object.keys(chosenFilterOptions).forEach((key) => {
            if (typeof chosenFilterOptions[key] === "boolean") {
              if (filterParams[key] === false) {
                result = false;
              }
            } else if (typeof chosenFilterOptions[key] === "number") {
              if (filterParams[key] <= chosenFilterOptions[key]) {
                result = false;
              }
            }
          });
          return result;
        });

        //clearing previous display
        tileRootDOM.innerHTML = "";

        console.log(filteredResults);

        //rendering final display
        renderTiles(filteredResults);
        if (filteredResults.length == 0) {
          document
            .getElementById("empty")
            .appendChild(createElementFromHTML(emptytiles));
        }
        document.getElementById("btn").click();
        document.getElementById("defaultOpen").click();
      });
    }

    //filtersidebar

    var sidebarBox = document.querySelector("#box");
    var sidebarBtn = document.querySelector("#btn");
    var pageWrapper = document.querySelector("#main-content");

    sidebarBtn.addEventListener("click", function (event) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        sidebarBox.classList.remove("active");
      } else {
        this.classList.add("active");
        sidebarBox.classList.add("active");
      }
    });

    pageWrapper.addEventListener("click", function (event) {
      if (sidebarBox.classList.contains("active")) {
        sidebarBtn.classList.remove("active");
        sidebarBox.classList.remove("active");
      }
    });

    window.addEventListener("keydown", function (event) {
      if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
        sidebarBtn.classList.remove("active");
        sidebarBox.classList.remove("active");
      }
    });   