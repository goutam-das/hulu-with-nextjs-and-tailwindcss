import Image from "next/image";

const Header = () => {
  return (
    <header>
      <h1>This is a header</h1>
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
