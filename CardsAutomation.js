function replaceContent() {
    var subtitle = document.getElementById('subtitleInput').value;
    var title = document.getElementById('titleInput').value;
    var text = document.getElementById('textInput').value;

    var newCard = document.createElement('div');
    newCard.className = 'card';

    var newCardImage = document.createElement('div');
    newCardImage.className = 'card-image car-1';
    newCard.appendChild(newCardImage);

    var newSubtitle = document.createElement('h3');
    newSubtitle.textContent = subtitle;
    newCard.appendChild(newSubtitle);

    var newTitle = document.createElement('h2');
    newTitle.textContent = title;
    newCard.appendChild(newTitle);

    var newText = document.createElement('p');
    newText.innerHTML = text;
    newCard.appendChild(newText);

    var symbols = ['nest_remote_comfort_sensor', 'autoplay', 'android', 'bluetooth_drive', 'speaker', 'light_mode', 'navigation'];
    symbols.forEach(function (symbol) {
        var newSymbol = document.createElement('span');
        newSymbol.className = 'material-symbols-outlined';
        newSymbol.textContent = symbol;
        newCard.appendChild(newSymbol);
    });

    var newLink = document.createElement('a');
    newLink.href = '';
    newLink.textContent = 'Select';
    newCard.appendChild(newLink);

    var container02 = document.querySelector('.container_02');
    container02.appendChild(newCard);
}
