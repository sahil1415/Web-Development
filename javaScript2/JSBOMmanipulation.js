
// ---- BOM ---- Browser Object Model 
// The Browser Object Model (BOM) is a collection of objects provided by the browser that allows JavaScript to interact 
// with the browser itself, providing access to browser features, window manipulation, and system information. 
// BOM objects are not part of the core JavaScript language, but they are available in web browsers.

// Key components of BOM include:

// Window Object: Represents the browser window and provides methods to control window behavior (e.g., window.alert(), window.open(), window.close()).

// Navigator Object: Provides information about the browser (e.g., navigator.userAgent, navigator.platform).

// Location Object: Allows manipulation of the URL (e.g., window.location.href, window.location.reload()).

// History Object: Provides methods to interact with the browser's history (e.g., window.history.back(), window.history.forward()).

// Screen Object: Provides information about the user's screen (e.g., screen.width, screen.height).

// Document Object: Represents the HTML or XML document being displayed in the window, although it is technically part of the DOM (Document Object Model), it’s often grouped with BOM.


// Common DOM Manipulation Techniques
//  1. Selecting Elements
// let element = document.getElementById("myId");  // Select by ID
// let elements = document.getElementsByClassName("myClass");  // Select by Class
// let elementsByTag = document.getElementsByTagName("div");  // Select by Tag
// let queryElement = document.querySelector(".myClass");  // Select first matching element
// let queryElements = document.querySelectorAll(".myClass");  // Select all matching elements

// 2. Modifying Elements
// element.textContent = "New Text";  // Change text
// element.innerHTML = "<strong>Bold Text</strong>";  // Change inner HTML
// element.style.color = "red";  // Change CSS style
// element.classList.add("new-class");  // Add a class
// element.classList.remove("old-class");  // Remove a class




