import { useState } from 'react';
import { fruitApi, blogApi } from './service/api';
import { FruitCard } from './components/FruitCard';
import { BlogCard } from './components/BlogCard';

function App() {
  const [fruits, setFruits] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const fetchFruit = async () => {
    const {data} = await fruitApi.get('/fruits')
    setFruits(data);
  }
  const fetchBlog = async () => {
    const {data} = await blogApi.get('/news');
    setBlogs(data);
  }

  return (
    <>
      <button className="font-bold bg-red-300 py-1 px-2 mx-2 mt-2 rounded-md" onClick={fetchFruit}>fetch fruit</button>
      <button className="font-bold bg-red-300 py-1 px-2 mx-2 mt-2 rounded-md" onClick={fetchBlog}>fetch blog</button>
      <section className='w-full px-3 md:w-[80%] md:m-auto'>
        <ul className='sm:flex sm:items-center sm:justify-center sm:flex-wrap gap-5'>
          {
            fruits && fruits.map((fruit) => {
              const { id, name, category, price } = fruit;
              return (
                <li className='bg-red-200 mt-2 p-1 rounded-sm' key={id}>
                  <FruitCard name={name} category={category} price={price} />
                </li>
              )
            })
          }
        </ul>
        <ul className='sm:flex sm:items-center sm:justify-center sm:flex-wrap gap-5 mt-5'>
          {
            blogs && blogs.map((blog) => {
              const { id, title, category, content, author } = blog;
              return (
                <li className='bg-gray-200 mt-2 p-1 rounded-sm' key={id}>
                  <BlogCard title={title} category={category} content={content} author={author} />
                </li>
              )
            })
          }
        </ul>
      </section>
    </>
  )
}

export default App
