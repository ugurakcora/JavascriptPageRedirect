var path = window.location.href;
 localStorage.setItem("url", path);
 localStorage.clear();

//cache'e urli kaydetme

jQuery(window).load(function () {
 var tolink = document.referrer;
 localStorage.setItem("adress", tolink);
 if ($('body').hasClass("logged-in")) {
 var redirect = localStorage.getItem("url");
 window.location.href=redirect;
 localStorage.clear();
 };
 if(redirect == "null") {
 window.location.href="./node/2381"; 
 };
});
 
//yönlendirme
