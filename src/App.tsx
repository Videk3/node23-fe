import './App.css'
import Welcome from "./components/Welcome.tsx";
import Header from "./components/Header.tsx";
import Album from "./components/Album.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <>
        <Header />
        <main>
            <Welcome />

            <Album />

        </main>

        <footer className="text-body-secondary py-5">
            <Footer />
        </footer>
    </>
  )
}

export default App
