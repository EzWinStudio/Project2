import Capabilities from "@/components/Capabilities";
import Companies from "@/components/Companies";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ProjectDialogHost from "@/components/ProjectDialogHost";
import ProjectWall from "@/components/ProjectWall";
import RevealObserver from "@/components/RevealObserver";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProjectWall />
        <Companies />
        <Capabilities />
        <Process />
        <Contact />
      </main>
      <ProjectDialogHost />
      <RevealObserver />
    </>
  );
}
