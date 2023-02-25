ymaps.ready(init);

async function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 3,
  });

  let geoObjects = [];
  const { geolocation } = ymaps;
  const result = await geolocation.get({
    provider: 'yandex',
    mapStateAutoApply: true,
  });
  const res = result.geoObjects.position;

  const data = { a: Number(res[0]), b: Number(res[1]) };
  console.log(data);
  const response = await fetch("/pos", {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  const resGeo = await response.json()
  console.log(resGeo);
  clusterer = new ymaps.Clusterer({
    preset: 'islands#invertedVioletClusterIcons',
    groupByCoordinates: false,
    clusterDisableClickZoom: true,
    clusterHideIconOnBalloonOpen: false,
    geoObjectHideIconOnBalloonOpen: false,
  }),
  getPointOptions = function () {
    return {
      preset: 'islands#violetIcon',
    };
  },
  clusterer.options.set({
    gridSize: 80,
    clusterDisableClickZoom: true,
  });
  for (let i = 0, len = resGeo.length; i < len; i++) {
    geoObjects[i] = new ymaps.Placemark(resGeo[i], getPointOptions());
  }
  clusterer.add(geoObjects);
  myMap.geoObjects.add(clusterer);
  myMap.setBounds(clusterer.getBounds(), {
    checkZoomRange: true,
  });
}
