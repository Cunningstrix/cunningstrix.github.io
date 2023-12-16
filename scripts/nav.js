function openNav() {
    var sideNav = document.getElementById("mySidenav");
    if (sideNav.style.width === "230px") {
        closeNav();
    } else {    
        sideNav.style.width = "230px";
        document.addEventListener("click", closeNavOutside);
      }

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.removeEventListener("click", closeNavOutside);
}

function closeNavOutside(event) {
    var sideNav = document.getElementById("mySidenav");
    var mainContent = document.getElementById("main");
    var openButton = document.getElementById("openButton");

    if (event.target !== openButton && !sideNav.contains(event.target)) {
        closeNav();
      }
  }