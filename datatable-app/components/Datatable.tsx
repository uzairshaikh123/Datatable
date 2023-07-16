"use client";
import React, { useEffect, useState } from "react";
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
  Flex,
  Input,
} from "@chakra-ui/react";
import { DataTable } from "./type";
export default function Datatable({
  sortable,
  headers,
  rows,
  caption,
  pagination,
  handlepageination,
  handlesearch
}: DataTable) {
  let arr = Object.keys(headers);
  const [rowarr, setrowarr] = useState(rows);
  console.log("rows", rows);
  const [asc, setasc] = useState(false);
  const [page, setpage] = useState(1);
 
  useEffect(() => {
    setrowarr(rows);
  }, [rows]);

  const handlesort = (el: string) => {
    if (el == "Timestamp" && asc == true && sortable) {
      rows?.sort((a:any, b:any) => {
        return a.id - b.id;
      });
      setrowarr(rows);
      setasc(false);
    } else if (el == "Timestamp" && asc == false && sortable) {
      rows?.sort((a:any, b:any) => {
        return b.id - a.id;
      });
      setrowarr(rows);
      setasc(true);
    }
  };

  const handlepage = (p: number) => {
    if (p == -1) {
      setpage((p) => p - 1);
    } else {
      setpage((p) => p + 1);
    }
   
    handlepageination(p);
  };


  const handlesearching =(e:React.ChangeEvent<HTMLInputElement>)=>{
    handlesearch(e.target.value)

  }


  return (
    <Box w={"80%"} m={"auto"} mt={'10px'} >
      <Heading textAlign={"center"} mb={"30px"} color={"black"} as="h3" size="lg" >
        DataTable
      </Heading>

      <Box>
      <Input placeholder='Search here' onChange={handlesearching}  />
      </Box>

      <TableContainer>
        <Table
          boxShadow={
            "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
          }
          variant="striped"
          colorScheme="red"
          bg={"white"}
          color={"black"}
        >
          <TableCaption>{caption}</TableCaption>
          <Thead>
            <Tr>
              {arr?.map((el) => {
                return (
                  <Th
                    onClick={() => handlesort(el)}
                    style={{ cursor: "pointer" }}
                    key={el}
                  >
                    {el}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rowarr?.map((el, i) => {
              return (
                <Tr key={el?.id}>
                  <Td>{el?.id} hours ago</Td>
                  <Td>{el?.address?.zipcode}</Td>
                  <Td>{el?.email}</Td>
                  <Td>{el?.name}</Td>
                  <Td>{el?.username}</Td>
                  <Td>
                    <Button
                      _hover={{ color: "black" }}
                      bg={i % 2 == 0 ? "yellow" : i == 3 ? "green" : "red"}
                      color={i % 2 == 0 ? "black" : i == 4 ? "black" : "white"}
                    >
                      {i % 2 == 0 ? "Waiting" : i == 3 ? "Paid" : "Failed"}
                    </Button>
                  </Td>

                  <Td>
                    <Button
                      color={"white"}
                      bg={"gray.500"}
                      _hover={{ color: "black" }}
                    >
                      Select
                    </Button>
                  </Td>
                </Tr>
              );
            })}
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
      {pagination && (
        <Flex width={"20%"} margin={"auto"} justifyContent={"space-between"}>
          <Button isDisabled={page == 1} onClick={() => handlepage(-1)}>
            Prev
          </Button>
          <Button isDisabled={page == 3} onClick={() => handlepage(1)}>
            Next
          </Button>
        </Flex>
      )}
    </Box>
  );
}
