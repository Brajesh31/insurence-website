import Styling from "./Contributes.module.css";

const OurContributes = () => {
  return (
    <>
      <div className={Styling.main}>
        <div className={Styling.Container}>
          <div className={Styling.Image}>
            <img
              src="/Images/without DS.png"
              alt="CoverIMG"
            />
          </div>

          <div className={Styling.Contibution}>
            <h2>Our Contributors</h2>

            <div className={Styling.Para1}>
              <p>
                Learn growth strategies from experienced contributors who are
                also entrepreneurs with decades of experience in the financial
                space and insurance industry. Some of our contributors and
                sponsors run small to medium-sized businesses while others lead
                multimillion-dollar agencies and corporations.
              </p>
            </div>

            <div className={Styling.Para2}>
              <p>
                The level of mentorship that Insurance Life provides is
                unmatched. Dr. Martin Kwende an insurance mogul and systems
                creator and Stacie Daniel, a lead generation guru are <br/> among our
                top content contributors.
              </p>
            </div>

            <div className={Styling.Para3}>
              <p>
                Subscribe to get FREE content that will change the way you
                transact business and increase your profits. If you would like
                to participate by sponsoring an ad, please contact us at
                info@insurancelifemagazine.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurContributes;
