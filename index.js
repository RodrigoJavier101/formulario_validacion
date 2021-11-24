(() => {
   let formulario = document.formulario_registro;
   let elementos = formulario.elements;
   // functions
   let validarInputs = function () {
      for (let i = 0; i < elementos.length; i++) {
         if (elementos[i].type === 'text' || elementos[i].type === 'email' || elementos[i].type === 'password') {
            if (elementos[i].value == 0) {
               console.log('el campo ' + elementos[i].name + ' esta incompleto')
               elementos[i].className = elementos[i].className + ' error'
               return false;
            } else {
               elementos[i].className = elementos[i].className.replace(' error', '')
            }
         }
      }
      if (elementos.pass.value !== elementos.pass2.value) {
         // elementos.pass.value = ''
         // elementos.pass2.value = ''
         elementos.pass.className = elementos.pass.className + ' error'
         elementos.pass2.className = elementos.pass2.className + ' error'
      } else {
         elementos.pass.className = elementos.pass.className.replace(' error', '')
         elementos.pass2.className = elementos.pass2.className.replace(' error', '')
      }
      return true
   }
   // 

   const validarRadios = function () {
      let opciones = document.getElementsByName('sexo'), resultado = false;
      for (let i = 0; i < elementos.length; i++) {
         if (elementos[i].type == 'radio' && elementos[i].name == 'sexo') {
            for (let j = 0; j < opciones.length; j++) {
               if (opciones[j].checked) {
                  resultado = true
                  break
               }
            }
            if (resultado === false) {
               elementos[i].parentNode.className = elementos[i].parentNode.className + ' error'
               console.log('el campo sexo esta incompleto')
               return false
            } else {
               elementos[i].parentNode.className = elementos[i].parentNode.className.replace(' error', '')
               return true
            }
         }
      }
   }
   //
   let validarCheckbox = function () {
      let opciones = document.getElementsByName('terminos'), resultado = false;
      for (let i = 0; i < elementos.length; i++) {
         if (elementos[i].type == 'checkbox') {
            for (let j = 0; j < opciones.length; j++) {
               if (opciones[j].checked) {
                  resultado = true
                  break
               }
            }
            if (resultado === false) {
               elementos[i].parentNode.className = elementos[i].parentNode.className + ' error'
               console.log('los terminos estan incompletos')
               return false
            } else {
               elementos[i].parentNode.className = elementos[i].parentNode.className.replace(' error', '')
               return true
            }
         }
      }
   }
   //
   let enviar = (e) => {
      e.preventDefault()
      if (!validarInputs()) {
         console.log('falto validar los inputs')
         e.preventDefault()
      } else if (!validarRadios()) {
         console.log('falto validar los radios')
         e.preventDefault()
      } else if (!validarCheckbox()) {
         console.log('falto validar los checkbox')
         e.preventDefault()
      } else {
         console.log('validados los elementos')
         // e.preventDefault()
      }
   }
   //funciones blur y focus
   let focusInput = function () {
      this.parentElement.children[1].className = 'label active'
      this.parentElement.children[0].className = this.parentElement.children[0].className.replace('error', '')
   }

   let blurInput = function () {
      if (this.value <= 0) {
         this.parentElement.children[1].className = 'label'
         this.parentElement.children[0].className = this.parentElement.children[0].className + ' error'
      }
   }

   // eventos
   formulario.addEventListener('submit', enviar);

   for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].type === 'text' || elementos[i].type === 'email' || elementos[i].type === 'password') {
         elementos[i].addEventListener('focus', focusInput)
         elementos[i].addEventListener('blur', blurInput)
      }
   }
})();