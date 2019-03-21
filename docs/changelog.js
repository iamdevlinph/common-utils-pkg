(function () {
  $.getJSON('./changelog.json', function (data) {
    var changeLogElem = document.getElementById('changelog-section');
    _.orderBy(data, ['version'], ['desc']).forEach(function (val) {
      console.log(val);
      var versionItem = document.createElement('div');
      var versionNumber = document.createElement('h5');
      var versionDescList = document.createElement('ul');
      versionDescList.setAttribute('class', 'styled');

      val.description.forEach(function (desc) {
        var versionDescItem = document.createElement('li');
        versionDescItem.innerHTML = desc;
        versionDescList.appendChild(versionDescItem);
      });

      versionNumber.innerHTML = val.version;
      versionItem.appendChild(versionNumber);
      versionItem.appendChild(versionDescList);
      changeLogElem.appendChild(versionItem);
    });

  });
})();
