import ProfilePhoto from "./Elements/ProfilePhoto";
import Bio from "./Elements/Bio";
import Footer from "./Elements/Footer";

import './style.css';

export default function Card() {
  return (
    <div className="card">
      <ProfilePhoto />
      <Bio />
      <Footer />
    </div>
  );
}
