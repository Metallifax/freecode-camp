// Setup
var contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin']
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['JavaScript', 'Gaming', 'Foxes']
  }
];


function lookUpProfile(name, prop){
  let contact = contacts.find(contact => contact.firstName === name);
  
  if (contact) {
    if (prop === 'lastName' || prop === 'number' || prop === 'likes') {
      return contact[prop];
    }
    return 'No such property';
  }
  return 'No such contact';
}

// lookUpProfile("Akira", "likes");

// eslint-disable-next-line no-undef
module.exports = {
  contacts,
  lookUpProfile
};