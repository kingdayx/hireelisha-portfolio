import Link from "next/link";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/elisha-day-jenkins-64b1b6132/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/kingdayx"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
