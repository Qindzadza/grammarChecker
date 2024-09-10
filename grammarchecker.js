let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";
// console.log(storyWords);
// For each word in the storyWords array, we want the count variable to increment by one.Add a parameter named word to the callback function of the .forEach() method to be used to store the current element when iterating over the storyWords array. Each time storyWord iterates, increment count by one.Below the .forEach() method, log count to see how many words are in the story.
count = 0;
storyWords.forEach((word) => {
  return count++;
});
// For a better visual comparison of the original and edited stories, we want to view the edited storyWords array as a string. To change the storyWords array back into a readable string, we can invoke the .join() method on storyWords.
console.log(storyWords.join(" "));
console.log(count);
// Below the storyWords variable declaration, notice the variable unnecessaryWord on line 4. We want to filter out the value of unnecessaryWord from the story.Within the filter() method’s callback function body, return word only if it is NOT equal to unnecessaryWord.Check the story string in the console to make sure it doesn’t include the word “literally”. The first instance of “literally” was previously in the first sentence.

// storyWords=storyWords.filter(word=>{
//   if(word!==unnecessaryWord){
//     return word;
//   }
// })
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});
let bedWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
console.log(bedWordIndex);
storyWords[78] = "really";
let lengthCheck=storyWords.every(word=>{
  return word.length<=10 
});
storyWords.forEach((word)=>{
   word.length>10  && console.log(word)
});
console.log(lengthCheck)
console.log(storyWords.join(" "));

