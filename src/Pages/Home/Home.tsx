import UserCard from "../../Components/UserCard/UserCard";
import Welcome from "../../Components/Welcome/Welcome";
import { Flex, Space, useMantineColorScheme } from "@mantine/core";
import { IUser } from "../../Types/IUser";
import UserDetails from "../../Components/UserDetails/UserDetails";
import classes from "./Home.module.scss";
import StoresList from "../../Components/StoresList/StoresList";
import { useEffect } from "react";

export interface IHomeProps {
  user: IUser;
}

const Home = ({user}: IHomeProps) => {
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    setColorScheme("dark");
  }, []);
  
  return (
    <>
      <Welcome />
      <Space h="lg" />
      <Flex align="center" direction="column" justify="center" className={classes.items}>
        <div className={classes.userCard}>
          <UserCard user={user} />
        </div>
        <UserDetails user={user} />
        <StoresList user={user} />
      </Flex>
    </>
    
  )
}

export default Home;