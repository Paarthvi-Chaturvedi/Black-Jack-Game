# 🃏 BlackJack Game
 
A browser-based Blackjack card game built with HTML, CSS, and JavaScript.
 
## How to Play
 
1. Click **Start Game** to be dealt two cards
2. Your score is calculated instantly
3. Click **Draw Card** to draw another card
4. Try to get as close to **21** as possible without going over
5. Hit exactly **21** and you've got BlackJack! 🎉
## Game Rules
 
- All face cards (Jack, Queen, King) count as **10**
- Aces count as **1**
- Cards 2–10 are their **face value**
- Score **21** → BlackJack — you win!
- Score **over 21** → Bust — game over
- Score **under 21** → Keep drawing or hold
## Features
 
- Random card drawing on every turn
- Real-time score tracking
- Win/bust/continue message feedback
- Casino-style green felt background
## Built With
 
- **HTML** — game structure and UI elements
- **CSS** — styling, background image, goldenrod theme
- **JavaScript** — game logic, DOM manipulation, event listeners
## Project Structure
 
```
blackjack/
├── index.html   # Game layout and elements
├── script.js    # Game logic and event handling
├── style.css    # Styles and background
└── poker.jpg    # Background image
```
 
## Getting Started
 
No installation or dependencies needed.
 
1. Clone the repository
```bash
   git clone https://github.com/your-username/blackjack.git
```
2. Open `index.html` in your browser and start playing

## What I Learned

- Managing game state with variables (`isAlive`, `hasBlackJack`, `score`)
- Generating random numbers with `Math.random()` and `Math.floor()`
- Updating the DOM dynamically using `textContent`
- Handling multiple button interactions with event listeners
- Conditionally controlling game flow based on state

## Demo
<img width="971" height="620" alt="Blackjack" src="https://github.com/user-attachments/assets/cbace61a-7439-4761-9bf5-8e1ea498418c" />
