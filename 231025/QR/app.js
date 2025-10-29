
        function generarQR() {
            let input1 = document.getElementById('input1').value.trim();
            let input2 = document.getElementById('input2').value.trim();
            let input3 = document.getElementById('input3').value.trim();
            let input4 = document.getElementById('input4').value.trim();

            let textoCompleto = `Nombre: ${input1} | Correo: ${input2} | Inst: ${input3} | Dep: ${input4}`;
            
            textoCompleto = textoCompleto.trim();

            if (input1 === "" || input3 === "") { 
                alert("Por favor, ingresa al menos tu Nombre y la Institución.");
                return; 
            }

            document.getElementById('btnGenerar').disabled = true;

            let qrContainer = document.getElementById('qr-code');
            let textContainer = document.getElementById('qr-text-container');

            qrContainer.innerHTML = '';
            textContainer.innerHTML = '';

            let qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoCompleto);

            let qrImg = document.createElement('img');
            qrImg.src = qrCodeURL;
            qrImg.alt = 'Código QR generado con los datos';
            qrImg.classList.add('qr-code-img'); 

            qrContainer.appendChild(qrImg);

            textContainer.innerHTML = `<strong>Datos del QR:</strong><br>${textoCompleto}`;
            textContainer.style.display = 'block'; 
        }