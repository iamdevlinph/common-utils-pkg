(function () {
  // $.getJSON('./mapped_source.json', function (data) {
  //   var utilsList = $('ul#utils-list');
  //   var utilsListCode = $('code#utils-list-code');
  //   var utilArray = [];
  //   _.forOwn(data, function (data, key) {
  //     utilArray.push('<li>- ' + key + '</li>')
  //   });
  //   utilsList.append(utilArray);
  //   utilsListCode.html('&#x3C;script&#x3E;\n' +
  //     generateUtilsCode(data) +
  //     '&#x3C;/script&#x3E;')

  //   function generateUtilsCode(utilArray) {
  //     var arr = [];
  //     _.forEach(utilArray, function (data, key) {
  //       arr.push('<span class="hljs-keyword">const ' + key + '</span> = window[<span class="red-code">\'common-utils-pkg\'</span>].' + key + '\n');
  //     })
  //     return arr.join('');
  //   }
  // });
})();
