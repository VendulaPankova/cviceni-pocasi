const container = document.querySelector("#weather-container")

predpoved.forEach((den) => {

    container.innerHTML += `
<div class="day-card">
    <h3>${den.den}</h3>
    <p>Denní teplota: ${den.denni_teplota}</p>
    <p>Satv: ${den.stav_pocasi}</p>
    <a href="detail.html#${den.id}">Detail</a>
    
</div>
    
    `
})