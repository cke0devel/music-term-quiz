export default function ProgressBar({ progress }) {
    const style = {
        width: `${progress}%`
    }

    return (
        <div className="bg-gray-300 w-full h-full">
            <div className="bg-teal-300 h-full" style={style}>
            </div>
        </div>
    );
}
