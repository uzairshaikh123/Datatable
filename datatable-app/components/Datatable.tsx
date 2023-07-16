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
  sortable?: Boolean;
  caption?: String;
  headers: Headers;
  rows: String[];
  pagination?:Boolean;
  handlepageination:()=>null;
}
export default function Datatable({
  sortable,
  headers,
  rows,
  caption,
  pagination,
  handlepageination
}: DataTable) {
  let arr = Object.keys(headers);
  const [rowarr , setrowarr]=useState(rows)
console.log("rows",rows)
const [page , setpage]= useState<number>(4)
const [asc,setasc]=useState(false)

// export default function handle(){

// }

useEffect(()=>{
    
        setrowarr(rows)
    
},[rows])

const handlesort=(el:string)=>{
    if(el=="Timestamp" && asc==true){

        rows.sort((a,b)=>{
        return a.id-b.id
        })
        setrowarr(rows)
        setasc(false)
    }else if(el=="Timestamp" && asc==false){

        rows.sort((a,b)=>{
        return b.id-a.id
        })
        setrowarr(rows)
        setasc(true)
    }
}

  return (
    <Box w={"80%"} m={"auto"} mt={"10px"}>
      <Heading textAlign={"center"} color={"black"} as="h3" size="lg" >
        DataTable
      </Heading>

      <TableContainer >
        <Table boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"} variant="striped" colorScheme="red" bg={"white"} color={"black"}>
          <TableCaption>{caption}</TableCaption>
          <Thead>
            <Tr>
              {arr?.map((el) => {
                return <Th  onClick={()=>handlesort(el)} style={{cursor:"pointer"}} key={el}>{el}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rowarr?.map((el,i)=>{
             return i<4 && <Tr key={el.id}>
              <Td>{el?.id} hours ago</Td>
              <Td>{el?.address?.zipcode}</Td>
              <Td>{el?.email}</Td>
              <Td>{el?.name}</Td>
              <Td>{el?.username}</Td>
              <Td>
                <Button  _hover={{color:"black"}} bg={i%2==0?"yellow":i==3?"green":"red"} color={i%2==0?"black":i==4?"black":"white"}>{i%2==0?"Waiting":i==3?"Paid":"Failed"}</Button>
                </Td>
                
              <Td>
                <Button color={"white"} bg={"gray"} _hover={{color:"black"}}>
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
      {pagination && <Flex width={"20%"} margin={"auto"} justifyContent={'space-between'} >
      <Button disabled={page==4} onClick={()=>setpage(page+1)}>
        Prev
      </Button>
      <Button disabled={page==5} onClick={()=>setpage(page-1)}>
        Next
      </Button>

      </Flex>}
    </Box>
  );
}



