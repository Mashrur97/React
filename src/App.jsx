
import './App.css'
import { Suspense } from 'react';
import Batsman from './batsman'
import Users from './users'
import Posts from './posts';

const fetchposts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}
function App() {
  const postsPromise = fetchposts();
  return (
    <>
    <Users ></Users>
    <Batsman></Batsman>

    <Suspense fallback={<h4>Posts are coming....</h4>}>
    <Posts postsPromise = {postsPromise}></Posts>
    </Suspense>
    </>
  )
}

export default App
