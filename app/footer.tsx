import { Container } from "@/components/container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export const Footer = () => (
  <Container>
    <footer className="w-full border-t border-lighter_black py-6 text-center text-lg text-gray-500">
      <p className="pb-3">Connect</p>
      <ul className="flex justify-center">
        <li className="px-2">
          <a
            href="mailto:dakota@twofold.tech"
            title="Email"
            className="hover:text-white"
          >
            <MailIcon />
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://github.com/twofoldtech-dakota"
            title="Github"
            className="hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://github.com/twofoldtech-dakota"
            title="LinkedIn"
            className="hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </footer>
  </Container>
);
