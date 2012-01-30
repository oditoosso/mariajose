// webdoc : Maria José //

// atualizando o numero de "chaves" atualizar o numero do "for";

string = 0;
chave = [
    "EXTRAVAGANZE",
    "MARIA",
    "JOSE",
    "BOLA",
    "TENIS",
    "POMBAS"];

function letras(e) {
    var code;
    if (!e) var e = window.event;
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var ch = String.fromCharCode(code);
    if(code >= 65 && code<=90){
	if(!string) string = ch;
	else string += ch;
    } else if (code == 8 && string.length >= 2){
	string = string.substring(0, string.length-1);
    } else if (string.length == 1) string = 0;
    if(string.length >= 4)
	for(i=0; i <= 6; i++){ 
	    if(chave[i] == string){
		escolhido(string);
		string = 0;
	    }			
	}
    if(string.length > 15){
	string = 0;
    }
}

function escolhido(string){
    alert("foi escolhido o "+ string);
}

