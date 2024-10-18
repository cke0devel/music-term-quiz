export default function IntroLayout({ children }) {
    return (
        <div className="flex h-screen">
            <div className="mx-10 mt-10 md:m-auto">
                {children}
            </div>
        </div>
    );
}
