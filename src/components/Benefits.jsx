import Styling from "./Benefits.module.css";

const Benefits = () => {
  return (
    <>
      <div className={Styling.Benefits}>
        <div className={Styling.Container}>
          <div className={Styling.Detials}>
            <div className={Styling.SuscriberBenefits}>
              <h2>
                See exclusive subscriber <br />
                benefits :
              </h2>
              <p> ... ______</p>
            </div>

            <div className={Styling.Subscription}>
              <h2>
                Free Quarterly Digital Magazine <br />
                Subscription
              </h2>

              <h2>
                Weekly Business Growth Strategies <br />
                and Tips
              </h2>

              <h2>Free Digital Gratitude Journal</h2>
            </div>
          </div>

          <div className={Styling.image}>
            <img
              src="/Images/without ds3.jpg"
              alt="CoverImage"
            />

            <button className={Styling.responsiveButton}>Buy on Amazon</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
