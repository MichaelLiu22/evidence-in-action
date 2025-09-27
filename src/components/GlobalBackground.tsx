const GlobalBackground = () => {
  return (
    <>
      {/* 全屏渐变背景 */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 bg-[length:400%_400%] animate-gradient-move" />

      {/* 彩色光斑 */}
      <div className="pointer-events-none fixed -top-16 -left-10 w-80 h-80 rounded-full bg-pink-400 opacity-30 blur-3xl animate-float -z-10" />
      <div className="pointer-events-none fixed -bottom-20 -right-10 w-96 h-96 rounded-full bg-blue-500 opacity-25 blur-3xl animate-float -z-10" />
    </>
  );
};

export default GlobalBackground;
