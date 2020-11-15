const people = [];
  people.push ({firstName: 'Akira', lastName: 'Laine', number: '0543236543', likes: ['Pizza', 'Coding', 'Brownie Points'],});
  people.push ({firstName: 'Harry', lastName: 'Potter', number: '0994372684', likes: ['Hogwarts', 'Magic', 'Hagrid'],});
  people.push ({firstName: 'Sherlock', lastName: 'Holmes', number: '0487345643', likes: ['Intriguing Cases', 'Violin'],});
  people.push ({firstName: 'Kristian', lastName: 'Vos', number: '0487345643', likes: ['Javascript', 'Gaming', 'Foxes'],});

  function lookUpProfile (firstName, prop) {
    for(let i=0; i<people.length; i++){
    if (people[i].firstName == firstName) {
      if (people[i][prop] == firstName[prop]) {
      return "No such property"
    }
    return people[i][prop]
  }
  }
  return "No such contact";
}
 console.log(lookUpProfile('Harry', 'lastName'))