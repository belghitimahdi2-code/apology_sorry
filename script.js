let yesClickCount = 0;

function reveal() {
    const yesBtn = document.querySelector("#initial-content button:not(#noBtn)");
    yesClickCount++;

    if (yesClickCount === 1) {
    
        yesBtn.innerText = "bs7 u doo? 🥺";
        yesBtn.style.transform = "scale(1.3)";
        yesBtn.style.transition = "transform 0.3s ease";
    } 
    else if (yesClickCount === 2) {
        
        yesBtn.innerText = "omooo omooo ? ❤️";
        yesBtn.style.transform = "scale(1.6)";
    } 
    else if (yesClickCount === 3) {

        yesBtn.innerText = "omgg muah eliik 💋✨(wait...)";
        yesBtn.style.transform = "scale(1.9)";
        
        yesBtn.disabled = true;
        document.getElementById('noBtn').style.display = 'none';

        setTimeout(function() {
            document.getElementById('initial-content').style.display = 'none';
            document.getElementById('final-msg').style.display = 'block';
        }, 2500);

        setTimeout(function() {
            document.getElementById('initial-content').style.display = 'none';
            document.getElementById('final-msg').style.display = 'block';
        
            document.getElementById('top-sticker').src = 'neew2.jpg';
    },  1000);
    }
}


function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    let currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (currentSize > 10) {
        noBtn.style.fontSize = (currentSize - 1) + 'px';
    }
}
