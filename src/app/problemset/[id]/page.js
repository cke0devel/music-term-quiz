'use client';

import { useState, useRef } from 'react';

import { useParams, useRouter } from 'next/navigation';
import { Old_Standard_TT} from 'next/font/google';
import ProgressBar from '@components/ProgressBar.js';
import ReactCardFlip from 'react-card-flip';

import { ProblemSetData } from '@data/ProblemSet.js';

const font = Old_Standard_TT({
    subsets: ['latin'],
    weight: ['400'],
    style: ['italic'],
});

function shuffle(array) {
    return array.toSorted(() => Math.random() - 0.5);
}

export default function ProblemSet() {
    const params = useParams();
    const router = useRouter();

    const answerInputRef = useRef(null);

    const [currentAnswer, setCurrentAnswer] = useState('');

    const [isFlipped, setIsFlipped] = useState(false);
    const flipWordCard = () => {
        //setIsFlipped((prev) => !prev);
    };

    const problemData = ProblemSetData.find((set) => set.id == params.id);
    //const words = shuffle(problemData.dictionary);
    const words = problemData.dictionary;

    const [userAnswerData, setUserAnswerData] = useState([]);

    const [progress, setProgress] = useState(parseInt(100 / words.length));

    const [currentWordIdx, setCurrentWordIdx] = useState(0);
    const moveToNextWord = () => {
        if (currentWordIdx+1 < words.length) {
            setUserAnswerData((prev) => prev.concat([{
                word: words[currentWordIdx].word,
                mean: words[currentWordIdx].mean,
                answer: (' ' + currentAnswer).slice(1),
            }]));

            setCurrentAnswer(() => '');

            setCurrentWordIdx((prev) => {
                const nextIdx = prev + 1;

                setProgress(() => parseInt((nextIdx+1)*100 / words.length) );

                return nextIdx;
            });

            answerInputRef.current.focus();
        } else {
            const finalUserAnswer = userAnswerData.concat([{
                word: words[currentWordIdx].word,
                mean: words[currentWordIdx].mean,
                answer: (' ' + currentAnswer).slice(1),
            }]);

            window.sessionStorage.setItem('userAnswerData', JSON.stringify(finalUserAnswer));
            router.push(`/problemset/${params.id}/result`);
        }
    };

    const onKeyDownOnAnswerInput = (key) => {
        if (key==="Enter" && currentAnswer!='') {
            moveToNextWord();
        }
    };

    return (
        <div className="static mx-7 md:mx-16 my-6">

            {/* progress */}
            <div className="flex items-center w-full h-3">
                <ProgressBar progress={progress} />
            </div>

            {/* word card */}
            <ReactCardFlip isFlipped={isFlipped} infinite={true}>
                <div className="mt-16 flex items-center justify-center cursor-pointer h-60" onClick={flipWordCard}>
                    <div className="text-3xl border rounded-lg p-10 shadow-xl md:text-7xl">
                        <span className={font.className}>{ words[currentWordIdx].word }</span>
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-center cursor-pointer h-60" onClick={flipWordCard}>
                    <div className="text-3xl border rounded-lg p-10 shadow-xl md:text-7xl">
                        <span>{ words[currentWordIdx].mean }</span>
                    </div>
                </div>
            </ReactCardFlip>

            {/* bottom */}
            <div className="absolute bottom-0 left-0 border-t w-full flex items-center justify-between px-10 py-4">
                <div className="text-base">
                    <span>{ currentWordIdx+1 }</span>
                    <span className="mx-1">/</span>
                    <span>{ words.length }</span>
                </div>

                <div className="">
                    <span className="mr-1 text-sm">답안 :</span>
                    <input type="text" className="border border-slate-300 w-32 md:w-64" value={currentAnswer} onChange={(e) => setCurrentAnswer(e.target.value)} onKeyDown={(e) => onKeyDownOnAnswerInput(e.key) } ref={answerInputRef} />
                </div>

                <button type="button" className="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-xs md:text-sm px-2 md:px-5 py-1 md:py-2.5 disabled:bg-gray-200" onClick={moveToNextWord} disabled={currentAnswer.length == 0}>다음 &gt;</button>
            </div>
        </div>
    );
}
