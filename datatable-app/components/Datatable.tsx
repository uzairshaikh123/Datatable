"use client";
import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
{
  /* <DataTable
sortable
caption="Bookings"
headers={headers}
rows={rows}
/> */
}
interface Headers {
  Timestamp: String;
  Purchase_Id: String;
  Mail: String;
  Name: String;
  Source: String;
  Status: String;
  Select: String;
}
interface DataTable {
  sortable: Boolean;
  caption: String;
  headers: Headers;
  rows: String[];
}
export default function Datatable({
  sortable,
  headers,
  rows,
  caption,
}: DataTable) {
  let arr = Object.keys(headers);
console.log("rows",rows)
  return (
    <Box >
      <Heading textAlign={"center"} color={"black"} as="h3" size="lg">
        DataTable
      </Heading>

      <TableContainer>
        <Table variant="striped" colorScheme="red" bg={"white"} color={"black"}>
          <TableCaption>{caption}</TableCaption>
          <Thead>
            <Tr>
              {arr?.map((el) => {
                return <Th style={{cursor:"pointer"}} key={el}>{el}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((el,i)=>{
             return <Tr key={el.id}>
              <Td>{el?.id}</Td>
              <Td>{el?.address?.zipcode}</Td>
              <Td>{el?.email}</Td>
              <Td>{el?.name}</Td>
              <Td>{el?.username}</Td>
              <Td>{i%2==0?"Waiting":"Failed"}</Td>
              <Td>
                <Button>
                    Select
                </Button>
              </Td>
            </Tr>
            })
            }
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </Box>
  );
}



