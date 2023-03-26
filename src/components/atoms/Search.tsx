import Image from "next/image";

type SearchProps = {
  inputType?: string;
  placeholder?: string;
};

export const Search: React.FC<SearchProps> = ({
  inputType = "text",
  placeholder = "検索",
}) => {
  return (
    <>
      <input
        className=" font-zen font-light text-1xl h-10 mx-2 rounded-lg focus:outline-none focus:border-transparent text-center bg-transparent focus:bg-white/50 hover:bg-white/50"
        type={inputType}
        placeholder={placeholder}
      />
      <Image src="/search.gif" alt="Logo" width={50} height={50} />
    </>
  );
};
