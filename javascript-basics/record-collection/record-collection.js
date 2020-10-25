// Setup
const collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function getRecordObject(object, id) {
  return object[id];
}

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (value === '') delete object[id][prop];
  else if (prop === 'tracks') {
    // because this is a truthy expression, it is possible to 
    // insert the empty array if object[id][prop] is falsy
    object[id][prop] = object[id][prop] || []; 
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  }
  return object;
}

module.exports = {
  updateRecords,
  getRecordObject,
  collection
};
