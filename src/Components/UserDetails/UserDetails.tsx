import { Text, Table, Container } from '@mantine/core';
import { IUser } from '../../Types/IUser';
import classes from "./UserDetails.module.scss";

export interface IUserDetailsProps {
  user: IUser
}

const elements = [
  { position: 1, name: 'Hydrogen', symbol: 'H', mass: 1.00794 },
  { position: 2, name: 'Helium', symbol: 'He', mass: 4.002602 },
  { position: 3, name: 'Lithium', symbol: 'Li', mass: 6.941 },
]

const UserDetails = ({ user }: IUserDetailsProps) => {

  return (
    <Container size="lg" className={classes.mainContainer}>
      <Table verticalSpacing="md">
        <Table.Tbody>
          {
            user.identities.map((identity, index) => (
              <>
                <Table.Tr key={index}>
                  <Table.Td>
                    <Text fz="sm">{identity.userId}</Text>
                    <Text fz="xs" c="dimmed">User ID</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text fz="sm">{identity.providerName}</Text>
                    <Text fz="xs" c="dimmed">Provider</Text>
                  </Table.Td>

                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Text fz="sm">{identity.issuer}</Text>
                    <Text fz="xs" c="dimmed">Issuer</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text fz="sm">{identity.providerType}</Text>
                    <Text fz="xs" c="dimmed">Type</Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Text fz="sm">{user.id}</Text>
                    <Text fz="xs" c="dimmed">Cognito User ID</Text>
                  </Table.Td>
                </Table.Tr>
              </>
            ))
          }

        </Table.Tbody>
      </Table>
    </Container>
  );
}

export default UserDetails