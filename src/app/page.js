import LoginUserSelector from '@components/LoginUserSelector.js';

export default function Home() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <LoginUserSelector />
            </div>
        </div>
    );
}
