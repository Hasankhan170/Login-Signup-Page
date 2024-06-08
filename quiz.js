
const div = document.querySelector('div')


// Function to shuffle an array
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

const getQuestions = async () => {
    try {
        const res = await axios('https://the-trivia-api.com/v2/questions');
        res.data.forEach(item => {
            // Combine correct and incorrect answers
            const answers = [...item.incorrectAnswers, item.correctAnswer];
            // Shuffle the combined list
            shuffle(answers);

            // Build the HTML for the question and shuffled answers
            const answersHTML = answers.map(answer => `<li style="color: black;">${answer}</li>`).join('');

            div.innerHTML += `
                <h1>${item.question.text}</h1>
                <ol>
                    ${answersHTML}
                </ol>
            `;
        });
        console.log(res.data);
    } catch (error) {
        console.error('Error fetching the questions:', error);
    }
};

getQuestions();




