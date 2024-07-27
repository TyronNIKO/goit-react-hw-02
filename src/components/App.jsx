// src/App.jsx

import {useEffect, useState} from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

const App = () => {
    const [feedback, updateFeedback] = useState(() => {
        // Зчитуємо значення за ключем
        const savedFeedback = window.localStorage.getItem("feedback");
        // Якщо там щось є, повертаємо це
        // значення як початкове значення стану
        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }

        // У протилежному випадку повертаємо
        // яке-небудь значення за замовчуванням
        return {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    });
    useEffect(() => {
        window.localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);
    const setFeedback = e => {
        // Тут використовуй сеттер, щоб оновити стан
        console.log(feedback, e.target.name);
        updateFeedback(feedback => ({
            ...feedback,
            [e.target.name]: feedback[e.target.name] + 1,
        }));
    };
    const resetFeedback = () => {
        updateFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    return (
        <>
            <Description title="Sip Happens Café" descr="Please leave your feedback about our service by selecting one of the options below." />
            <Options update={setFeedback} reset={resetFeedback} />
            <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
        </>
    );
};

export default App;
