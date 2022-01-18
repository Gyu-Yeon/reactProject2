# Today's lessons.

## 1. import / export in JSX

- when you want to use important valialbe in another file.
- write 'export default' next to variable that you want to use it in another file.
  <br> ex) let data = [1,2,3]
  <br> export default data
- more than 2 or more valiables to use in another file.
- write export next to variables with { }
  <br> ex) let data1 = 1 , let data2 = 2
  <br> export {data1, data2}
- on import file, write 'import ()' from './(route of the file) on the top of the file,
  <br> ex) import (name it whatever you want) from './data.js';
  <br> ex) import {data1, data2 } from './data.js

## 2. How to use for loop in JSX

- Using for loop in JSX it is complicate, so we use 'map' method
- if you like to use 'map' method first, you need any useState that stores array.
- write 'map' inside of { },
  <br> ex) { title.map(()=>{return( hello World)})
- if it works properly, you'll get title.length of hello worlds.
- same as JS map method, you can put any letter as a parameter.
  <br> ex) title.map((a)=>{ return ( ) })
- In JSX you need 'i' for increasing number.
  <br> ex) title.map((a,i)=>{ return ( key={ i } ) })

  2022.01.11

## 3. How to Routing in JSX

- npm install react-router-dom@5 write this in your terminal and download router library
- go to your index.js file and write import { BrowserRouter } from "react-router-dom" top of the file and,
  <br> cover < App /> components with < BrowserRouter >
  <br> ex)
  <br> < BrowserRouter >
  <br> < App />
  <br> </ BrowserRouter >
- Next, go to App.js file and write import { Link, Route, Switch } from "react-router-dom" top of the file.
- Cover any components that you want to make as a route with < Route > tag.
  <br> ex)
  <br> < Route >
  <br> < div > hello World </ div >
  <br> </ Route >
- write the path inside of tag
  <br> ex)
  <br> < Route path = { " / " >
  <br> < div > hello World </ div >
  <br> </ Route >

  2022.01.12

## 4. How to make 1000's of pages by using URL parmeter

- write ' import { useParams } from "react-router-dom" ' on the top of the file that you are going to use URL parameter.
- write ex) inside of return ( )
  <br> ex) let id =useParams();
- wherever you write id, { id' num } will remain after 'id'
  <br> ex) if the URL is localhost:3000/detail/1
  <br> props.shoes[id].title =>
  <br> props.shoes[1].title

  2022.01.17

## 4. How to use ajax in JSX

- write 'npm install axios in your terminal.
- write import axios from "axios" on the top of the file that you are going to use axios.
- choose when to use, ex) onClick, useEffect.
- how to send get request to sever by using axois
  <br> ex)
  <br> onClick={() => {
  <br> axios
  <br> .get(" https://codingapple1.github.io/shop/data2.json")
  <br> .then(result => {
  <br> console.log(result.data);
  <br> shoes변경([...shoes, ...result.data]);
  <br> })
  <br> .catch(() => {
  <br> console.log("fail");
  <br> });
  <br> }}

## 5. useEffect

-
