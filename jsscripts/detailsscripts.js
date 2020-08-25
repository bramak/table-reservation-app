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

