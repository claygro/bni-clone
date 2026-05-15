import bni from "../assets/BNI_logo.png";
const Loader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="  ">
          <img src={bni} alt="BNI-LOGO" className="W-32 h-auto" />
        </div>
        <div className="mt-25 z-50">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
