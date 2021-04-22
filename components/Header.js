import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightingBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header>
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={HomeIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
