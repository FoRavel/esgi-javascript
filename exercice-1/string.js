function ucfirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1); 
    }
    return splitStr.join(' '); 
 }



console.log(ucfirst("test"));
console.log(capitalize("test un deux"));