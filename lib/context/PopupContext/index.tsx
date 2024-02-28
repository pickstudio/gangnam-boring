import React, { useContext, useState } from "react";
import styled from "styled-components";

import PopUpCard from "@/components/card/PopUpCard";
import { StaticImageData } from "next/image";

type PopUpContextType = {
  showPopUp: ({
    icon,
    title,
    description,
    buttonText,
    onClickButton,
  }: ShowPopUpParamsType) => void;
};

type ShowPopUpParamsType = {
  icon: string | StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  onClickButton?: () => void;
};

export const PopUpContext = React.createContext<PopUpContextType>({
  showPopUp: ({
    title,
    description,
    buttonText,
    onClickButton,
  }: ShowPopUpParamsType) => {},
});

export const usePopUpProvider = () => useContext(PopUpContext);

const PopUpProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState<string | StaticImageData>("");
  const [buttonText, setButtonText] = useState("");

  const [onClickButton, setOnClickButton] = useState<() => void>(() => {});
  const [isVisible, setIsVisible] = useState(false);

  const showPopUp = ({
    icon,
    title,
    description,
    buttonText,
    onClickButton,
  }: ShowPopUpParamsType) => {
    setIcon(icon);
    setTitle(title);
    setDescription(description);
    setIsVisible(true);

    buttonText && setButtonText(buttonText);
    onClickButton && setOnClickButton(() => onClickButton);
  };

  const onClick = () => {
    onClickButton();
    setIsVisible(false);
  };

  return (
    <PopUpContext.Provider value={{ showPopUp }}>
      {children}
      {isVisible && (
        <BackgroundContainer>
          <PopUpCard
            icon={icon}
            title={title}
            onClick={onClick}
            buttonText={buttonText}
            description={description}
          />
        </BackgroundContainer>
      )}
    </PopUpContext.Provider>
  );
};

const BackgroundContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  top: 0;
`;

export default PopUpProvider;
