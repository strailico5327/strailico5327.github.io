const path = require('path');

hexo.extend.tag.register('imgbox0', function(args){

    const full = args[0];
    const width = args[1] || '75%';
    const gallery = args[2] || 'gallery';

    const basename = path.basename(full, path.extname(full));

    const thumb = full.replace(
        path.extname(full),
        '_thumb.webp'
    );

    return `<a href="${full}" data-fancybox="${gallery}" style="width:${width}; display:block; margin:10px auto"><img loading="lazy" decoding="async" src="${thumb}" alt="${basename}" style="width:100%;"></a>`;
});
