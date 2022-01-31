import logo from './logo.svg';
import './App.css';
import ImgUpload from './components/ImgUpload'

function App() {
  return (
    <div className="App">
       <div className={"uno-row"}> 
            <div className={"uno-profile"}>
              <ImgUpload  
                uploadFile ="profile"
              />
            </div>
            <div className={"uno-cover-img"}>
              <ImgUpload />
            </div>
        </div>
      
    </div>
  );
}

export default App;
