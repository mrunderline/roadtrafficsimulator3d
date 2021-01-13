const map_1 = `{
    "intersections": {
      "intersection1": {
        "id": "intersection1",
        "rect": {
          "x": 70,
          "y": 0,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection2": {
        "id": "intersection2",
        "rect": {
          "x": -140,
          "y": 0,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection3": {
        "id": "intersection3",
        "rect": {
          "x": -140,
          "y": -140,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection4": {
        "id": "intersection4",
        "rect": {
          "x": -140,
          "y": 70,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection5": {
        "id": "intersection5",
        "rect": {
          "x": 70,
          "y": 70,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection6": {
        "id": "intersection6",
        "rect": {
          "x": 70,
          "y": -140,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection7": {
        "id": "intersection7",
        "rect": {
          "x": 140,
          "y": -140,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection8": {
        "id": "intersection8",
        "rect": {
          "x": 140,
          "y": 0,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection9": {
        "id": "intersection9",
        "rect": {
          "x": 140,
          "y": 70,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection10": {
        "id": "intersection10",
        "rect": {
          "x": 210,
          "y": 0,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      },
      "intersection11": {
        "id": "intersection11",
        "rect": {
          "x": -140,
          "y": 140,
          "_width": 14,
          "_height": 14
        },
        "controlSignals": {
          "flipMultiplier": 0.24444228612938024,
          "phaseOffset": 21.747548818024587
        }
      }
    },
    "roads": {
      "road1": {
        "id": "road1",
        "name": "آزادی",
        "source": "intersection1",
        "target": "intersection2",
        "max_speed": 10
      },
      "road2": {
        "id": "road2",
        "name": "آزادی",
        "source": "intersection2",
        "target": "intersection1",
        "max_speed": 10
      },
      "road3": {
        "id": "road3",
        "name": "تونل توحید",
        "source": "intersection2",
        "target": "intersection3",
        "max_speed": 10
      },
      "road4": {
        "id": "road4",
        "name": "تونل توحید",
        "source": "intersection3",
        "target": "intersection2",
        "max_speed": 10
      },
      "road5": {
        "id": "road5",
        "name": "توحید",
        "source": "intersection2",
        "target": "intersection4",
        "max_speed": 10
      },
      "road6": {
        "id": "road6",
        "name": "توحید",
        "source": "intersection4",
        "target": "intersection2",
        "max_speed": 10
      },
      "road7": {
        "id": "road7",
        "name": "جمهوری اسلامی",
        "source": "intersection4",
        "target": "intersection5",
        "max_speed": 10
      },
      "road8": {
        "id": "road8",
        "name": "جمهوری اسلامی",
        "source": "intersection5",
        "target": "intersection4",
        "max_speed": 10
      },
      "road9": {
        "id": "road9",
        "name": "کارگر جنوبی",
        "source": "intersection1",
        "target": "intersection5",
        "max_speed": 10
      },
      "road10": {
        "id": "road10",
        "name": "کارگر جنوبی",
        "source": "intersection5",
        "target": "intersection1",
        "max_speed": 10
      },
      "road11": {
        "id": "road11",
        "name": "کارگر شمالی",
        "source": "intersection1",
        "target": "intersection6",
        "max_speed": 10
      },
      "road12": {
        "id": "road12",
        "name": "کارگر شمالی",
        "source": "intersection6",
        "target": "intersection1",
        "max_speed": 10
      },
      "road13": {
        "id": "road13",
        "name": "بولوار کشاورز",
        "source": "intersection7",
        "target": "intersection6",
        "max_speed": 10
      },
      "road14": {
        "id": "road14",
        "name": "بولوار کشاورز",
        "source": "intersection6",
        "target": "intersection7",
        "max_speed": 10
      },
      "road15": {
        "id": "road15",
        "name": "انقلاب اسلامی",
        "source": "intersection8",
        "target": "intersection1",
        "max_speed": 10
      },
      "road16": {
        "id": "road16",
        "name": "انقلاب اسلامی",
        "source": "intersection1",
        "target": "intersection8",
        "max_speed": 10
      },
      "road17": {
        "id": "road17",
        "name": "شانزده آدر",
        "source": "intersection7",
        "target": "intersection8",
        "max_speed": 10
      },
      "road18": {
        "id": "road18",
        "name": "شانزده آذر",
        "source": "intersection8",
        "target": "intersection7",
        "max_speed": 10
      },
      "road19": {
        "id": "road19",
        "name": "دوازده فروردین",
        "source": "intersection9",
        "target": "intersection8",
        "max_speed": 10
      },
      "road20": {
        "id": "road20",
        "name": "دوازده فروردین",
        "source": "intersection8",
        "target": "intersection9",
        "max_speed": 10
      },
      "road21": {
        "id": "road21",
        "name": "جمهوری",
        "source": "intersection9",
        "target": "intersection5",
        "max_speed": 10
      },
      "road22": {
        "id": "road22",
        "name": "جمهوری",
        "source": "intersection5",
        "target": "intersection9",
        "max_speed": 10
      },
      "road23": {
        "id": "road23",
        "name": "انقلاب",
        "source": "intersection8",
        "target": "intersection10",
        "max_speed": 10
      },
      "road24": {
        "id": "road24",
        "name": "انقلاب",
        "source": "intersection10",
        "target": "intersection8",
        "max_speed": 10
      },
      "road25": {
        "id": "road25",
        "name": "توحید جنوبی",
        "source": "intersection4",
        "target": "intersection11",
        "max_speed": 10
      },
      "road26": {
        "id": "road26",
        "name": "توحید جنوبی",
        "source": "intersection11",
        "target": "intersection4",
        "max_speed": 10
      }
    },
    "specialCars" : {
      "spcar01":{
        "id": "car01",
        "type": "bus",
        "length": 10,
        "width": 2,
        "name": "Bus1",
        "carImage":"images/bus.png"
      },
      "spcar02":{
        "id": "car02",
        "type": "motorcycle",
        "length": 4,
        "width": 1.7,
        "name": "Bus2",
        "carImage": "images/motorcycle.png"
      },
      "spcar03":{
        "id": "car03",
        "type": "bus",
        "length": 10,
        "width": 2,
        "name": "Bus3",
        "carImage":"images/bus.png"
      },
      "spcar04":{
        "id": "car04",
        "type": "motorcycle",
        "length": 4,
        "width": 2,
        "name": "Bus4",
        "carImage":"images/motorcycle.png"
      },
      "spcar05":{
        "id": "car05",
        "type": "ambulance",
        "length": 8,
        "width": 2.1,
        "name": "Bus4",
        "carImage":"images/amb.png"
      },
      "spcar06":{
        "id": "car06",
        "type": "ambulance",
        "length": 8,
        "width": 2.1,
        "name": "Bus4",
        "carImage":"images/amb.png"
      },
      "spcar07":{
        "id": "car07",
        "type": "police",
        "length": 5,
        "width": 2,
        "name": "Bus4",
        "carImage":"images/police.png"
      },
      "spcar08":{
        "id": "car08",
        "type": "police",
        "length": 5,
        "width": 2,
        "name": "Bus4",
        "carImage":"images/police.png"
      },
      "spcar09":{
        "id": "car09",
        "type": "taxi",
        "length": 5,
        "width": 1.6,
        "name": "Bus4",
        "carImage":"images/taxi.png"
      },
      "spcar10":{
        "id": "car10",
        "type": "taxi",
        "length": 5,
        "width": 1.6,
        "name": "Bus4",
        "carImage":"images/taxi.png"
      }
    },
    "carsNumber": 45,
    "time": 10,
    "start_lane_ids": [
      "road4",
      "road24",
      "road26"
    ]
  }`;
// console.log(JSON.parse(data))
module.exports = {
  map_1,
  map_1_js: JSON.parse(map_1)
}
