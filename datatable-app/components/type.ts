export interface Headers {
    Timestamp: String;
    Purchase_Id: String;
    Mail: String;
    Name: String;
    Source: String;
    Status: String;
    Select: String;
  }
 export  interface DataTable {
    sortable?: Boolean;
    caption?: String;
    headers: Headers;
    rows: String[] | Number [];
    pagination?:Boolean;
    handlepageination:(page:number)=>void;
    handlesearch:(query:string)=>void
  }