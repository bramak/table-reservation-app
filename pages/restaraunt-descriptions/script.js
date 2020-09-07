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

//default tab 
document.getElementById("defaultOpen").click();
      
const url =
  "http://localhost:3001/business?business_id=" + urlmanipulation();

//fetch buisness api script
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const listitems = data.forEach((item) => {
      // create the elements
      const reviewcountjs = `(${item.review_count})`;
      //header elements: image, tabs and tab contents
      const header = `<div>
        <title>${item.name}</title>
    <img class="headingimage" src="${item.thumbnail}" alt="loading image please wait" onerror=this.src="../../imageicondata/food.png" />
      <h1>
        ${item.name}
        <button class="ratingbox" type="button" disabled>
          <img src="../../imageicondata/star.svg" width="16" height="16" /> ${item.stars}
        </button>
      </h1>
      <h2>
        ${item.address}<br />
        ${item.city}<br />
        ${item.state}<br />
        ${item.postal_code}
      </h2>
      </div>`;

      //averagecost and mealtimes div, placed into details tab
      const averagecost_mealtimesjs = `<div>
    <div class="tab" border=10><h3 align="center">${item.categories}</h3></div>

    <h3>Average cost: <div id="pricemark"></div></h3>
      <hr>
      <div id="timings"></div>
      
      </div>
    `;

      //attributes not into checkbox, placed into details tab
      const otherattributesjs = `<div>
          <button class="categories2" disabled>${item.attributes.Alcohol}</button>
          <button class="categories2" disabled>${item.attributes.RestaurantsAttire}</button>
          </div>`;

      //checkbox attributes

      const checkboxvaluesjs = `
      <div>
      
      <label class="container">Restaraunt Reservations
        <input type="checkbox" id="restarauntreservations">
        <span class="checkmark"></span>
    </label>
    <label class="container">Caters
        <input type="checkbox" id="caters">
        <span class="checkmark"></span>
    </label>
    <label class="container">Table Service
        <input type="checkbox" id="tableservice">
        <span class="checkmark"></span>
    </label>
    <label class="container">Take Out
        <input type="checkbox" id="takeout">
        <span class="checkmark"></span>
    </label>
    <label class="container"> OutdoorSeating
        <input type="checkbox" id="outdoorseating">
        <span class="checkmark"></span>
    </label>
    <label class="container"> Bike Parking
        <input type="checkbox" id="bikeparking">
        <span class="checkmark"></span>
    </label>
    <label class="container"> Has Tv
        <input type="checkbox" id="hastv">
        <span class="checkmark"></span>
    </label>
    <label class="container"> Wifi
        <input type="checkbox" id="wifi">
        <span class="checkmark"></span>
    </label>
    <label class="container">Good For Kids
        <input type="checkbox" id="goodforkids">
        <span class="checkmark"></span>
    </label>
    <label class="container">Good For Groups
        <input type="checkbox" id="goodforgroups">
        <span class="checkmark"></span>
    </label>
    <label class="container">Delivery
        <input type="checkbox" id="delivery">
        <span class="checkmark"></span>
    </label>  
    
    </div>
      `;

      const loadingjs = `<div>loading</div>`;
      const Dessertjs = `<div>${item.attributes.GoodForMeal}</div>`;

      document
        .getElementById("headerdetails")
        .appendChild(createElementFromHTML(header));

      document
        .getElementById("reviewcount")
        .appendChild(createElementFromHTML(reviewcountjs));

      document
        .getElementById("checkboxvalues")
        .appendChild(createElementFromHTML(checkboxvaluesjs));

      //checkboxchecks

      if (item.attributes.RestaurantsReservations != undefined)
        document.getElementById(
          "restarauntreservations"
        ).checked = converttobool(
          item.attributes.RestaurantsReservations
        );
      if (item.attributes.Caters != undefined)
        document.getElementById("caters").checked = converttobool(
          item.attributes.Caters
        );
      if (item.attributes.RestaurantsTableService != undefined)
        document.getElementById("tableservice").checked = converttobool(
          item.attributes.RestaurantsTableService
        );
      if (item.attributes.RestaurantsTakeOut != undefined)
        document.getElementById("takeout").checked = converttobool(
          item.attributes.RestaurantsTakeOut
        );
      if (item.attributes.OutdoorSeating != undefined)
        document.getElementById("outdoorseating").checked = converttobool(
          item.attributes.OutdoorSeating
        );
      if (item.attributes.BikeParking != undefined)
        document.getElementById("bikeparking").checked = converttobool(
          item.attributes.BikeParking
        );
      if (item.attributes.HasTV != undefined)
        document.getElementById("hastv").checked = converttobool(
          item.attributes.HasTV
        );
      if (item.attributes.WiFi != undefined)
        document.getElementById("wifi").checked = converttobool(
          fixtext(item.attributes.WiFi)
        );
      if (item.attributes.GoodForKids != undefined)
        document.getElementById("goodforkids").checked = converttobool(
          item.attributes.GoodForKids
        );
      if (item.attributes.RestaurantsGoodForGroups != undefined)
        document.getElementById("goodforgroups").checked = converttobool(
          item.attributes.RestaurantsGoodForGroups
        );
      if (item.attributes.RestaurantsDelivery != undefined)
        document.getElementById("delivery").checked = converttobool(
          item.attributes.RestaurantsDelivery
        );

      //parts of the cost
      document
        .getElementById("averagecost_mealtimes")
        .appendChild(createElementFromHTML(averagecost_mealtimesjs));

      const pricemarkjs =
        '<img src="../../imageicondata/price_tag.png" width="16" height="16" />';

      for (i = 0; i < item.attributes.RestaurantsPriceRange2; i++) {
        document
          .getElementById("pricemark")
          .appendChild(createElementFromHTML(pricemarkjs));
      }

      //timings implematation and display
      const timingsjs = `<div class="timingOfOpen">Open:<div id="mondaytime"></div><div id="tuesdaytime"></div><div id="wednesdaytime"></div><div id="thursdaytime"></div>
                        <div id="fridaytime"></div><div id="saturdaytime"></div><div id="sundaytime"></div></div>`;

      document
        .getElementById("timings")
        .appendChild(createElementFromHTML(timingsjs));

      const mondayjs = `<div >Monday:${item.hours.Monday}</div>`;
      const tuesdayjs = `<div>Tuesday:${item.hours.Tuesday}</div>`;
      const wednesdayjs = `<div >Wednesday:${item.hours.Wednesday}</div>`;
      const thursdayjs = `<div >Thursday:${item.hours.Thursday}</div>`;
      const fridayjs = `<div >Friday:${item.hours.Friday}</div>`;
      const saturdayjs = `<div>Saturday:${item.hours.Saturday}</div>`;
      const sundayjs = `<div>Sunday:${item.hours.Sunday}</div>`;

      if (item.hours.Monday != undefined)
        document
          .getElementById("mondaytime")
          .appendChild(createElementFromHTML(mondayjs));

      if (item.hours.Tuesday != undefined)
        document
          .getElementById("tuesdaytime")
          .appendChild(createElementFromHTML(tuesdayjs));

      if (item.hours.Wednesday != undefined)
        document
          .getElementById("wednesdaytime")
          .appendChild(createElementFromHTML(wednesdayjs));

      if (item.hours.Thursday != undefined)
        document
          .getElementById("thursdaytime")
          .appendChild(createElementFromHTML(thursdayjs));

      if (item.hours.Friday != undefined)
        document
          .getElementById("fridaytime")
          .appendChild(createElementFromHTML(fridayjs));

      if (item.hours.Saturday != undefined)
        document
          .getElementById("saturdaytime")
          .appendChild(createElementFromHTML(saturdayjs));

      if (item.hours.Sunday != undefined)
        document
          .getElementById("sundaytime")
          .appendChild(createElementFromHTML(sundayjs));

      //other attributes
      document
        .getElementById("otherattributes")
        .appendChild(createElementFromHTML(otherattributesjs));

      console.log(item.attributes);

      //photos api fetch placed in photos tab, nested api call
      const url1 = "http://localhost:3001/photos";
      fetch(url1)
        .then((res) => res.json())
        .then((data) => {
          // iterate over items
          const listitems = data.forEach((item2) => {
            // create the elements
            if (item2.business_id == item.business_id) {
              const photojs = `<div>
              
                  <img src="https://s3-media2.fl.yelpcdn.com/bphoto/${item2.photo_id}/o.jpg" alt="${item2.caption},${item2.label}">
                  
            </div>`;

              document
                .getElementById("photos")
                .appendChild(createElementFromHTML(photojs));
            }
            console.log(item2);
          });
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });