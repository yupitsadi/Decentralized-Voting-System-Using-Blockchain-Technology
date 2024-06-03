import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent">
      <div className="footer-about-container">
        <p className="footer-about-title">About Us:</p>
        <p className="footer-about-content">
          "EVOTE: A Decentralized Blockchain-Based Electoral Platform for
          Upcoming Elections" proposes a novel approach to enhance the integrity
          and transparency of electoral processes through blockchain technology.
          This platform leverages the decentralized nature of blockchain to
          ensure secure and tamper-proof voting mechanisms. By distributing the
          voting records across multiple nodes, EVOTE mitigates the risks
          associated with centralized systems, such as fraud and manipulation.
          Through smart contracts, the platform automates the voting process,
          ensuring accuracy and reliability while maintaining voter anonymity.
        </p>
      </div>
      <div className="footer-created-by-container">
        <p className="footer-created-by-title">Created By:</p>
        <p className="footer-created-by-content">Anuj Chhabra</p>
        <p className="footer-created-by-content">Abhinav Kumar</p>
        <p className="footer-created-by-content">Deepanshu Sardana</p>
        <p className="footer-created-by-content">Akshit Kumar Dhaka</p>
      </div>
    </div>
  );
};

export default Footer;
