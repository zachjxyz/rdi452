import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";

// Custom Components
import { Section, Container } from "@/components/craft";

// Assets
import Placeholder from "@/public/hero-image-2.jpg";

export default function Waitlist() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center mb-6 w-fit">
          <Button asChild className="not-prose mb-6 flex w-fit">
            <Link href="https://square.link/u/iDbd04PM" target="_blank">
              Join the Waitlist <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-0 prose-strong">
            <Balancer>SACRIFICIAL LAMB</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>NOVEMBER 16TH, 2024</Balancer>
          </h3>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="not-prose h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
