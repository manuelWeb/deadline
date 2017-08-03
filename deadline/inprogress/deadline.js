var html = document.body.innerHTML,
  dates = html.match(/[0-9]{2}\/[0-9]{2}\/17/ig);
// trier dates ordre croissant
dates.sort(function(a, b) {
  var aa = a.split('/').reverse().join(),
    bb = b.split('/').reverse().join();
  return aa < bb ? -1 : (aa > bb ? 1 : 0);
});

var selTag = document.getElementsByTagName('*'),
  date_1 = dates[0],
  ary = [];
// boucle sur toutes les balises avec date
for (var i = 0; i < selTag.length; i++) {
  if (selTag[i].textContent == date_1) {
    ary.push(selTag[i]);
    console.info(selTag[i]);
  }
}
for (var i = 0; i < ary.length; i++) {
  ary[i].innerHTML = '<span style="background-color: #FFFF00;">' + ary[0].innerHTML + '</span>';
}

// 2- partie wrap dead job
var dead = new RegExp(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/ig),
  arydead = [];

function getEltByTxt(matchReg, tag) {
  var tagsel = document.getElementsByTagName(tag),
    i;
  for (i = 0; i < tagsel.length; i++) {
    matchReg.test(tagsel[i].innerHTML) ? arydead.push(tagsel[i]) : false;
  }
}
getEltByTxt(dead, 'td');

// job à valider ou à intégrer
for (var i = 0; i < arydead.length; i++) {
  var colorMoins = i*2;
  // si 5 job on passe bg en jaune FFF000
  if(colorMoins >= 10) colorMoins = 'F';
  arydead[i].innerHTML = '<span style="background-color: #FF'+colorMoins+'000; color: #FFF;">' + arydead[i].innerHTML + '</span>';
}