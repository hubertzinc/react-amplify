import { useEffect, useState } from "react";
import classes from "./StoresList.module.scss";
import { IUser } from "../../Types/IUser";
import BoxContainer from "../BoxContainer/BoxContainer";
import { Text, Table, } from '@mantine/core';
import { ApiService } from "../../Services/Api/ApiService";
import { IStore } from "../../Types/IStore";

export interface IStoresListProps {
  user: IUser;
}

const StoresList = ({ user }: IStoresListProps) => {
  const apiService = new ApiService();

  const [stores, setStores] = useState<IStore[]>([]);

  useEffect(() => {
    apiService.get<IStore[]>(`/store/user/${user.email}`)
      .then(response => {
        setStores(response);
      }).catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <>
      <BoxContainer title="Available Stores">
        <Table verticalSpacing="md">
          <Table.Tbody>
            {
              stores.map((store, index) => (
                <Table.Tr key={index}>
                <Table.Td>
                  <Text fz="sm"><strong>{store.name}</strong></Text>
                  <Text fz="xs" c="dimmed">Store Name</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{store.area}</Text>
                  <Text fz="xs" c="dimmed">Area</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{store.url}</Text>
                  <Text fz="xs" c="dimmed">URL</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{store.testSiteUrl}</Text>
                  <Text fz="xs" c="dimmed">Test URL</Text>
                </Table.Td>
                <Table.Td>
                  <Text fz="sm">{store.clientId}</Text>
                  <Text fz="xs" c="dimmed">Client ID</Text>
                </Table.Td>
              </Table.Tr>
              ))
            }
          </Table.Tbody>
        </Table>
      </BoxContainer>
    </>
  )
}

export default StoresList;