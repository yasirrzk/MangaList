import React from 'react'

const Manga = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="flex sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">List Manga</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4 w-full">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-full rounded w-full object-cover object-center mb-6" src="https://comicvine.gamespot.com/a/uploads/scale_small/0/4/45048-7104-52108-1-dragon-ball.jpg" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">Volume :</h3>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Dragon Ball</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vitae quos, hic, velit, adipisci architecto ipsa aperiam nesciunt nostrum asperiores commodi distinctio tem</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-full rounded w-full object-cover object-center mb-6" src="https://comicvine.gamespot.com/a/uploads/scale_small/11112/111121983/6663460-1404343849-913-W.jpg" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">Volume :</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Naruto Shippuden The Last</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vitae quos, hic, velit, adipisci architecto ipsa aperiam nesciunt nostrum asperiores commodi distinctio tem</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-full rounded w-full object-cover object-center mb-6" src="https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/5327686-09.jpg" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">Volume :</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Monster:The perfect Edition</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vitae quos, hic, velit, adipisci architecto ipsa aperiam nesciunt nostrum asperiores commodi distinctio tem</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-full rounded w-full object-cover object-center mb-6" src="https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7417355-01.jpg" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">Volume :</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">The Legend of Dororo and Hyakkimaru</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vitae quos, hic, velit, adipisci architecto ipsa aperiam nesciunt nostrum asperiores commodi distinctio tem</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Manga