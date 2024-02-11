import Link from 'next/link';

const HeroFiveButtons = () => {
  return (
    <div className="hero-five-buttons-container">
      <div className="tp-hero-five-btn-box d-flex justify-content-center align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
        <div className="mr-15 mb-20">
          <Link href="/" passHref>
            <button className="tp-btn-blue-lg purple-bg circle-effect">Start your 14-day free trial</button>
          </Link>
        </div>
        <div className="mb-20">
          <Link href="/service-details" passHref>
            <button className="tp-btn-grey">How it works</button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .hero-five-buttons-container {
          background-color: #f2f2f2; /* Light gray background */
          padding: 30px; /* Add some padding */
          width: 100%; /* Make the background full width */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tp-hero-five-btn-box {
          margin: 0 auto; /* Center the buttons horizontally */
        }
      `}</style>
    </div>
  );
};

export default HeroFiveButtons;
