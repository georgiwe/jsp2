function generateTagCloud(words, minSize, maxSize) {

    var dict = [];

    for (var i = 0; i < words.length; i++) {
        var currWord = words[i];

        if (currWord in dict) {
            dict[currWord]++;
        } else {
            dict[currWord] = 1;
        }
    }

    var min = Number.MAX_VALUE;
    var max = -min;
    
    for (var word in dict) {
        if (dict[word] > max) {
            max = dict[word];
        }

        if (dict[word] < min) {
            min = dict[word];
        }
    }

    var fragment = document.createDocumentFragment();

    for (var word in dict) {

        var divWithWordInside = document.createElement('div');

        var currCount = dict[word];
        var currFontSize;

        if (currCount === max) {
            currFontSize = maxSize;
        } else if (currCount === min) {
            currFontSize = minSize;
        } else {
            currFontSize = minSize + (maxSize - minSize) / words.length;
        }

        divWithWordInside.style.fontSize = currFontSize + 'px';
        divWithWordInside.innerText = word;

        fragment.appendChild(divWithWordInside);
    }

    document.body.appendChild(fragment);
}

var tags = ["cms", "javascript", "js", "ASP.NET MVC",
    ".net", ".net", "css", "wordpress", "xaml", "js",
    "http", "web", "asp.net", "asp.net MVC", "ASP.NET MVC",
    "wp", "javascript", "js", "cms", "html", "javascript",
    "http", "http", "CMS"];

var tagCloud = generateTagCloud(tags, 17, 42);