import UserCard from "../../Components/UserCard/UserCard";
import Welcome from "../../Components/Welcome/Welcome";
import { Flex, Space } from "@mantine/core";
import { IUser } from "../../Types/IUser";
import UserDetails from "../../Components/UserDetails/UserDetails";
import classes from "./Home.module.scss";

export interface IHomeProps {
  user: IUser;
}

const Home = ({user}: IHomeProps) => {
  return (
    <>
      <Welcome />
      <Space h="lg" />
      <Flex align="center" direction="column" justify="center" className={classes.items}>
        <div className={classes.userCard}>
          <UserCard user={user} />
        </div>
        <UserDetails user={user} />
      </Flex>
    </>
    
  )
}

export default Home;