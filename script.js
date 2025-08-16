const input = document.getElementById("novaTarefa");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {
  const valor = input.value.trim();
  if (valor) {
    const li = document.createElement("li");
    li.textContent = valor;
    li.addEventListener("click", () => {
      li.classList.toggle("concluida");
    });
    li.addEventListener("dblclick", () => {
      lista.removeChild(li);
    });
    lista.appendChild(li);
    input.value = "";
  }
});
