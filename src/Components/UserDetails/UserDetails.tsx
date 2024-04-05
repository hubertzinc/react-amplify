import { Text, Table, Container } from '@mantine/core';
import { IUser } from '../../Types/IUser';
import classes from "./UserDetails.module.scss";
import { Divider } from '@aws-amplify/ui-react';
import BoxContainer from '../BoxContainer/BoxContainer';

export interface IUserDetailsProps {
  user: IUser
}

const UserDetails = ({ user }: IUserDetailsProps) => {

  return (
    <BoxContainer title="Details from Cognito">
      <Table verticalSpacing="md">
        <Table.Tbody>
          {
            user.identities.map((identity, index) => (
              <>
                <Table.Tr key={index}>
                  <Table.Td>
                    <Text fz="sm">{identity.userId}</Text>
                    <Text fz="xs" c="dimmed">Provider User ID</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text fz="sm">{identity.providerName}</Text>
                    <Text fz="xs" c="dimmed">Provider</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text fz="sm">{identity.providerType}</Text>
                    <Text fz="xs" c="dimmed">Type</Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <Text fz="sm">{identity.issuer}</Text>
                    <Text fz="xs" c="dimmed">Issuer</Text>
                  </Table.Td>
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
    </BoxContainer>
  );
}

export default UserDetails