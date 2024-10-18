import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Old_Standard_TT} from 'next/font/google';

const font = Old_Standard_TT({
    subsets: ['latin'],
    weight: ['400'],
    style: ['italic'],
});

export default function UserAnswerCard({ data }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => {
        setIsFlipped((prev) => !prev);
    };

    const isCorrect = data.mean.includes(data.answer);

    let className = 'text-2xl border rounded-lg p-10 shadow-md w-full text-center';
    if (isCorrect) {
        className += ' shadow-green-300 bg-green-50';
    } else {
        className += ' shadow-red-300 bg-red-50';
    }

    let userAnswerClassName = 'text-xs md:text-sm';
    if (isCorrect) {
        userAnswerClassName += ' hidden';
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} infinite={true}>
            <div className="mt-16 flex items-center justify-center cursor-pointer w-full" onClick={flipCard}>
                <div className={className}>
                    <span className={font.className}>{ data.word }</span>
                </div>
            </div>

            <div className="mt-16 flex items-center justify-center cursor-pointer w-full" onClick={flipCard}>
                <div className={className}>
                    <div>{ data.mean[0] }</div>
                    <div className={userAnswerClassName}>{ data.answer }</div>
                </div>
            </div>
        </ReactCardFlip>
    );
}
