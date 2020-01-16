document.addEventListener('DOMContentLoaded', () => {
  const emailButton = document.getElementsByClassName("fa-envelope");
  const email = document.getElementsByClassName("tae-email");

  [0,1].forEach(i => {
    emailButton[i].addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target === emailButton[i]) {
        if (email[i].className.includes("showemail")) {
          if (i > 0) {
            email[i].className = "tae-email tae-adjust-email";
          } else {
            email[i].className = "tae-email";
          }
        } else {
          if (i > 0) {
            email[i].className = "tae-email tae-adjust-email showemail";
          } else {
            email[i].className = "tae-email showemail";
          }
        }
      }
    });
  })

});