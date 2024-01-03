const name = "manali"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`hey add some data ${name} number ${repoCount}`);

const gameName = new String('Manali')
console.log(gameName.__proto__);
console.log(gameName[1])
console.log(gameName.length)
console.log(gameName.charAt(2))

const newString = gameName.substring(0, 4)
console.log(newString)

const newString1 = gameName.slice(-5, 4)
console.log(newString1)

const newString2 = "    manali   "
console.log(newString2);
console.log(newString2.trim());

const url = "https:''mn.com/man%20add"
console.log(url.replace('%20', '_'))


console.log(gameName.split('_'))