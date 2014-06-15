var todo = (function () {

    var div = document.createElement('div');
    var textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.id = 'item';
    div.appendChild(textInput);

    var addButton = document.createElement('input');
    addButton.type = 'button';
    addButton.addEventListener('click', addItem);
    addButton.value = 'Add Item';
    div.appendChild(addButton);

    var removeButton = document.createElement('input');
    removeButton.type = 'button';
    removeButton.addEventListener('click', removeItems);
    removeButton.value = 'Remove Items';
    div.appendChild(removeButton);

    var hideButton = document.createElement('input');
    hideButton.type = 'button';
    hideButton.addEventListener('click', hideItems);
    hideButton.value = 'Hide Items';
    div.appendChild(hideButton);

    var showButton = document.createElement('input');
    showButton.type = 'button';
    showButton.addEventListener('click', showItems);
    showButton.value = 'Show Items';
    div.appendChild(showButton);

    document.body.appendChild(div);

    var listDiv = document.createElement('div');
    var list = document.createElement('ul');
    list.id = 'list';
    listDiv.appendChild(list);
    document.body.appendChild(listDiv);

    function addItem() {
        var value = document.getElementById('item').value;
        if (value) {
            var itemsList = document.getElementById('list');
            var item = document.createElement('li');
            var checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            item.appendChild(checkBox);
            item.appendChild(document.createTextNode(value));
            itemsList.appendChild(item);
        }
    }

    function removeItems() {
        var itemsList = document.getElementById('list');
        var checkedItems = itemsList.querySelectorAll('input');
        for (var count = 0; count < checkedItems.length; count++) {
            if (checkedItems[count].checked) {
                itemsList.removeChild(checkedItems[count].parentElement);
            }
        }
    }

    function hideItems() {
        var itemsList = document.getElementById('list');
        var checkedItems = itemsList.querySelectorAll('input');
        for (var count = 0; count < checkedItems.length; count++) {
            if (checkedItems[count].checked) {
                checkedItems[count].parentElement.style.display = 'none';
                checkedItems[count].checked = false;
            }
        }
    }

    function showItems() {
        var itemsList = document.getElementById('list');
        var items = itemsList.querySelectorAll('li');
        for (var count = 0; count < items.length; count++) {
            if (items[count].style.display === 'none') {
                items[count].style.display = 'block';
            }
        }
    }
}());