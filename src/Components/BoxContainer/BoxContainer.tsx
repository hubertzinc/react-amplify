import { Container, Text } from "@mantine/core";
import { FC, PropsWithChildren } from "react";
import classes from "./BoxContainer.module.scss";

export interface IBoxContainerProps {
  title: string;
  children: React.ReactNode;
}

const BoxContainer: FC<PropsWithChildren<IBoxContainerProps>> = ({ title, children }) => {
  return (
    <Container size="lg" className={classes.mainContainer} mt="lg">
      <div className={classes.header}>
        <Text>{title}</Text>
      </div>
      <div className={classes.line}></div>
      <div className={classes.subContainer}>
        {children}
      </div>
    </Container>
  )
}

export default BoxContainer;