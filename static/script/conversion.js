function convertir(){
    let req = new XMLHttpRequest();
    binario = document.getElementById("binario").value  
    ruta = 'https://networkcalc.com/api/binary/'+binario
    req.open('GET', ruta ,true);
    req.onreadystatechange = function() {
        if (req.readyState === XMLHttpRequest.DONE && req.status == 200) {
            var respuesta = JSON.parse(req.responseText)
            document.getElementById("decimal").value = respuesta.converted
        }
    };
    req.send();
    document.getElementById("decimal").value = binario*2
    document.getElementById("binario").value = ""
}