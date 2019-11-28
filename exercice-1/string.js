function ucfirst(str) {
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

function snake_case(str) {
    str = str.toLowerCase();
    return str = str.replace(/ +/g, "_");
}



console.log(ucfirst("test"));
console.log(capitalize("test un deux"));
console.log(camelCase("test un deux"));
console.log(snake_case("test un deux"));
