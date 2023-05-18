import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Template</title>
      </Head>
      <main className="content-wrapper">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <About />
              <Projects />
              <Work />
              <Education />
              <Languages />
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
