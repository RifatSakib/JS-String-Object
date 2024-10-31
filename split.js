const address = "Noyakhali";
const part = address.slice(2,5);
console.log(part);


const sentence = 'I am a good and hardwowing person';

console.log(sentence.split(' ')); // protita empty string (space) onuzayi vaag korbe

console.log(sentence.split('')); // protita charecter onuziyi vaag korbe
console.log(sentence.split('a')); // protita a charecter onuziyi vaag korbe


const friendStr= 'rakib,sakib,kamal,jamal,rashed';
const friends = friendStr.split(',');

console.log(friends);



const realFriend = ['rakib','sakib','kamal','jamal','rashed']
console.log(realFriend.join());
console.log(realFriend.join(" "));
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));




