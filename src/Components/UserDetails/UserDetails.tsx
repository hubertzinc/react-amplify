import { Text, Table, Loader, } from '@mantine/core';
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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    apiService.get<IUserProfile>(`/user/${user.email}`)
      .then(userProfile => {
        setUserProfile(userProfile);
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        setLoading(false);
      });
    }, []);

  return (
    <>
      {loading && 
        <BoxContainer title="Loading...">
          <Loader />
        </BoxContainer>
      }
      <BoxContainer title="Details from Cognito">
        <Table verticalSpacing="md">
          <Table.Tbody>
            {
              user.identities.map((identity, index) => (
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
                  <Table.Td>
                    <Text fz="sm">{identity.issuer}</Text>
                    <Text fz="xs" c="dimmed">Issuer</Text>
                  </Table.Td>
                </Table.Tr>
              ))
            }

            <Table.Tr>
              <Table.Td>
                <Text fz="sm">{user.id}</Text>
                <Text fz="xs" c="dimmed">Cognito User ID</Text>
              </Table.Td>
              {
                user.givenName &&
                <Table.Td>
                  <Text fz="sm">{user.givenName}</Text>
                  <Text fz="xs" c="dimmed">First Name</Text>
                </Table.Td>
              }
              {
                user.familyName &&
                <Table.Td>
                  <Text fz="sm">{user.familyName}</Text>
                  <Text fz="xs" c="dimmed" style={{ whiteSpace: 'nowrap' }}>Last Name</Text>
                </Table.Td>
              }
            </Table.Tr>
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

      {userProfile && userProfile.shippingAddress &&
        <BoxContainer title="Shipping Address">
          <Table verticalSpacing="md">
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text fz="sm">{userProfile.shippingAddress.firstName} {userProfile.shippingAddress.lastName}</Text>
                  <Text fz="xs" c="dimmed">Name</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{userProfile.shippingAddress.phone}</Text>
                  <Text fz="xs" c="dimmed">Phone</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text fz="sm">{userProfile.shippingAddress.companyName}</Text>
                  <Text fz="xs" c="dimmed">Company</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{userProfile.shippingAddress.addressLine1}</Text>
                  <Text fz="xs" c="dimmed">Address Line 1</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{userProfile.shippingAddress.addressLine2}</Text>
                  <Text fz="xs" c="dimmed">Address Line 2</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text fz="sm">{userProfile.shippingAddress.city}</Text>
                  <Text fz="xs" c="dimmed">City</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{userProfile.shippingAddress.state?.name}</Text>
                  <Text fz="xs" c="dimmed">State</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{userProfile.shippingAddress.country?.name}</Text>
                  <Text fz="xs" c="dimmed">Country</Text>
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