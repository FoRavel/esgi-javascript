function ucfirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = ucfirst(splitStr[i]); 
    }
    return splitStr.join(' '); 
 }

 function camelCase(str) {
     str = capitalize(str);
    return str = str.replace(/ +/g, "");
 }




console.log(ucfirst("test"));
console.log(capitalize("test un deux"));
console.log(camelCase("test un deux"));
