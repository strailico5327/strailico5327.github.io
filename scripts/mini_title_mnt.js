hexo.extend.tag.register('mnt', function(args){
    return `<div class="mini-title">${args.join(' ')}</div>`;
});