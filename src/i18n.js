import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Hello!',
          // Other English translations...
        },
      },
      bn: {
        translation: {
          "Competitive Programming": 'কম্পিটিভ প্রোগ্রামিং',
          "How to Start ?": 'কিভাবে শুরু করব ?',
          "Motivation": 'প্রেরণা',
          "Who am I?": 'আমি কে?',
          "Learning C Programming and Starting Basic Problem Solving": 'সি প্রোগ্রামিং শেখা এবং প্রাথমিক সমস্যা সমাধান শুরু করা',
          "Apart from learning all the above topics, problem solving practice should be done on Different Online Jude. You can start practice from beecrowd. It is one of the easiest online judge. It was previously named URI. I started my competitive programming journey from here.": 'উপরের সব Topic শিখার পাশা পাশি Different Online Jude এ Problem Solving Practice করতে হবে। তোমরা beecrowd থেকে Practice শুরু করতে পার। এটা One of The Easiest Online Judge. এর নাম আগে URI ছিল। আমি এখান থেকেই আমার Competitive programming Journey শুরু করেছি।',
          "First learn C programming well by watching a good book or video. I would suggest Herbert Scheldts Teach Yourself C book. From this book: printf / scanf ( I/O ), if-else, while loop, for loop, do-while loop, array/string, function, recursion, structure, file, pointer. Learn these topics serially well. You can watch this video of mine for Recursion:": 'প্রথমে কোনো ভাল বই অথবা ভিডিও দেখে ভাল করে C programming টা শিখে ফেল। আমি Suggest করব Herbert Scheldt এর Teach Yourself C বইটা। এই বই থেকে : printf / scanf ( I/O ),  if-else, while loop, for loop, do-while loop, array / string, function, recursion, structure, file, pointerএই Topic গুলা Serially ভাল করে শিখে নিবে। Recursion এর জন্য আমার এই ভিডিও টি দেখতে পার :',
          "I have written in many details how a beginner can start from Competitive Programming Zero, how to practice in Codeforces, how to learn different topics Step by Step, and from where to learn. How a Beginner Codeforces 0 Rating will be 1600+ (Expert) in Codeforces and also Basic Topics : C Programming, C++ STL, Greedy, Bruteforce, Constructive Algorithm, Partial Sum, Binary Search, Number Theory, Basic Graph Theory, Basic I have discussed in details when, how and where to learn Dynamic Programming. The blog is a little big because the 0 to 1600 journey is also a little long. So be patient and read the whole thing well.": 'আমি একজন Beginner কিভাবে Competitive Programming Zero থেকে শুরু করবে, কিভাবে Codeforces এ Practice করবে, কিভাবে Step by Step different topics শিখবে, আর কোথা থেকে শিখবে সব অনেক Details এ লিখেছি। কিভাবে একজন Beginner Codeforces 0 Rating থেকে শুরু করে Codeforces এ 1600+ ( Expert ) হবে আর পাশা পাশি Basic Topics : C Programming, C++ STL, Greedy, Bruteforce, Constructive Algorithm, Partial Sum, Binary Search, Number Theory, Basic Graph Theory, Basic Dynamic Programming কখন, কভাবে, কোথা থেকে শিখবে তা Details এ আলোচনা করেছি। Blog টি একটু বড় কারণ 0 to 1600 Journey টাও একটু Long. তাই একটু ধৈর্য ধরে পুরাটা ভাল করে পড়বে।',
          "A beginner faces many problems when he starts or wants to start competitive programming. How to start, from where to practice, after what to learn, from where to learn, how to improve, how long to think about a problem, many more. I have written this blog as an answer to all these questions and a basic guideline for a beginner. However, this blog does not have to be strictly followed. Because everyones style of improvement is not the same. So take this blog as a standard and you will develop it as your own. However, if you strictly follow this blog, there will be improvement in Sha Allah. So lets get started.": 'একজন Beginner যখন Competitive Programming শুর করে অথবা শুর করতে চায় তখন সে অনেক গুলি সমস্যা এর সম্মুখীন হয়। কিভাবে শুরু করবে, কোথা থেকে Practice করবে, কিসের পর কি শিখবে, কোথা থেকে শিখবে, কিভাবে Improvement করব, একটা Problem নিয়ে কতক্ষণ চিন্তা করব, আরও অনেক কিছু। এই সব Question এর Answer, আর একজন Beginner এর জন্য একটা Basic Guideline হিসেবে আমি এই Blog টি লিখেছি। তবে এই Blog কে একদম Strictly Follow করতে হবে এমন না। কারণ সবার Improvement এর Style একি না। তাই এই Blog কে Standard ধরে তুমি তোমার নিজের মত আগাবে। তবে এই Blog কে Strictly Follow করলেও ইন শা আল্লাহ Improvement হবে। তাহলে চলুন শুরু করা যাক।',
          // Other Bengali translations...
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
