var lastPanelId = '';
var lastCharacterId = '';

function toggleInfoPanel(panelId) {
    var panel = document.getElementById(panelId);
        if (panel.style.top === '-4000px' || lastPanelId !== panelId) {
            panel.style.top = '0';
            if (lastPanelId && lastPanelId !== panelId) {
                document.getElementById(lastPanelId).style.top = '-4000px';
            }
        } else {
            panel.style.top = '-4000px';
        }
        lastPanelId = panelId;
}

loadTextFile("../CommonElements/palyer1.txt", "paragraph1");
loadTextFile("../CommonElements/player2.txt", "paragraph2");
// Add more calls to loadTextFile for additional paragraphs as needed

function loadTextFile(filePath, paragraphId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Insert the text content into the corresponding paragraph element
            document.getElementById(paragraphId).innerText = this.responseText;
        }
    };
    // Specify the path to the text file for the paragraph
    xhttp.open("GET", filePath, true);
    xhttp.send();
}