import React, { useState, useContext } from 'react';
import { modalData } from '../data/Content';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [individualModalContent, setIndividualModalContent] = useState(
    modalData[0]
  );

  const openAndCloseNavbar = () => {
    setIsOpen(!isOpen);
  };

  function handleLogoModalClickOpen(index){
    setModalShow(true);
    setIndividualModalContent(modalData[index]);
  };

  const handleModalClickClose = () => {
    setModalShow(false);
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
        modalShow,
        handleLogoModalClickOpen,
        handleModalClickClose,
        individualModalContent,
        setModalShow,
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
