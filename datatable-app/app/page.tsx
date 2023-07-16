"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
// import styles from './page.module.css'
import Datatable from "@/components/Datatable";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
const url =`https://jsonplaceholder.typicode.com/users?_page=1&_limit=4`

async function getData() {
  const res = await axios.get(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res
}


export default function Home() {
  const [rows ,setrows]=useState([])
  useEffect(()=>{
    async function myapp(){
      const data = await getData()
      setrows(data.data)

    }
    myapp()
  },[])
  const headers = {
    Timestamp: "Timestamp",
    Purchase_Id: "Purchase Id",
    Mail: "Mail",
    Name: "Name",
    Source: "Source",
    Status: "Status",
    Select: "Select",
  };

  const handlepageination =()=>{

  }
  // const { colorMode, toggleColorMode } = useColorMode();
  

  // const rows = ["","",""];
  return (
    <main>
      <ChakraProvider>
        
          <Datatable
            pagination={true}
            sortable={true}
            caption="Bookings"
            headers={headers}
            rows={rows}
            handlepageination={handlepageination}
          />
  
      </ChakraProvider>
    </main>
  );
}



 
