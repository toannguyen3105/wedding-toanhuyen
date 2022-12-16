import { useEffect, useState } from "react";
import Header from "../header";

export default function Navbar(props) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className =
    scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";

  return (
    <div className={className}>
      <Header
        Logo={props.Logo}
        topbarBlock={props.topbarBlock}
        hclass={props.hclass}
      />
    </div>
  );
}
