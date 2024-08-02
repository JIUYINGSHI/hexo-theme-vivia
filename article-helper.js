hexo.extend.helper.register('symbolsCount', function (post) {
    if (!post.content) return 0;
    return post.content.length;
});

hexo.extend.helper.register('symbolsCount', function (post) {
  return post.content.length;
});
