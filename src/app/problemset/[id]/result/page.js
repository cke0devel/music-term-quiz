'use client';

import { useContext } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import UserAnswerCard from '@components/UserAnswerCard.js';
import { ProblemSetData } from '@data/ProblemSet.js';

export default function Result() {
    const params = useParams();

    const userAnswerData = JSON.parse(window.sessionStorage.getItem('userAnswerData'));
    const problemData = ProblemSetData.find((set) => set.id == params.id);

    const answerCards = userAnswerData.map((row, idx) =>
        <UserAnswerCard data={row} key={idx} />
    );

    return (
        <div>
            <div className="flex w-full justify-center mt-10">
                <div className="text-4xl font-semibold">{ problemData.title }</div>
            </div>

            <div className="md:grid md:grid-cols-5 mt-10">
                {answerCards}
            </div>

            <div className="flex w-full justify-center mt-10">
                <Link href={'/explore'} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center">
                다른 문제 풀기
                </Link>

                <Link href={`/problemset/${params.id}`} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center">
                다시하기
                </Link>
            </div>
        </div>
    );
}
