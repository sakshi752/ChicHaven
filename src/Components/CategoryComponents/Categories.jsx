import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryTitle } from '../../store/categories';

const Categories = () => {

  const dispatch = useDispatch();
  const categoryTitle = useSelector(state => state.categories.categoryTitle);

  const data = useSelector(state => state.categories.data);

  const handleCategoryClick = (title) => {
    dispatch(setCategoryTitle(title))
  }


  // const data = [
  //   {
  //     key: 1,
  //     img: "public/furniture/img1.webp",
  //     Title: "Wood Finish Table",
  //     category: "furniture",
  //     desc: ""
  //   },
  //   {
  //     key: 2,
  //     img: "public/plants/img1.jpg",
  //     Title: "Areca Palm Plant",
  //     category: "plants",
  //     desc: ""
  //   },
  //   {
  //     key: 3,
  //     img: "public/softToys/img1.jpg",
  //     Title: "Reversible Plushie Octopus ",
  //     category: "soft toys",
  //     desc: ""
  //   },
  //   {
  //     key: 4,
  //     img: "public/lamps/img1.avif",
  //     Title: "Table lamp",
  //     category: "lamps",
  //     desc: ""
  //   },
  //   {
  //     key: 5,
  //     img: "public/furniture/img2.jpg",
  //     Title: "Wall Shelve",
  //     category: "furniture",
  //     desc: ""
  //   },
  //   {
  //     key: 6,
  //     img: "public/plants/img2.jpg",
  //     Title: "Bambino Natural",
  //     category: "plants",
  //     desc: ""
  //   },
  //   {
  //     key: 7,
  //     img: "public/softToys/img2.webp",
  //     Title: "",
  //     category: "unicorn",
  //     desc: ""
  //   },
  //   {
  //     key: 8,
  //     img: "public/lamps/img2.avif",
  //     Title: "reading lamp",
  //     category: "lamps",
  //     desc: ""
  //   },
  //   {
  //     key: 9,
  //     img: "public/furniture/img3.avif",
  //     Title: "Mirror",
  //     category: "furniture",
  //     desc: ""
  //   },
  //   {
  //     key: 10,
  //     img: "public/plants/img3.jpg",
  //     Title: "Artificial Sunflower Plant",
  //     category: "plants",
  //     desc: ""
  //   },
  //   {
  //     key: 11,
  //     img: "public/softToys/img3.jpg",
  //     Title: "Teddy bear",
  //     category: "soft toys",
  //     desc: ""
  //   },
  //   {
  //     key: 12,
  //     img: "public/lamps/img3.jpg",
  //     Title: "Night Lamp",
  //     category: "lamps",
  //     desc: ""
  //   },
  //   {
  //     key: 13,
  //     img: "public/furniture/img4.avif",
  //     Title: "Wardrobe",
  //     category: "furniture",
  //     desc: ""
  //   },
  //   // {
  //   //     key:14,
  //   //     img:"",
  //   //     Title:"",
  //   //     category:"plants",
  //   //     desc:""
  //   // },//dfgfh
  //   {
  //     key: 15,
  //     img: "public/softToys/img4.jpg",
  //     Title: "Teddy bear",
  //     category: "soft toys",
  //     desc: ""
  //   },
  //   {
  //     key: 16,
  //     img: "public/lamps/img4.jpg",
  //     Title: "Night Lamp",
  //     category: "lamps",
  //     desc: ""
  //   },
  //   // {
  //   //     key:17,
  //   //     img:"public/furniture/img5.jpg",
  //   //     Title:"Wall Shelve",
  //   //     category:"furniture",
  //   //     desc:""
  //   // },
  //   // {
  //   //     key:18,
  //   //     img:"",
  //   //     Title:"",
  //   //     category:"plants",
  //   //     desc:""
  //   // },
  //   // {
  //   //     key:19,
  //   //     img:"",
  //   //     Title:"Wall Shelve",
  //   //     category:"furniture",
  //   //     desc:""
  //   // },
  //   // {
  //   //     key:20,
  //   //     img:"",
  //   //     Title:"Table lamp",
  //   //     category:"lamps",
  //   //     desc:""
  //   // },
  // ]

  return (
    <div className='mt-8 md:mt-10 min-h-screen'>
      <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-xl font-semibold text-black'>{categoryTitle}</h1>
        <div className='flex gap-4'>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('All')}>
            All
          </button>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('Furniture')}>
            Furniture
          </button>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('Lamps')}>
            Lamps
          </button>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('Plants')}>
            Plants
          </button>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('Soft Toys')}>
            Soft toys
          </button>
        </div>

        {/* Grid of cards */}
        <div className='mt-4 grid sm:grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-5 px-4'>
          {data.map((card) => (
            <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-md bg-white cursor-pointer ">
              <img className="w-full   max-h-[350px] h-[250px]" src={card.img} alt={card.title} />

              <div className='px-6 py-4'>
                <h1 className="font-bold text-xl mb-2 text-gray-800">{card.Title}</h1>

                <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700">
                  Category: {card.category}
                </span>

                <div className='flex items-center
                 justify-between mt-5'>
                  <span className='text-xl font-semibold'>${card.price}</span>
                  <div className='flex gap-2'>
                    <button className='inline-block bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded'>
                      Add
                    </button>
                    <button className='inline-block bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded'>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories
