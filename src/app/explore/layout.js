export default function ExploreLayout({ children }) {
    return (
        <div className="md:flex md:h-screen">
            <div className="md:m-auto">
                {children}
            </div>
        </div>
    );
}
