import { Link } from "react-router-dom";
import FooterIcons from "./FooterIcons";
import FooterLink from "./FooterLink";
import RiotGamesSvg from "./RiotGamesSvg";
import ValorantIcon from "./ValorantIcon";

/*
  Colors
  bg - #292929
  bg-stone-600
  bg-neutral-800
*/

function Footer() {
  return (
    <footer className="mx-auto text-center">
      <div className="p-6 bg-[#292929]">
        <div className="flex flex-col items-center justify-around max-w-3xl gap-6 mx-auto text-center md:flex-row">
          <FooterLink to="/download">Download Game Client</FooterLink>
          <FooterLink to="/download">Download Riot mobile app</FooterLink>
        </div>
      </div>
      <div className="p-8 bg-[#111]">
        <div className="flex flex-col items-center max-w-xl gap-3 mx-auto text-center md:max-w-3xl">
          <FooterIcons />
          <div className="pt-10 space-y-8">
            <div className="flex items-center justify-center gap-10">
              <Link to="/">
                <RiotGamesSvg fill={"fill-ui-red"} />
              </Link>
              <Link to="/">
                <ValorantIcon fill={"fill-ui-red"} />
              </Link>
            </div>
            <p className="text-xs font-medium leading-5 text-neutral-400">
              © 2020-2024 Riot Games, Inc.
              <span className="text-ui-red">RIOT GAMES, VALORANT </span>and any
              associated logos are trademarks, service marks, and/or registered
              trademarks of Riot Games, Inc.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 pt-4 md:flex-row">
            <FooterLink type={"simple"}>Privacy notice</FooterLink>
            <FooterLink type={"simple"}>Terms of service</FooterLink>
            <FooterLink type={"simple"}>Company information</FooterLink>
          </div>
          <div className="flex items-center justify-center pt-4">
            <div className="p-3 rounded-lg bg-neutral-800">
              <a target="_blank" href="https://www.pegi.info/">
                <img className="w-20 h-20" src="/age-16.jpg" alt="age-16" />
              </a>
            </div>
            <div className="p-3 rounded-lg bg-neutral-800">
              <a target="_blank" href="https://www.pegi.info/">
                <img className="w-20 h-20" src="/violence.jpg" alt="violence" />
              </a>
            </div>
            <div className="p-3 rounded-lg bg-neutral-800">
              <a target="_blank" href="https://www.pegi.info/">
                <img
                  className="w-20 h-20"
                  src="/in-game-purchase.jpg"
                  alt="in-game-purchase"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
