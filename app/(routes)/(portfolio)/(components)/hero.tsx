import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <Image
        src="/bg.png"
        alt="Background page of heart"
        fill
        className="absolute inset-0 z-0 opacity-10 max-md:object-cover max-md:object-right"
      />
      <div className="text-lg mb-2">Sara Öhman</div>
      <div className="text-xl sm:text-3xl text-center font-bold max-md:px-6 text-wrap">
        Junior designer & frontend utvecklare
      </div>
    </div>
  );
};

export default Hero;
