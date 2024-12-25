# JavaScript Quiz Application

This project is a fully functional quiz application built with JavaScript, HTML, and CSS. It allows users to take a quiz, track their progress, and view their results.

## Features

- **User Input**: Users can input their name and index number to start the quiz.
- **Dynamic Questions**: The quiz dynamically loads questions and answers from a predefined set.
- **Timer**: A built-in timer tracks the time taken to complete the quiz.
- **Navigation**: Users can navigate between questions using "Next" and "Previous" buttons.
- **Score Calculation**: Points are awarded for each correct answer, and the total score is displayed at the end.
- **Session Storage**: User details and scores are stored in session storage for persistence during the quiz.

## Project Structure

```
.
├── index.html           # Welcome Page
├── quiz.html            # Quiz Page
├── end.html             # Results Page
├── dist
│   ├── css
│   │   └── style.css    # Styling for the application
│   └── js
│       ├── start.js     # Handles user input on the welcome page
│       ├── site.js      # Main quiz logic
│       ├── timer.js     # Timer functionality
│       └── userInfo.js  # Displays user information
├── README.md            # Project documentation
```

## How It Works

1. **Welcome Page**
   - The user enters their name and index number.
   - Clicking the "Start Quiz" button navigates to the quiz page.

2. **Quiz Page**
   - Questions are displayed one at a time.
   - Users can select an answer and navigate between questions.
   - A timer runs during the quiz, and the time taken is recorded.

3. **Results Page**
   - Displays the user's name, total points scored, and time taken.
   - Fetches data from session storage to populate the results.

## Key JavaScript Functions

- **`submitForm(e)`**: Captures user input and stores it in session storage.
- **`show(count)`**: Displays the current question and its options.
- **`toggleActive()`**: Highlights the selected option for a question.
- **`next()`**: Moves to the next question, calculates points for the current question, and handles the end of the quiz.
- **`previous()`**: Moves to the previous question.
- **`submit()`**: Ends the quiz and redirects to the results page.
- **`timer.js`**: Manages the quiz timer and redirects the user to the results page when time is up.

## How to Run

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.

## Dependencies

- [Font Awesome](https://fontawesome.com/) for icons.

## Customization

- Add or modify questions in the `questions` array within `site.js`.
- Adjust styles in `style.css` to change the appearance.
- Update time limits in `timer.js` as needed.

## Example Question Object

```javascript
{
  id: 1,
  question: "Which layer of the uterus is shed during menstruation?",
  answer: "Endometrium",
  options: [
    "Perimetrium",
    "Myometrium",
    "Endometrium",
    "Ectometrium"
  ]
}
```

## License

This project is open-source and available under the [MIT License](LICENSE).
