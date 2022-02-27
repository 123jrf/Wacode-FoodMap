class Question {
    constructor (question, answer){
        this.question = question;
        this.answer = answer;
    }
}

question_test = new Question();
question_test.question = 123;
question_test.answer = 90;

console.log(question_test.question);