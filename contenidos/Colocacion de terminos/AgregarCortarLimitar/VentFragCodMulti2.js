/* eslint-disable no-undef */
// Obtener los botones "Ver código"
var modalBtns = document.querySelectorAll("[id^='open-modal']");

// Obtener los elementos de la ventana emergente, el botón de cierre y el botón de copiar
var modals = document.querySelectorAll("[id^='modal']");
var modalCloses = document.querySelectorAll("[id^='modal'] .close");
var copyButtons = document.querySelectorAll("[id^='copy-button']");

// Recorrer cada botón "Ver código" y asignar un evento de clic
modalBtns.forEach(function(btn, index) {
	btn.onclick = function() {
		// Mostrar la ventana emergente correspondiente al botón "Ver código" que se ha hecho clic
		modals[index].style.display = "block";

		// Realizar el resaltado de sintaxis en el fragmento de código correspondiente
		Prism.highlightElement(document.querySelector("#code-snippet-" + (index + 1)));

		// Asignar el contenido del fragmento de código correspondiente al portapapeles al hacer clic en el botón de copiar
		copyButtons[index].onclick = function() {
			var codeSnippet = document.querySelector("#code-snippet-" + (index + 1));
			copyToClipboard(codeSnippet.textContent);
		}
	}
});

// Recorrer cada botón de cierre y asignar un evento de clic para ocultar la ventana emergente correspondiente
modalCloses.forEach(function(close, index) {
	close.onclick = function() {
		modals[index].style.display = "none";
	}
});

// Obtener todos los fragmentos de código en la página
var codeSnippets = document.querySelectorAll("code");

// Recorrer cada fragmento de código y resaltar la sintaxis utilizando Prism
codeSnippets.forEach(function(snippet) {
	if (snippet.classList.contains("language-javascript")) {
		Prism.highlightElement(snippet);
	} else if (snippet.classList.contains("language-css")) {
		Prism.highlightElement(snippet);
	} else if (snippet.classList.contains("language-markup")) {
		Prism.highlightElement(snippet, Prism.languages.html);
	}
});


// Función para copiar el contenido al portapapeles
function copyToClipboard(text) {
	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
	alert("El fragmento de código ha sido copiado al portapapeles.");
}