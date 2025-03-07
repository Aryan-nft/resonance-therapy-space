
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Conditions from '@/components/home/Conditions';
import Contact from '@/components/home/Contact';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href') || '';
        const targetId = href.replace('#', '');
        
        // Handle scrolling to sections with specific condition IDs
        const target = document.querySelector(href) || 
                       document.getElementById(targetId) || 
                       document.querySelector(`[id="${targetId}"]`);
        
        if (target) {
          // Set a small delay for condition tabs to ensure the section is properly rendered
          setTimeout(() => {
            window.scrollTo({
              top: (target as HTMLElement).offsetTop - 80,
              behavior: 'smooth'
            });
          }, 100);
        }
      });
    });
    
    // Initial page load animation
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Conditions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
