import Image from "next/image";

const PortfolioForm = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen relative">
        <Image
          src="/bg.png"
          alt=""
          fill
          className="absolute inset-0 z-0 opacity-10"
        />
        <div className="text-lg mb-2">Sara Öhman</div>
        <div className="text-3xl font-bold">
          Junior designer & frontend utvecklare
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 w-2/3 mx-auto mt-20">
        <div className="text-2xl text-center">
          Min smak är enkel, <br />
          jag blir lätt nöjd med det bästa <br />- Winston S.Churchill
        </div>

        <div className="grid grid-cols-2 gap-10">
          {skills.map((item) => (
            <div key={item.label}>
              <div className="font-bold text-xl text-center">{item.label}</div>
              <div className="font-extralight">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioForm;

const skills = [
  {
    label: "NextJS",
    content:
      "År 2023 valde skaparna av Facebook att uppdatera deras rekommenderade Framework från ReactJS till NextJS. NextJS är ett Framework byggt ovanpå ReactJS för att ge ytterliga funktioner som server-side rendering och automatisk code splitting.",
  },
  {
    label: "TailwindCSS och Shadcn/ui",
    content:
      "Ett annan snabbt växande Framework är TailwindCSS. TailwindCSS gör livet så mycket enklare med snabb användning och prydlig placering. För att mycket snabbare få upp en webbsida använder jag oftast Shadcn-ui som kommer med färdigbyggda komponenter och funktionalitet.",
  },
  {
    label: "Prisma",
    content:
      "Prisma låser upp en ny nivå av utvecklarupplevelse när man arbetar med databaser, tack vare sin intuitiva datamodell, automatiserade migrering, typsäkerhet och autokomplettering.",
  },
  {
    label: "TypeScript",
    content:
      "TypeScript lägger till ytterligare syntax till JavaScript för att stödja en stramare integration med ens editor. Det vill säga, den låter mig fånga fel tidigt i min editor.",
  },
  {
    label: "MongoDB eller mySQl",
    content:
      "De ledande databashanterarna med öppen källkod är MongoDB och MySQL.",
  },
];
