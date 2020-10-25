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

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (prop === 'artist' && value != '') {
    object[id][prop] = value;
  } else if (prop === 'artist' && value === '') {
    delete object[id][prop]; 
  } else if (prop === 'tracks' && object[id]['tracks'] === undefined){
    object[id]['tracks'] = [];
    object[id]['tracks'].push(value);
  } else if (prop === 'tracks' && value != '') {
    object[id]['tracks'].push(value);
  } else if (prop === 'albumTitle') {
    object[id][prop] = value;
  } 

  return object;
}

updateRecords(collection, 2548, 'artist', '');
console.log(collection);