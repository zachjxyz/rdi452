// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

const FeatureOne = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src="/sacrificial-wolves.png"
            alt="Sacrificial Wolves Hoodie"
            className="fill object-cover"
            width="1500"
            height="1500"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Sacrificial Wolves Hoodie</h3>
          <p className="font-light leading-[1.4] opacity-70">
            This entire release is inspired to go directly to my fans and cut
            out the middle man. Purchase this hoodie!
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="https://square.link/u/OzCXQOQj" target="_blank">
                Buy this
              </Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureOne;
