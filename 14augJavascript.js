function alertMe() {
  alert("Krishna");
}

function changeText() {
  const text = document.getElementById("name");

  if (text.innerHTML == "Doosra College") {
    text.innerHTML = "Krishna";
    text.style.backgroundColor = "red";
  } else {
    text.innerHTML = "Doosra College";
    text.style.backgroundColor = "blue";
  }
}

function mobileMenu() {
  const x = document.getElementById("menu1");
  const y = document.getElementById("menu2");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
