const dayID = window.location.hash.slice(1) //získáme id bez x hashe
const dayData = predpoved.find((den) => den.id === dayID)

const detailContainer = document.querySelector("#weather-detail")

detailContainer.innerHTML = `
<h2>${dayData.den} ${ dayData.datum}</h2>
<p>Ranní teplota: ${dayData.ranni_teplota} *C</p>
<p>Odpoeldní teplota: ${dayData.odpoledni_teplota} *C</p>
<p>Večerní teplota: ${dayData.vecerni_teplota} *C</p>
<p>Stav Počasí: ${dayData.stav_pocasi} *C</p>
<p>Tlak: ${dayData.stav_pocasi} hPa</p>
<p>Rychlost větru: ${dayData.rychlost_vetru} km/h</p>
<p>${dayData.popis_pocasi}</p>

`








