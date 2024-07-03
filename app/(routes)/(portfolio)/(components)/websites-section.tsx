import Image from "next/image";

const WebsitesSection = () => {
  return (
    <div className="my-20">
      <h1 className="font-bold text-xl text-center mb-10">Olika Webbsidor</h1>
      <div className="grid grid-cols-4 gap-6 max-w-screen-lg mx-auto font-light">
        <div className="flex items-center flex-col justify-center group">
          <Image
            src="/phone2.png"
            alt=""
            width={1000}
            height={1000}
            className="h-96 w-auto group-hover:shadow-2xl shadow-black rounded-3xl"
          />
          <div className="text-center mt-4">
            Blogg
            <br />
            <div className="group-hover:translate-x-6 transition-all duration-300 cursor-pointer">Läs mer {"-->"}</div>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center">
          <Image
            src="/phone.png"
            alt=""
            width={1000}
            height={1000}
            className="h-96 w-auto"
          />
          <div className="text-center mt-4">
            Ecommerce
            <br />
            Läs mer {"-->"}
          </div>
        </div>

        <div className="flex items-center flex-col justify-center">
          <Image
            src="/phone.png"
            alt=""
            width={1000}
            height={1000}
            className="h-96 w-auto"
          />
          <div className="text-center mt-4">
            CMS
            <br />
            Läs mer {"-->"}
          </div>
        </div>

        <div className="flex items-center flex-col justify-center">
          <Image
            src="/phone.png"
            alt=""
            width={1000}
            height={1000}
            className="h-96 w-auto"
          />
          <div className="text-center mt-4">
            LMS
            <br />
            Läs mer {"-->"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitesSection;
