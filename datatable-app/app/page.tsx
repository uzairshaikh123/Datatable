"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
// import styles from './page.module.css'
import Datatable from "@/components/Datatable";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
const url = ``;

async function getData(page: number, query: string) {
  console.log("getdata", page);
  let url = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=4`;
  if (query.length > 0) {
    url = `https://jsonplaceholder.typicode.com/users?q=${query}&_page=${page}&_limit=4`;
  }
  const res = await axios.get(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res;
}

export default function Home() {
  const [rows, setrows] = useState([]);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("");
  const handlepageination = (p: number) => {
    setpage(page + p);
    // console.log("han", p, page);
  };
  const handlesearch = (q: string) => {
    // console.log(q);
    setquery(q);
  };

  useEffect(() => {
    async function myapp() {
      const data = await getData(page, query);
      setrows(data.data);
    }
    myapp();
  }, [page, query]);

  const headers = {
    Timestamp: "Timestamp",
    Purchase_Id: "Purchase Id",
    Mail: "Mail",
    Name: "Name",
    Source: "Source",
    Status: "Status",
    Select: "Select",
  };

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
          handlesearch={handlesearch}
        />
      </ChakraProvider>
    </main>
  );
}
