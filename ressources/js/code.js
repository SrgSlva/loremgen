const loremIpsumWords = [
    "Lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","Suspendisse","quis","erat",
    "turpis","In","efficitur","eleifend","diam","eu","gravida.","Nam","eros","vehicula","non","non"
    ,"semper","porttitor","sem","tristique","nisl","libero","a","molestie","nulla","faucibus","vel","Ut","porta"
    ,"neque","a","ultrices","euismod","Integer","sagittis","at","congue","Mauris","mollis","leo","facilisis","ligula",
    "tempus","a","fermentum","felis","rutrum","Morbi","luctus","commodo","aliquam","Cras","et","lacus","vel","tellus",
    "convallis","auctor","Quisque","vel","suscipit","elit","Donec","ultricies","est","eget","laoreet","dignissim","dui","a",
    "mi","id","blandit","dapibus","nisi","tortor","sapien","at","ornare","ex","elementum"
];

function findLoremIpsumEquivalent(word) {
    const targetLength = word.length;

    const lastChar = word[word.length - 1];

    // Verify if the last character is special
    const isPunctuation = ['.', ',', '!', '?', '@', '_', ''].includes(lastChar);

    // removes the last char from word
    if (isPunctuation) {
        const wordWithoutLastChar = word.slice(0, -1);
        const ipsumWord = loremIpsumWords.find(ipsum => ipsum.length === targetLength);
        if (ipsumWord) {
            return ipsumWord + lastChar;
        }
        return word;
    }

    const wordsWithSameLength = loremIpsumWords.filter(ipsumWord => ipsumWord.length === targetLength);
    
    if (wordsWithSameLength.length > 0) {
        const randomIndex = Math.floor(Math.random() * wordsWithSameLength.length);
        return wordsWithSameLength[randomIndex];
    }
    
    return word;
}

function replaceWithLoremIpsum(inputText) {
    const inputWords = inputText.split(' ');
    const replacedWords = inputWords.map(word => findLoremIpsumEquivalent(word));
    return replacedWords.join(' ');
}

$(document).ready(function(){
$("#convert").click(function(){
    var userinput = $("#input").val();
    var convert = replaceWithLoremIpsum(userinput);
    $("#output").val(convert);
});

$("#copy").click(function(){
    console.log($("#output").val());
   navigator.clipboard.writeText($("#output").val());
});

});