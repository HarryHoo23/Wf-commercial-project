import React, { useState, useContext } from 'react';
import { modalData, building_construction_details as building_data } from '../data/Content';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalShow, setIsModalShow] = useState({
    showModal: false,
    case: 1
  });
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [individualModalContent, setIndividualModalContent] = useState(
    modalData[0]
  );
  const [singleFixtureModalContent, setSingleFixtureModalContent] = useState(building_data[0])

  const openAndCloseNavbar = () => {
    setIsOpen(!isOpen);
  };

  function handleLogoModalClickOpen(index){
    setIsModalShow({
      showModal: true,
      case: 1
    });
    window.fullpage_api.setAllowScrolling(false);
  };

  const handleFormModalClickOpen = () => {
    setIsModalShow({
      showModal: true,
      case: 2,
    });
    window.fullpage_api.setAllowScrolling(false);
  }

  function handleFixtureModalClickOpen(index) {
    setIsModalShow({
      showModal: true,
      case: 3,
    });
    setSingleFixtureModalContent(building_data[index])
    window.fullpage_api.setAllowScrolling(false);

  }

  const handleModalClickClose = () => {
    setIsModalShow({
      showModal: false,
      case: 1,
    });
    window.fullpage_api.setAllowScrolling(true);

  };

  const onClickScrollDown = () => {
    window.fullpage_api.moveSectionDown();
  };

  const onClickScrollUp = () => {
    window.fullpage_api.moveSectionUp();
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isOpen,
        openAndCloseNavbar,
        error,
        onClickScrollDown,
        onClickScrollUp,
        isModalShow,
        handleLogoModalClickOpen,
        handleFormModalClickOpen,
        handleModalClickClose,
        individualModalContent,
        setIsModalShow,
        singleFixtureModalContent,
        handleFixtureModalClickOpen,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
