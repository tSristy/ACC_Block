import { useState } from 'react';
import './styleFAQ.css';

const FAQItem = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "How many programmers does it take to screw a lightbulb?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaatis quam.",
            open: true
        },
        {
            question: "Who is the most awesome person?",
            answer: "You! The viewer!",
            open: false
        },
        {
            question:
                "How many questions does it take to makes a succesful FAQ Page?",
            answer: "This many!",
            open: false
        }
    ]);


    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const FAQ = ({ faq, index, toggleFAQ }) => {
        return (
            <div
                className={"faq " + (faq.open ? "open" : "")}
                key={index}
                onClick={() => toggleFAQ(index)}
            >
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">{faq.answer}</div>
            </div>
        );
    };

    return (
        <div className="faqs">
            {faqs.map((faq, index) => (
                <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
        </div>
    );
};

export default FAQItem;