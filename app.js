function precio(tamano, tipo) {
  const tipos = {
    Матовая: true,
    Глянцевая: false,
  };

  const tamanos = {
    "9x12": tipos[tipo] ? 8.5 : 10.0,
    "10x15": tipos[tipo] ? 10.0 : 11.5,
    "18x24": tipos[tipo] ? 15.5 : 17.0,
  };

  return tamanos[tamano];
}

document.querySelector("button").addEventListener("click", function (e) {
  const tamano = document.querySelector('input[name="option"]:checked');
  const tipo = document.querySelector('input[name="option2"]:checked');
  const cantidad = document.querySelector(".calcular").value;
  const textArea = document.querySelector("textarea");
  if (!tamano || !tipo || !cantidad) {
    textArea.value = "";
    return Swal.fire({
      icon: "error",
      title: "Oй!",
      text: "Вы должны выбрать все варианты!",
      footer: '<a href="https://github.com/Portilloronny6" target="_blank">Вопросы: Github -> @portilloronny6</a>',
    });
  }
  precio(tamano.value, tipo.value);
  textArea.value = "";
  textArea.value += `
  Цена фотографии: ${precio(tamano.value, tipo.value)} р.
  Количество: ${cantidad} шт.
  - Сумма заказа ${precio(tamano.value, tipo.value) * parseFloat(cantidad)} p.
  `;
});
