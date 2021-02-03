//console.log('start');
let scrollani = false;

window.onload = () => {
   const bild_leiste = document.getElementById('bild_leiste');
   const content_leiste = document.getElementById('content_leiste');

   if (bild_leiste && content_leiste) {
      scrollani = true;
      let bild_liste_hoehe = bild_leiste.clientHeight;
      let content_leiste_hoehe = content_leiste.clientHeight;
      let benoetigte_content_leiste_hoehe = ((bild_liste_hoehe - screen.availHeight) / 2) + 1000;
      console.log(benoetigte_content_leiste_hoehe);
      if (benoetigte_content_leiste_hoehe > content_leiste_hoehe) {
         content_leiste.style.height = benoetigte_content_leiste_hoehe + "px";
      }
   }
};

//console.log(document.getElementById('bild_leiste').style);

let ticking = false;
function doSomething(scroll_pos) {
   //console.log(scroll_pos);
   document.getElementById('bild_leiste').style.marginTop = (0 - (scroll_pos * 2)) + "px";
}

window.addEventListener('scroll', function (e) {

   if (!ticking && scrollani) {
      window.requestAnimationFrame(function () {
         doSomething(window.scrollY);
         ticking = false;
      });

      ticking = true;
   }
});

//console.log('ende');

