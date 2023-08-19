document.addEventListener("DOMContentLoaded", function() {
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
      categoria.addEventListener("click", function() {
        // Aquí puedes implementar la lógica para mostrar los productos de la categoría seleccionada
        window.location.href = "https://www.google.com";
      });
    });
  });
  