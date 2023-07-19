var a = {
  mobiles: {
    Samsung: {
      SamsungA10: {
        name: "Samsung A10",
        ram: "4gb",
        rom: "64gb",
        camera: "13",
        price: "22,000 PKR"
      },
      SamsungA20: {
        name: "Samsung A20",
        ram: "4gb",
        rom: "64gb",
        camera: "18",
        price: "28,000"
      },
      SamsungA30: {
        name: "Samsung A30",
        ram: "4gb",
        rom: "64gb",
        camera: "25",
        price: "29,000"
      }
    },
    IPhone: {
      IPhone11: {
        name: "IPhone11",
        ram: "4gb",
        rom: "64gb",
        camera: "12",
        price: "100,000"
      },
      IPhone12: {
        name: "IPhone12",
        ram: "4gb",
        rom: "64gb",
        camera: "12",
        price: "150,000"
      },
      IPhone13: {
        name: "IPhone13",
        ram: "6gb",
        rom: "128gb",
        camera: "24",
        price: "200,000"
      }
    },
    Oppo: {
      OppoV20: {
        name: "OppoV20",
        ram: "8gb",
        rom: "128gb",
        camera: "64",
        price: "54,999"
      },
      OppoF19: {
        name: "OppoF19",
        ram: "6gb",
        rom: "128gb",
        camera: "48",
        price: "36,999"
      },
      OppoF11: {
        name: "OppoF11",
        ram: "4gb",
        rom: "64gb",
        camera: "48",
        price: "35,999"
      }
    },
    Vivo: {
      VivoY20: {
        name: "VivoY20",
        ram: "4gb",
        rom: "64gb",
        camera: "13",
        price: "26,999"
      },
      VivoY21: {
        name: "VivoY21",
        ram: "4gb",
        rom: "64gb",
        camera: "13",
        price: "43,999"
      },
      VivoY55: {
        name: "VivoY55",
        ram: "8gb",
        rom: "128gb",
        camera: "50",
        price: "64,999"
      }
    }
  }
};

function performSiteSearch(searchTerm) {
  var results = [];


  for (var brand in a.mobiles) {
 
    for (var model in a.mobiles[brand]) {
      var mobile = a.mobiles[brand][model];
      var mobileKeys = Object.keys(mobile);

    
      if (
        mobileKeys.some(key => mobile[key].toLowerCase().includes(searchTerm.toLowerCase()))
      ) {
        results.push(mobile);
      }
    }
  }

  return results;
}

function renderSearchResults(results) {
  var resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  } else {
    for (var i = 0; i < results.length; i++) {
      var mobile = results[i];
      var resultElement = document.createElement("div");
      resultElement.innerHTML = "<h2 class = 'p-4 border border-primary ' >" + mobile.name + "</h2>" +
                                "<p>RAM:  " + mobile.ram + "</p>" +
                                "<p>ROM: " + mobile.rom + "</p>" +
                                "<p>Camera: " + mobile.camera + "</p>" +
                                "<p>Price: " + mobile.price + "</p>";

      resultsContainer.appendChild(resultElement);
    }
  }
}


document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  var searchTerm = document.getElementById("search-input").value;

  var searchResults = performSiteSearch(searchTerm);
  renderSearchResults(searchResults);
});

