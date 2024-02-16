import './App.css'
import React from 'react'
import Droprunner from './components/dropdown/dropdownMain/index.jsx';
// import Dropdown from './components/dropdown/dropdownv1';
// import NavbarComp from './components/Navbar/NavbarComponent';

// import Dropdown from './components/dropdown/dropdownv1';
// import TagdropperDropdown from './components/dropdown/dropdownFive/index.jsx';
// import TagMainDrop from './components/dropdown/dropdownFive/TagMaind.jsx';
import Dummy from './components/dropdown/dropdownFive/dummy.jsx';

// import PopupContainer from './components/containerPopup/popupCreator';
// import PopupTrigger from './components/containerPopup/popupCreator';
// import NavbarComp from './components/NavbarComponent/index.jsx'
import NavbarVariants from './components/Navbar/NavVariant/index.jsx'
// import Banner from './components/Navbar/NavbarBanner/index.jsx'

function App() {
  
  return (
    <div className="App">


      <NavbarVariants />

      <div className='dropdown'>
          <Droprunner />
      </div>
      
      {/* <NavbarVariants />  */}
        {/* <PopupTrigger /> */}
        {/* <Banner /> */}
        {/* <Droprunner /> */}
        {/* <Dropdown /> */}
        {/* <Dummy /> */}
        {/* <TagMainDrop /> */}
        {/* <TagdropperDropdown /> */}
    </div>
  );
}

export default App
