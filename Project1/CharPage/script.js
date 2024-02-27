var lastPanelId = '';

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