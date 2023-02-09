export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screenHeightWithoutHeader w-full items-center">
      <div className="mx-auto inline-block">
        <p className="text-center text-grey">
          Entrepreneur<span className="text-green"> - </span> Senior Sitecore
          Dev
          <span className="text-green"> - </span> Full Stack Web Dev
        </p>
        <div className="flex flex-col">
          <h1 className="pt-6 pb-8 text-center text-7xl font-bold">
            Building for over 10 years.
          </h1>
          <p className="border-t border-green pt-6 text-center text-grey">
            Hi, I'm Dakota. Co-founder of{" "}
            <a
              className="text-white hover:text-green"
              href="https://www.twofold.tech/"
            >
              TwofoldTech
            </a>
            , a software development agency sepcializing in{" "}
            <a
              className="text-white hover:text-green"
              href="https://www.sitecore.com/"
            >
              Sitecore
            </a>
            . I'm a full stack web developer with a passion for building great
            products.
          </p>
        </div>
      </div>
    </section>
  );
}
