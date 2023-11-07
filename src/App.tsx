import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"
import Section1 from "./sections/section1/Index"
import Section2 from "./sections/section2/Index"
import Whatsapp from "./components/whatsapp/Index"


function App() {
  return (
    <>

      <main>
        <Section1 />
        <Section2 />
        <Whatsapp />
        <BackTop />
      </main>

      <Footer />

    </>
  )
}

export default App
