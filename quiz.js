
const div = document.querySelector('div')

// const getQusetion = async ()=>{
// try {
//     const res = await axios('https://the-trivia-api.com/v2/questions')
//     res.data.map((item) => {
//         div.innerHTML += `
//         <h1>${item.question}</h1>
//         <p style="color: black;">${item.incorrectAnswers}</p>`
//     });
// } catch (error) {
//     console.log(error)
    
// }
//     console.log(res.data)
// }
// getQusetion()

// const div = document.querySelector('#quiz-container');

const getQuestions = async () => {
    try {
        const res = await axios('https://the-trivia-api.com/v2/questions');
        res.data.forEach((item) => {
            div.innerHTML += `
                <h1>${item.question.text}</h1>
                <ul>
                    ${item.incorrectAnswers.map(answer => `<li style="color: black;">${answer}</li>`).join('')}
                </ul>
            `;
        });
        console.log(res.data);
    } catch (error) {
        console.error('Error fetching the questions:', error);
    }
};

getQuestions();




