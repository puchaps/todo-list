
import ContentPreview from './components/content-preview/content-preview.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import MainProvider from './context/main.context';

const App = () => {
  return (
    <div className = "app">
      <MainProvider>
        <Header/>
        <ContentPreview/>
        <Footer/>
      </MainProvider>
    </div>
  );
}

export default App;
