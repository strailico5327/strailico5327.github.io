hexo.extend.tag.register('date', function(args) {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const day = parseInt(args[0]);
    const monthNumber = parseInt(args[1]);
    let year = args[2];

    if (year.length === 2) {
        year = '20' + year;
    }

    const month = months[monthNumber - 1];

    return `<span style="float: right;">— ${day} ${month} ${year}</span>`;
});