import Styling from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className={Styling.Main}>
        <div className={Styling.Image}>
          <img src="/Images/ILM.png.png" alt="MainImage" />
        </div>

        <div className={Styling.rightSide}>
          <h2>Insurance Life Magazine</h2>

          <p>
            Insurance Life Magazine Insurance life magazine is a lifestyle
            magazine for insurance agents, other financial professionals and
            people looking for cash liquidity, leverage and control. Do you want
            to take more control over your finances and investments? Do you need
            to generate more leads to scale your business? Are your struggling
            with closing skills? What about recruiting? Do you lack the
            confidence to approach new prospects? Other financial professionals
            and insurance agents show you how to reach your target by presenting
            options to clients and developing systems that work. Learn more
            about team building and be the strategic leader that you need to be.
          </p>

          <h2 className={Styling.Text}>
            Grow your net worth by growing your network
          </h2>

          <button className={Styling.subscribeButton}>
            Subscribe free to view Magazine
          </button>
        </div>
      </div>

      <div className={Styling.Paragraph}>
        <p>
          Engage in the stories of other agents and business owners like
          yourself and see how they leveraged their resources to grow their
          businesses and agencies. Change how you see things so you can start
          changing what you see. Subscribe today for FREE and learn how to
          become a master closer
        </p>
      </div>
    </>
  );
};

export default Main;
