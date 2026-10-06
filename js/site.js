/* Shared across every page. Edit the three values, nothing else. */
(function(){
  var PHONE   = "647 504 5210";
  var EMAIL   = "cpggrowthstudio@gmail.com";
  var KEYWORD = "CALLS";

  var d = PHONE.replace(/[^0-9+]/g,"");
  document.querySelectorAll("[data-tel]").forEach(function(a){ a.href = "tel:"+d; });
  document.querySelectorAll("[data-sms]").forEach(function(a){ a.href = "sms:"+d+"?&body="+encodeURIComponent(KEYWORD); });
  document.querySelectorAll("[data-mail]").forEach(function(a){ a.href = "mailto:"+EMAIL; });
  document.querySelectorAll("[data-tel-text]").forEach(function(e){ e.textContent = PHONE; });
  document.querySelectorAll("[data-mail-text]").forEach(function(e){ e.textContent = EMAIL; });

  var yr = document.getElementById("yr");
  if(yr) yr.textContent = new Date().getFullYear();

  var top = document.querySelector(".top");
  if(top){
    var onScroll = function(){ top.classList.toggle("stuck", window.scrollY > 12); };
    onScroll(); addEventListener("scroll", onScroll, {passive:true});
  }
})();
