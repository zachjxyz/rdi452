// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "../ui/button";

// Icon imports
import { Instagram, Youtube, AppleIcon } from "lucide-react";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
import Logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">Real Deal Individual</h3>
            </Link>
            <p>
              <Balancer>RDI by Nast B</Balancer>
            </p>
          </div>
          {/* <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
            <Link href="/#">Privacy Policy</Link>
            <Link href="/#">Terms of Service</Link>
            <Link href="/#">Cookie Policy</Link>
          </div> */}
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          {/* <div className="flex gap-2">
            <Link href="https://instagram.com/nastb_" target="_blank">
              <Button variant="outline" size="icon">
                <Instagram />
              </Button>
            </Link>
            <Button variant="outline" size="icon">
              <Youtube />
            </Button>
            <Button variant="outline" size="icon">
              <AppleIcon />
            </Button>
          </div> */}
          <p className="text-muted-foreground">
            © <a href="/">Real Deal Individual</a>. All rights reserved.
            2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
