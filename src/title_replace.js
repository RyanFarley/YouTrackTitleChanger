try {
    var title = document.title,
        colonPos = title.lastIndexOf(':'),
        newTitle = title.slice(colonPos + 1).trim() + ' : ' + title.slice(0, colonPos).trim()
    
    document.title = newTitle;
} catch (e) {}