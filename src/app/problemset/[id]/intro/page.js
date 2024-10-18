'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { ProblemSetData } from '@data/ProblemSet.js';

export default function Intro() {
    const params = useParams();

    const problemData = ProblemSetData.find((set) => set.id == params.id);

    return (
        <>
            <div className="mb-6">
                <div className="text-4xl font-semibold">
                { problemData.title }
                </div>

                <ul className="list-disc text-base">
                    <li>여러가지 뜻이 있는 경우 하나만 입력하여도 정답 처리됨</li>
                    <li>띄어쓰기는 무시</li>
                </ul>
            </div>

            <div className="flex justify-center">
                <div className="w-44">
                    <Link href={`/problemset/${params.id}`} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center">
                        <span className="text-xl">▶</span>
                        <span className="text-3xl ml-2 font-semibold">START</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
