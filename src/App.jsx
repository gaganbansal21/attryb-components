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
import Banner from './components/Navbar/NavbarBanner/index.jsx'
import { Button } from '@attrybtech/attryb-ui'
import Three from './components/dropdown/dropdownthree/index.jsx';
import StatDrop from './components/dropdown/dropdownSeven/main.jsx';



function App() {

  const handleExitButton = () =>{
    alert("Hi");
  }
  
  return (
    <div className="App">

      <div className='navabar-components-class'>
          <NavbarVariants templateName="Campiagn name" handleExitButton={handleExitButton}/>
      </div>
      
      <div className='navabar-components-class'>
         <Banner />
      </div>

    
      {/* <div className='semi-class'>
          <Droprunner isCome={false}/>
      </div>

      <div className='semi-class'>
          <Droprunner isCome={true}/> 
      </div> */}

      <div className='none'>
        <Three isIcon={true}/>
      </div>

      <div className='none'>
        <Three isIcon={false}/>
      </div>

      <div className='none'>
        <StatDrop isIcon={false}/>
      </div>

      
      <div className='none'>
        <Dummy />
      </div>

      
      
      {/* <NavbarVariants />  */}
        {/* <PopupTrigger /> */}
       
        {/* <Droprunner /> */}
        {/* <Dropdown /> */}
        {/* <Dummy /> */}
        {/* <TagMainDrop /> */}
        {/* <TagdropperDropdown /> */}
    </div>
  );
}

export default App
