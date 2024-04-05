import { AuthUser } from "aws-amplify/auth";
import UserCard from "../../Components/UserCard/UserCard";
import Welcome from "../../Components/Welcome/Welcome";
import { Flex, Space } from "@mantine/core";

export interface IHomeProps {
  user: AuthUser;
}

const Home = ({user}: IHomeProps) => {
  return (
    <>
      <Welcome />
      <Space h="lg" />
      <Flex justify="center">
        <UserCard user={user} />
      </Flex>
    </>
    
  )
}

export default Home;