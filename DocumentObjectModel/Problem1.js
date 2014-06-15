var allInnerDivsQuerySelector = document.querySelectorAll('div > div');
console.log(allInnerDivsQuerySelector);

var allDivsByTagName = document.getElementsByTagName('div');
var ln = allDivsByTagName.length;
var allInnerDivsByTagName = [];

for (var i = 0; i < ln; i++) {
    var currDivChildren = allDivsByTagName[i].children;
    var currLen = currDivChildren.length;

    for (var j = 0; j < currLen; j++) {
        if (currDivChildren[j].nodeName === 'DIV') {
            allInnerDivsByTagName.push(currDivChildren[j]);
        }
    }
}

console.log(allInnerDivsByTagName);