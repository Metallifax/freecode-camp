function updateRecords(object, id, prop, value) {
  if (value === '') delete object[id][prop];
  else if (prop === 'tracks') {
    object[id][prop] = object[id][prop] || [];
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  }

  return object;
}