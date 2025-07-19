import Stylings from "./previous.module.css";

const PreviousEdition = () => {
  return (
    <>
      <div className={Stylings.PreviousEdition}>
        <h2>Previous Editions</h2>
      </div>

      <div className={Stylings.Grid}>
        <div className={Stylings.Container}>
          <img src="/Images/insurance.png" alt="CardImage" />

          <button>Buy Your Hard Copy</button>
        </div>
        <div className={Stylings.Container}>
          <img src="/Images/PHOTO-2023-01-11-16-04-34-e1674196015694.jpg.png" alt="CardImage" />

          <button>Buy Your Hard Copy</button>
        </div>
        <div className={Stylings.Container}>
          <img src="/Images/cover-August-scaled-e1695043794320.webp.png" alt="CardImage" />

          <button>Buy Your Hard Copy</button>
        </div>
      </div>
    </>
  );
};

export default PreviousEdition;
