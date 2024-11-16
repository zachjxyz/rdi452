import { Main, Section, Container } from "@/components/craft";
import FeatureFour from "@/components/ui/feature-four";
import FeatureOne from "@/components/ui/feature-one";
import FeatureThree from "@/components/ui/feature-three";
import FeatureTwo from "@/components/ui/feature-two";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <Main>
      <FeatureOne />
      <FeatureTwo />
      <FeatureFour />
      <FeatureThree />
    </Main>
  );
}
