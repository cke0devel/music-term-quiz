'use client';

import { useRouter } from 'next/navigation';

import { ProblemSetData } from '@data/ProblemSet.js';

export default function Explore() {
    const router = useRouter();

    const moveToProblemSet = (problemSetId) => {
        router.push(`/problemset/${problemSetId}/intro`);
    };

    const problemSetItems = ProblemSetData.map((set, idx) =>
        <div key={idx} className="mt-4 mx-auto md:mr-6 cursor-pointer border rounded-lg w-60 drop-shadow-lg md:mt-0" onClick={() => moveToProblemSet(set.id)}>
            <div className="h-28 p-4 bg-emerald-400 rounded-t-lg text-white font-semibold text-2xl">
                {set.title}
            </div>

            <div className="border-t flex items-center justify-around py-1">
                <div className="text-center">
                    <div className="font-semibold text-xl">{set.dictionary.length}</div>
                    <div className="text-xs text-gray-500">용어</div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row">
            {problemSetItems}
        </div>
    );
}
