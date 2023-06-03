// Seleccionar todos los elementos de la clase "code-snippet"
const snippets = document.querySelectorAll('.code-snippet');

// Para cada ventana de fragmento de código
snippets.forEach((snippet) => {
  const copyButton = snippet.querySelector('.copy-button');
  const codeBlock = snippet.querySelector('.code-body code');

  // Agregar un controlador de eventos de clic para el botón "Copiar"
  copyButton.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(codeBlock);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  });

  const expandButton = snippet.querySelector('.expand-button');

  // Agregar un controlador de eventos de clic para el botón "Expandir"
  expandButton.addEventListener('click', () => {
    snippet.classList.toggle('expanded');
  });
});
