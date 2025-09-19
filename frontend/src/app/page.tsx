import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Library from '@/components/Library';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Library />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}