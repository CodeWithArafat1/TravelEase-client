const Loading = () => {
  return (
    <div className="fixed inset-0 w-full h-screen z-999 bg-base-200 flex justify-center items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
