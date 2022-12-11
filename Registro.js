function toggle(elemento) {
    if (elemento.value === "a") {
      document.getElementById("uno").style.display = "block";
    } else {
      if (elemento.value === "b") {
        document.getElementById("uno").style.display = "none";
      }
    }
}
  