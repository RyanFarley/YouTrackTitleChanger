try {
    var title = document.title,
        parts = title.split(':'),
        newTitle = parts.length == 2 ? parts[1].trim() + ' : ' + parts[0].trim() : title;
    
    document.title = title;
} catch (e) {}