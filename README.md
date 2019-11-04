# nextjs_flashcards
Teach yourself difficult concepts using the old time tested flashcard method!

This simple flashcard app was built in React.js and [next.js](https://nextjs.org/learn/basics/getting-started).  It does not have any global state management, so the cards are random and will repeat themselves (just like shuffling a real deck).

## Getting Started
1. Clone the repo locally.

   `git clone https://github.com/binxor/nextjs_flashcards.git`

2. In the project root directory, install the dependencies.

   `npm i`

3. Start the app!

   `npm run dev`

4. Navigate to `http://localhost:3000/` in your browser. 

5. Click on the card to see the answer, and the `Next` button to move forward!


## How To Customize Your Flashcards
The app comes with an extensible default set of data.  Enhance your learning by adding to it!

You will find the flashcard contents stored in `data/flashcardData.json`.  The default dataset describes HTTP Authorization, since this app was originally developed to assist the author in memorizing authorization schemes.  

## Upcoming Features
Additional functionality would make this app even better.  Some upgrades I'd like to add:
* Option to remove cards during play
* Categories to pick from
* Multichoice answers for each card
* Gamified Scoring for right/wrong answers
