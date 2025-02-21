import './App.css'
import {Header, Footer, Section_1, Section_team_work,
      Section_best_ever_design, Section_numbers, Section_testimonials,
      SectionImages, SectionTheWork, SectionBrandStory, SectionTheCulture} from './containers/index'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Section_1/>
        <Section_best_ever_design/>
        <SectionTheWork/>
        <SectionBrandStory />
        <SectionTheCulture/>

        <Section_team_work/>
        <Section_numbers />
        <Section_testimonials />
        <SectionImages />
      </main>
      <Footer />
    </div>
  )
}

export default App
