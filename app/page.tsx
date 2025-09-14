"use client"
import { useState , useEffect, useRef } from 'react'
import Image from 'next/image';


export default function Home() {
  const [minWidth, maxWidth, defaultWidth] = [240, 400, 350];
  const [ width, setWidth ] = useState(defaultWidth)
  
  const isResized = useRef(false);

   // 🔹 Load width dari localStorage saat pertama render
  useEffect(() => {
    const savedWidth = localStorage.getItem("sidebar-width");
    if (savedWidth) {
      setWidth(Number(savedWidth));
    }
  }, []);

  // 🔹 Save ke localStorage tiap kali width berubah
  useEffect(() => {
    localStorage.setItem("sidebar-width", String(width));
  }, [width]);

  useEffect(() => {
    const handleMouseMove = (e : MouseEvent) => {
      if (isResized.current) {
        setWidth((previousWidth) => {
          const newWidth = previousWidth + e.movementX / 2;
          const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;
          return isWidthInRange ? newWidth : previousWidth;
        });
      }
    }

    const handleMouseUp = () => {
      isResized.current = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener("mousemove",handleMouseMove)
      window.removeEventListener("mouseup",handleMouseUp)
    }
    
  }, []);

  return (
    <div className="flex flex-col max-h-screen h-screen overflow-hidden select-none ">
      <div className="p-2 text-center">
        <h1 className="text-xs">Friends</h1>
      </div>
      <div className="flex flex-1 w-full overflow-hidden  ">
        <div className="flex flex-col relative h-full">
          <div className="flex overflow-hidden h-full">
            <div className="w-[72px] overflow-auto overflow-x-hidden no-scrollbar flex flex-col gap-2">
              <div className='relative flex items-center justify-center '>
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex justify-center items-center before:content-[''] before:scale-0 before:h-5 before:bg-white before:w-1 before:rounded-r-full before:absolute before:left-0 active:before:h-10 hover:before:scale-100 before:transition-all before:duration-100 ease-in-out">
                  <h1 className='text-xl'>ds</h1>
                </div>
              </div>
              <div className='border-[1px] border-gray-900 w-10 mx-auto'>
              </div>
              <div className='relative flex items-center justify-center '>
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex justify-center items-center before:content-[''] before:h-1 before:bg-white before:w-1 before:rounded-r-full before:absolute before:left-0 active:before:h-10 hover:before:scale-100 hover:before:h-5 before:transition-all before:duration-100 ease-in-out">
                  <h1 className='text-xl'>ds</h1>
                </div>
              </div>
             
             <div className='relative flex items-center justify-center '>
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex justify-center items-center before:content-[''] before:scale-0 before:h-5 before:bg-white before:w-1 before:rounded-r-full before:absolute before:left-0 active:before:h-10 hover:before:scale-100 before:transition-all before:duration-100 ease-in-out">
                  <h1 className='text-xl'>ds</h1>
                </div>
              </div>
              <div className='relative flex items-center justify-center '>
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex justify-center items-center before:content-[''] before:scale-0 before:h-5 before:bg-white before:w-1 before:rounded-r-full before:absolute before:left-0 active:before:h-10 hover:before:scale-100 before:transition-all before:duration-100 ease-in-out">
                  <h1 className='text-xl'>ds</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[200px] max-w-[440px] border-l-[0.1px] border-t-[0.1px] border-gray-700 rounded-tl-lg" style={{width : `${width/16}rem`}}>
              <div className='shrink-0 h-12 border-b-[0.1px] border-gray-800 flex items-center justify-center p-2'>
                <button className='text-sm rounded-lg bg-gray-800 w-full h-full font-semibold hover:bg-gray-900'>Find or start a conversation</button>
              </div>
              <div className='overflow-hidden hover:overflow-y-auto custom-scrollbar-1 mr-1.5 pb-2'>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum, placeat accusamus autem commodi doloribus asperiores ratione architecto animi neque et. Necessitatibus porro modi facere mollitia quia. Veniam, inventore repellat!</div>
              </div>
              
            </div>
          </div>
          <div className="ml-1 mr-2 mb-2">
            <div className="rounded-lg px-2 py-3  bg-gray-800 flex items-center group">
              <div className='flex flex-1 items-center  '>

                <div className='flex relative'>
                  <Image
                    src="/my-ava.png" // For local images
                    alt="Description of the image"
                    width={200}
                    height={200}
                    className='h-8 w-8 rounded-full object-cover'
                  />

                  <div className='h-4 w-4 rounded-full -right-1 bottom-0 absolute bg-gray-800 flex items-center justify-center'>
                    <div className='rounded-full h-2 w-2 bg-green-300 flex items-center justify-center'>
                      <div className='h-1 w-1 rounded-full bg-gray-800'></div>
                    </div>
                  </div>
                </div>
              
              <div className='flex flex-col justify-center ml-2 '>
                <h1 className='font-sm font-semibold leading-none'>ddcy</h1>
                <div className='text-xs text-gray-400 h-[12px] overflow-hidden'>
                  <p className='transition-transform duration-200 ease-in-out group-hover:-translate-y-[12px]'>online</p>
                  <p className='transition-transform duration-200 ease-in-out group-hover:-translate-y-[16px] '>username</p>

                </div>
                
              </div>
              </div>
              <div className='flex gap-2 items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              

            </div>
          </div>
        </div>
        {/* handle resizer*/}
        <div className="flex-1 flex flex-col relative border-t-[0.1px] border-gray-700 ">
          <div className='shrink-0 h-12 border-b-[0.1px] border-gray-700 sticky z-10'>a</div>
          <div className='overflow-hidden hover:overflow-y-auto custom-scrollbar-2 '> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam aliquam rerum saepe enim, quibusdam ipsum repudiandae doloribus. Et neque nostrum voluptas, fugit earum similique eos fuga eligendi libero perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur asperiores inventore ducimus, quod quos a dicta sapiente molestiae accusantium, nihil itaque quidem ex. Dicta ducimus corrupti dolores aliquam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum soluta illo unde cumque totam itaque, beatae odio ut odit dolorum expedita facilis temporibus excepturi ab aliquam iusto. Quisquam, aliquam?</p>
          </div>
          <div onMouseDown={() => {isResized.current = true}} className="absolute inset-0 cursor-col-resize bg-transparent active:bg-gray-600 hover:bg-gray-600 w-1 transition-colors duration-300 ease-out"></div>
        </div>
      </div>

      
    </div>
  );
}
