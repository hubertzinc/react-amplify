import { Text, Table, } from '@mantine/core';
import { IUser } from '../../Types/IUser';
import BoxContainer from '../BoxContainer/BoxContainer';
import { useEffect, useState } from 'react';
import { ApiService } from '../../Services/Api/ApiService';
import { IUserProfile } from '../../Types/IUserProfile';

export interface IUserDetailsProps {
  user: IUser
}

const UserDetails = ({ user }: IUserDetailsProps) => {
  const apiService = new ApiService();

  const [userProfile, setUserProfile] = useState<IUserProfile | null>(null);

  useEffect(() => {
    apiService.get<IUserProfile>(`/user/${user.email}`)
      .then(userProfile => {
        setUserProfile(userProfile);
      }).catch(error => {
        console.log(error);
      });


  }, []);

  return (
    <>
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

      {userProfile &&
        <BoxContainer title="Details from ZincStore">
          <Table verticalSpacing="md">
            <Table.Tbody>
              <Table.Tr >
                <Table.Td>
                  <Text fz="sm">{userProfile.firstName}</Text>
                  <Text fz="xs" c="dimmed">First Name</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{userProfile.lastName}</Text>
                  <Text fz="xs" c="dimmed">Last Name</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
              <Table.Td>
                  <Text fz="sm">{userProfile.userName}</Text>
                  <Text fz="xs" c="dimmed">ZincStore Username</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{userProfile.email}</Text>
                  <Text fz="xs" c="dimmed">Email</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{userProfile.phoneNumber}</Text>
                  <Text fz="xs" c="dimmed">Phone</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </BoxContainer>
      }
    </>
  );
}

export default UserDetails