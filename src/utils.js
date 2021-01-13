const makeRandomLights = (lights_number) => {
  const lights = {}
  for(let i=1; i <= lights_number; i++){
    lights['intersection'+i] =
      [
        makeRandomlightCode(),
        makeRandomlightCode(),
        makeRandomlightCode(),
        makeRandomlightCode()
      ]
  }
  return lights
}

const makeRandomlightCode = () => {
  let code = '';
  (getRandomInt(0,1))&&(code+='R');
  (getRandomInt(0,1))&&(code+='L');
  (getRandomInt(0,1))&&(code+='F');
  return code;
}

const getRandomRoad = (road_array) => {
  return road_array[getRandomInt(1, road_array.length)-1]
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const setLightsOnWorld = (world, lights) => {
  Object.keys(lights).forEach( key => {
    if (world.intersections.all()[key])
      world.intersections.all()[key].controlSignals.setStringStates(lights[key])
  })
}

const lockWorld = (world) => {
  const intersections = world.intersections.all()
  Object.keys(intersections).forEach( key => {
    intersections[key].controlSignals.setStringStates(['', '', '', ''])
  })
}

const releaseWorld = (world) => {
  const intersections = world.intersections.all()
  Object.keys(intersections).forEach( key => {
    intersections[key].controlSignals.setStringStates(['LFR', 'LFR', 'LFR', 'LFR'])
  })
}

module.exports = {
  makeRandomLights,
  setLightsOnWorld,
  lockWorld,
  releaseWorld,
  getRandomRoad
}
