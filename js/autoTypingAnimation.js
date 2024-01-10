document.addEventListener("DOMContentLoaded", function() {
  const text = "currently pursuing my Bachelor's in Technology with a specialization in Computer Science and Engineering at RGPV University in Bhopal. My passion lies in the dynamic world of web development, where I have cultivated a deep and comprehensive understanding of various web technologies. I am driven by the ever-evolving nature of the internet and the endless possibilities it offers for creating innovative and user-friendly web solutions. As a dedicated student of computer science and engineering, I am excited to continue exploring and contributing to the rapidly evolving field of web development.";
  const element = document.querySelector('.about-info-inner');

  function typeWriter(text, i) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(function() {
        typeWriter(text, i);
      }, 50); // Adjust typing speed here
    }
  }

  setTimeout(function() {
    typeWriter(text, 0);
  }, 2000); // Delay before starting typing
});