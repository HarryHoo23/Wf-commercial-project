import React, { useState, useContext } from 'react';
import { modalData } from '../data/Content';

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

  const openAndCloseNavbar = () => {
    setIsOpen(!isOpen);
  };

  function handleLogoModalClickOpen(index){
    setIsModalShow({
      showModal: true,
      case: 1
    });
    setIndividualModalContent(modalData[index]);
  };

  const handleFormModalClickOpen = () => {
    setIsModalShow({
      showModal: true,
      case: 2
    })
  }

  const handleModalClickClose = () => {
    setIsModalShow(false);
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
        handleFormModalClickOpen,
        error,
        onClickScrollDown,
        onClickScrollUp,
        isModalShow,
        handleLogoModalClickOpen,
        handleModalClickClose,
        individualModalContent,
        setIsModalShow,
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
