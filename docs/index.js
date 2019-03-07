(function () {
  // generate list of available utilities
  $.getJSON('./mapped_source.json', function (data) {
    var targetList = $('ul#avail-utils');
    var utilArray = [];
    _.forOwn(data, function (data, key) {
      utilArray.push('<li>- ' + key + '</li>')
    });
    targetList.append(utilArray)
  })
})();
