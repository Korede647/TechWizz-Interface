import './ParallaxTourSection.css';

const PromoSection: React.FC = () => {
  return (
    <section className="section">
      <div className="promo-content">
        <p className="sale">SALE</p>
        <h1 className="discount232">
          Discount <span className="badge232">20% off</span>
        </h1>
        <p className="description373">
          Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor.
          Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus,
          nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        </p>

        <div className="buttons">
          <button className="btn btn-primary">See promotion tours</button>
          <button className="btn btn-outline">Choose tour</button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
