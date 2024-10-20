function getSentence(sentence) {
    return sentence;
}

function searchVocals(sentence) {
    let vocals = [];
    let sentenceLower = sentence.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of sentenceLower) {
        if (vowels.includes(char)) {
            vocals.push(char);
        }
    }
    return vocals;
}

function deleteDuplicity(list) {
    return [...new Set(list)];
}

function getVocals(sentence) {
    let vocalsList = searchVocals(sentence);
    let uniqueVocals = deleteDuplicity(vocalsList);
    return uniqueVocals.join(',');
}

function showResults() {
    let sentence = document.getElementById("inputSentence").value;

    let resultGetSentence = getSentence(sentence);
    document.getElementById("resultGetSentence").innerText = resultGetSentence;

    let vocalsList = searchVocals(sentence);
    document.getElementById("resultSearchVocals").innerText = vocalsList.join(', ');

    let uniqueVocals = deleteDuplicity(vocalsList);
    document.getElementById("resultDeleteDuplicity").innerText = uniqueVocals.join(', ');

    let resultGetVocals = getVocals(sentence);
    document.getElementById("resultGetVocals").innerText = resultGetVocals;
    
}