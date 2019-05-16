(function () {
  $.getJSON('./mapped_source.json', function (data) {
    var mapped_source = _(data).toPairs().sortBy(0).fromPairs().value();
    var reference = document.getElementById('reference');
    _.forOwn(mapped_source, function (val, key) {
      // create card
      var card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.innerHTML = '<div class="card-content" id="' + key + '-card">' +
        '<span class="card-title">' + key + '</span>' +
        '</div>';
      reference.appendChild(card);

      // sidebar
      var sidebar = document.getElementById('sidebar');
      var sidebarH6 = document.createElement('h6');
      sidebarH6.innerHTML = key;
      sidebarH6.setAttribute('id', key + '-h6');
      sidebarH6.setAttribute('class', 'util-name');
      var sidebarUL = document.createElement('ul');
      sidebarUL.setAttribute('id', key + '-list')
      sidebar.appendChild(sidebarH6);
      sidebar.appendChild(sidebarUL);


      generateUtilSection(val, key)
    })

    // write the util area
    function generateUtilSection(util, key) {
      _(util).forEach(function (val) {
        var target = document.getElementById(key + '-card');
        var utilSection = document.createElement('section');
        utilSection.setAttribute('class', 'util');
        utilSection.innerHTML = '<h5 class="util__func" id="' + val.method + '">' + val.utilArgs + '</h5>' +
        '<hr class="divider--fade" />' +
        '<p class="util__desc">' + val.description + '</p>' +
        '<div class="util__section arg ' + (val.args.length > 0 ? '' : 'hidden') + '">' +
          '<span class="bold">Arguments</span>' +
          '<ul class="arg__list">' +
            formatArgs(val.args) +
          '</ul>' +
        '</div>' + (val.returns ?
        '<div class="util__section return">' +
          '<span class="bold">Returns</span>' +
          '<p class="">' +
            '<span class="return__type">(' + val.returns.type + ') </span>' +
            '<span class="return__desc">' + val.returns.desc + '</span>' +
          '</p>' +
        '</div>' : '') + (val.example ?
        '<div class="util__section example">' +
          '<span class="bold">Example</span>' +
          '<pre class="example__code">' +
            '<code class="javascript hljs">' + val.example +
            '</code>' +
          '</pre>' +
        '</div>' : '');
        target.appendChild(utilSection);

        // populate the ul with the child list
        var targetList = document.getElementById(key + '-list');
        var list = document.createElement('li');
        list.innerHTML = '<a href="#' + val.method + '">' + val.method + '</a>';
        targetList.appendChild(list);

      });
    }

    function formatArgs(args) {
      var argsText = '';
      _(args).forEach(function (val) {
        argsText += '<li>' +
          '<span class="arg__name">' + val.param + ' </span>' +
          '<span class="arg__type">(' + val.type + ') </span>' +
          '<span class="arg__desc">' + val.description + '</span>' +
        '</li>';
      });
      return argsText;
    }

  });
})();
