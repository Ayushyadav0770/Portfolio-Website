import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Services    from './components/Services'
import Portfolio   from './components/Portfolio'
import WhyMe       from './components/WhyMe'
import Process     from './components/Process'
import Testimonials from './components/Testimonials'
import Contact     from './components/Contact'
import CTA         from './components/CTA'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyMe />
        <Process />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
