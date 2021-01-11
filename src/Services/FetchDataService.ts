import { shuffleArray } from './ShuffleService';
import {Difficulty, Question} from '../Shared/Types'

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    
    const data = await (await fetch(endpoint)).json();
    console.dir(data);
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}