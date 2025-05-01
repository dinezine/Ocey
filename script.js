function checkPass() {
    const input = document.getElementById("passInput").value;
    const passcode = "ocey";
    if (input === passcode) {
      document.getElementById("passcodePage").classList.add("hidden");
      document.getElementById("mainPage").classList.remove("hidden");
    } else {
      document.getElementById("errorMsg").style.display = "block";
    }
  }
  
  const noBtn = document.getElementById('noButton');
  noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
  });
  
  function showPopup() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // LOVE TERBANGAN
  function createLove() {
    const love = document.createElement("div");
    love.classList.add("love");
    love.style.left = Math.random() * 100 + "vw";
    love.style.fontSize = (Math.random() * 20 + 10) + "px";
    love.innerText = "💖";
    document.getElementById("loveContainer").appendChild(love);
  
    setTimeout(() => {
      love.remove();
    }, 6000);
  }
  
  setInterval(createLove, 300);
  