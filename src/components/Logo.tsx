import { configuration } from "@/configuration";

export default function Logo() {
  return (
    <a href="/" className="-m-1.5 p-1.5 font-bold text-xl text-white">
      <span className="uppercase">{configuration.siteTitle}</span>
    </a>
  );
}
