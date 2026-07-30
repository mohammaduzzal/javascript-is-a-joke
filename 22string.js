// what is string?
// String হলো Character (অক্ষর)-এর একটি Collection বা Sequence।
// যে Data-এর মধ্যে লেখা (Text) থাকে, তাকে String বলে।

// JavaScript String কীভাবে Store করে?
// JavaScript এটাকে এমনভাবে কল্পনা করে—
// H   e   l   l   o
// 0   1   2   3   4
// এখানে প্রতিটি Character-এর একটি Index আছে।
// 👉 Index সবসময় 0 থেকে শুরু হয়।


// Character আর String কি আলাদা?
// অনেক Language-এ Character-এর আলাদা Data Type আছে।
// কিন্তু JavaScript-এ নেই।


// .length কী?
// .length একটি Property।
// এটি String-এর মোট Character সংখ্যা বলে।

// const language = "JavaScript";

// console.log(language.length);  //length 10 & index 0-9


// Character Access করা
// Square Bracket ব্যবহার করি।

// const language = "JavaScript";
// console.log(language[0]); //J


// যদি Index না থাকে?
// const text = "Hi";
// console.log(text[10]);  //undefined

// ⭐ সবচেয়ে গুরুত্বপূর্ণ বিষয়
// String Immutable
// Immutable মানে—
// পরিবর্তন করা যায় না।

// let name = "Bright";
// name[0] = "M";
// console.log(name); //bright (no change happened)

// তাহলে পরিবর্তন করব কীভাবে?
// নতুন String Assign করতে হবে।

// let name = "Bright";
// name = "Mright";
// console.log(name); //mright

// const favoriteLanguage = "JavaScript";
// console.log(favoriteLanguage);
// console.log(favoriteLanguage.length);
// console.log(favoriteLanguage[0]);
// console.log(favoriteLanguage[favoriteLanguage.length - 1]);

// const country = "Bangladesh";
// console.log(country[0]);
// console.log(country[1]);
// console.log(country[country.length - 1]);

// Interviewer প্রায়ই এই প্রশ্নটি করে—
// const text = "JavaScript";
// console.log(text[text.length - 1]); //t
// ⭐ এটাই হলো Last Character বের করার Professional Way।


// ===================================================================
// 🤔 Property আর Method-এর পার্থক্য কী?

// Property
// Property শুধু কোনো তথ্য (Information) দেয়।
// const text = "hello"
// console.log(text.length); //5
// এখানে .length কোনো কাজ করছে না।
// শুধু Character-এর সংখ্যা জানাচ্ছে।

// Method
// Method কোনো কাজ (Action) করে।

// const text = "hello"
// console.log(text.toUpperCase()); //HELLO
// এখানে Method String-টাকে বড় হাতের অক্ষরে পরিবর্তন করে নতুন String Return করেছে।


// ⭐ Interview Definition
// Property
// কোনো Object সম্পর্কে Information দেয়।
// Method
// কোনো Object-এর উপর Action Perform করে।

// 🎯 toUpperCase()
// এটি String-এর সব Letter-কে Capital Letter বানায়।
// 🎯 toLowerCase()
// এটি String-এর সব Letter-কে small Letter বানায়।


// ⚠️ একটি গুরুত্বপূর্ণ বিষয়

// const city = "dhaka";

// city.toUpperCase();

// console.log(city);  dhaka
// 🤔 কেন?
// কারণ String Immutable।
// toUpperCase() Original String পরিবর্তন করে না।
// এটি নতুন String Return করে।

// ঠিকভাবে লিখতে হবে—
// const city = "dhaka";
// const upper = city.toUpperCase();
// const lower = city.toLowerCase()
// console.log(upper);
// console.log(lower);


// const language = "javascript";
// console.log(language);
// console.log(language.toUpperCase());

// const email = "BRIGHT@GMAIL.COM";
// console.log(email.toLowerCase());

// ==================================================================
// concat() কী?
// concat() দুই বা ততোধিক String-কে জোড়া (Combine) দেয়।
// এটি Original String পরিবর্তন করে না, বরং নতুন String Return করে।

// const firstName = "Bright";
// const lastName = "uzzal";

// const full_name = firstName.concat(" ", lastName)
// const fullName = firstName + " " + lastName; //give same result
// const fullName = `${firstName} ${lastName}`; //give same result
// console.log(full_name);


// 🤔 charAt() কী?
// এটি নির্দিষ্ট Index-এর Character Return করে।
// const language = "JavaScript";
// console.log(language.charAt(0));

// যদি Index না থাকে? empty " " return kore


// 3. at()
// at()-ও Character Return করে।

// const language = "JavaScript";
// console.log(language.at(0));
// console.log(language.at(-1));

// 🤔 কেন at() দরকার?
// আগে Last Character বের করতে লিখতে হতো—
// language[language.length - 1]
// এখন শুধু— language.at(-1)

// ⭐ charAt()                                             at()
// Negative Index Support করে না                          Negative Index Support করে
// charAt(-1) → ""                                           at(-1) → Last Character


// indexOf() কী?
// এটি কোনো Character বা String প্রথম কোথায় পাওয়া গেছে, তার Index Return করে।

// const language = "JavaScript";

// console.log(language.indexOf("S"));

// যদি না পাওয়া যায়? -1 return kore 



// const email = "bright@gmail.com";
// if(email.indexOf("@") !== -1){
//     console.log("valid email");
// }


// const language = "JavaScript";
// console.log(language.charAt(0));
// console.log(language.at(-1));
// console.log(language.indexOf("Script"));


// 📚 Lesson Summary

// আজ আমরা শিখলাম—
// ✅ concat() → String জোড়া লাগায়।
// ✅ charAt() → নির্দিষ্ট Index-এর Character দেয়।
// ✅ at() → Character দেয় এবং Negative Index Support করে।
// ✅ indexOf() → প্রথম Match-এর Index দেয়, না পেলে -1 দেয়।


// ===================================================================
// 🤔 lastIndexOf() কী?
// indexOf() প্রথম Match-এর Index দেয়।
// lastIndexOf() শেষ Match-এর Index দেয়। যদি না পাওয়া যায়? -1 return 

// const text = "banana";
// console.log(text.indexOf("a"));
// console.log(text.lastIndexOf("a"));


// includes() কী?
// এটি Check করে কোনো String-এর মধ্যে নির্দিষ্ট Text আছে কি না। return true or false .Case Sensitive

// const language = "JavaScript";
// console.log(language.includes("Script"));

// const language = "JavaScript";
// console.log(language.startsWith("J"));


// endsWith()
// এটি Check করে String কোন Text দিয়ে শেষ হয়েছে।


// const language = "JavaScript";
// console.log(language.endsWith("pt"));


// Method	                       Return করে
// indexOf()	                   Index Number
// lastIndexOf()	               Last Index Number
// includes()	                   Boolean
// startsWith()	               Boolean
// endsWith()	                   Boolean



// const word = "programming";
// console.log(word.indexOf("m"));
// console.log(word.lastIndexOf("m"));


// const email = "bright@gmail.com";
// console.log(email.includes("@"));
// console.log(email.startsWith("bright"));
// console.log(email.endsWith(".com"));


// ========================================================
// slice() কী?
// slice() একটি String-এর নির্দিষ্ট অংশ (portion) কেটে নতুন String Return করে।
// 👉 Original String পরিবর্তন করে না।
// syntex = string(start,end)
// start = কোথা থেকে শুরু হবে।
// end = কোথায় শেষ হবে (এই Index Include হবে না)।
// যদি end না দাও,
// তাহলে String-এর শেষ পর্যন্ত কেটে নেবে।
// const text = "JavaScript";
// console.log(text.slice(0,4));
// console.log(text.slice(4));

// Negative Index (সবচেয়ে গুরুত্বপূর্ণ)
// const text = "JavaScript";
// console.log(text.slice(-5));
// Negative Index কীভাবে কাজ করে?
// J  a  v  a  S  c  r  i  p  t
// 0  1  2  3  4  5  6  7  8  9

// -10 ................. -1

// অর্থাৎ
// -1 = t
// -2 = p
// -3 = i


// substring()
// substring()-ও String-এর অংশ কেটে দেয়।
// const text = "JavaScript";
// console.log(text.substring(0,4));
// দেখতে slice()-এর মতোই।
// কিন্তু পার্থক্য কোথায়?
// ⭐ Negative Index Support করে না।
// console.log(text.substring(-1)); //javscript কেন? -1 takes its as 0
// আরেকটা গুরুত্বপূর্ণ বিষয়
// যদি
// substring(7,2)
// লেখো,
// JavaScript নিজেই Swap করে নেয়।
// মানে
// substring(2,7)

// console.log(text.substring(7,2)); //vaScr

// const country = "Bangladesh";
// console.log(country.slice(0,6));
// console.log(country.slice(6));

// const language = "JavaScript";
// console.log(language.slice(-6));
// console.log(language.substring(0,4));


// const text = "JavaScript";

// console.log(text.slice(4, 4)); // ""
// console.log(text.substring(4, 4)); // ""

// const text = "JavaScript";

// console.log(text.slice(7, 2)); //""
// console.log(text.substring(7, 2)); //vaScr

// slice() Start > End হলে Empty String দেয়।
// substring() Start এবং End Swap করে।