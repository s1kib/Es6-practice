// // Old System
// const friends = ['sabbu', 'tabbu', 'dabbu'];
// const cousins = ['tuna', 'tunu', 'mona', 'monu']
// const oldFriends = ['ibru', 'hibru', 'nibba', 'nibbi'];
// const allName = friends.concat(cousins).concat('my name is Khan') .concat(oldFriends);
// // console.log(allName);

// In Es6 
const friends = ['sabbu', 'tabbu', 'dabbu'];
const cousins = ['tuna', 'tunu', 'mona', 'monu']
const oldFriends = ['ibru', 'hibru', 'nibba', 'nibbi'];
const allName = [...friends, ...cousins, 'my name is sakib',...oldFriends];
// console.log(allName);
const programmer = 850;
const buiesness = 750;
const teacher = 650;
const takapoisWala = [450,650,745,850];
const result = Math.max(...takapoisWala);
 console.log(result);