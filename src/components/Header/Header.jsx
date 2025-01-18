import { Button } from "../Button/Button";
import { LanguageBtn } from "../LanguageBtn/LanguageBtn";
import LogoImage from "../../assets/images/logo.jpg";
import BookIcon from "../../assets/icons/book-icon.svg";
import CallIcon from "../../assets/icons/call-icon.svg";
import { Links } from "../NavLink/Link";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="w-full py-6">
      <header className="container flex items-center justify-between">
        <div className="w-[80px] rounded-[100%]">
          <Link to="/">
            <img src={LogoImage} alt="22-maktab" className="rounded-[100%]" />
          </Link>
        </div>
        {/* <div className="flex items-center justify-between py-1 w-full">
        </div> */}
        <Links />
        <div className="flex items-center gap-x-6">
          {/* <LanguageBtn /> */}
          <Button
            title="+998 91 7775411"
            icon={<CallIcon />}
            btnClass="px-7 py-4 bg-[#EAF4FF] rounded-2xl flex-row-reverse hover:bg-[#cedceb] transition text-[#2189FF] hover:text-blue-700 hover:scale-[1.02]"
            titleClass="text-xs font-semibold"
          />
        </div>
      </header>
    </div>
  );
}
