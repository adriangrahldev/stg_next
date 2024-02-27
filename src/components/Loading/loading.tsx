const LoadingComponent = () => {
    return (
        <div className="absolute w-screen h-screen z-50 bg-sky-950 opacity-80">
            <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-sky-500"></div>
            </div>
        </div>
    );
}

export default LoadingComponent;