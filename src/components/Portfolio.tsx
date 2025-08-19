// // // import React, { useState } from 'react';
// // // import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// // // const Portfolio: React.FC = () => {
// // //   const [selectedImage, setSelectedImage] = useState<number | null>(null);
// // //   const [activeFilter, setActiveFilter] = useState('all');

// // //   const portfolioItems = [
// // //     {
// // //       id: 1,
// // //       image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// // //       category: 'wedding',
// // //       title: 'Romantic Garden Wedding',
// // //     },
// // //     {
// // //       id: 2,
// // //       image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// // //       category: 'prewedding',
// // //       title: 'Sunset Engagement Session',
// // //     },
// // //     {
// // //       id: 3,
// // //       image: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// // //       category: 'child',
// // //       title: 'Playful Childhood Moments',
// // //     },
// // //     {
// // //       id: 4,
// // //       image: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// // //       category: 'family',
// // //       title: 'Loving Family Portrait',
// // //     },
// // //     {
// // //       id: 5,
// // //       image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// // //       category: 'studio',
// // //       title: 'Professional Studio Session',
// // //     },
// // //     {
// // //       id: 6,
// // //       image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// // //       category: 'corporate',
// // //       title: 'Executive Headshots',
// // //     },
// // //     {
// // //       id: 7,
// // //       image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// // //       category: 'wedding',
// // //       title: 'Elegant Bridal Portrait',
// // //     },
// // //     {
// // //       id: 8,
// // //       image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// // //       category: 'prewedding',
// // //       title: 'Urban Love Story',
// // //     },
// // //   ];

// // //   const filters = [
// // //     { key: 'all', label: 'All Work' },
// // //     { key: 'wedding', label: 'Weddings' },
// // //     { key: 'prewedding', label: 'Pre-Wedding' },
// // //     { key: 'child', label: 'Children' },
// // //     { key: 'family', label: 'Family' },
// // //     { key: 'studio', label: 'Studio' },
// // //     { key: 'corporate', label: 'Corporate' },
// // //   ];

// // //   const filteredItems = activeFilter === 'all' 
// // //     ? portfolioItems 
// // //     : portfolioItems.filter(item => item.category === activeFilter);

// // //   const nextImage = () => {
// // //     if (selectedImage !== null) {
// // //       setSelectedImage((selectedImage + 1) % filteredItems.length);
// // //     }
// // //   };

// // //   const prevImage = () => {
// // //     if (selectedImage !== null) {
// // //       setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
// // //     }
// // //   };

// // //   return (
// // //     <section id="portfolio" className="py-20 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="text-center mb-16">
// // //           <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6">
// // //             Our Portfolio
// // //           </h2>
// // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
// // //             Each photograph tells a story. Explore our collection of moments that celebrate love, life, and the beauty of human connections.
// // //           </p>

// // //           {/* Filter Buttons */}
// // //           <div className="flex flex-wrap justify-center gap-4 mb-12">
// // //             {filters.map((filter) => (
// // //               <button
// // //                 key={filter.key}
// // //                 onClick={() => setActiveFilter(filter.key)}
// // //                 className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
// // //                   activeFilter === filter.key
// // //                     ? 'bg-yellow-400 text-black'
// // //                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// // //                 }`}
// // //               >
// // //                 {filter.label}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Portfolio Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // //           {filteredItems.map((item, index) => (
// // //             <div
// // //               key={item.id}
// // //               className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
// // //               onClick={() => setSelectedImage(index)}
// // //             >
// // //               <img
// // //                 src={item.image}
// // //                 alt={item.title}
// // //                 className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // //                 <div className="absolute bottom-4 left-4 right-4">
// // //                   <h3 className="text-white font-semibold text-lg">{item.title}</h3>
// // //                   <p className="text-gray-200 text-sm capitalize">{item.category}</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Lightbox Modal */}
// // //         {selectedImage !== null && (
// // //           <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
// // //             <button
// // //               onClick={() => setSelectedImage(null)}
// // //               className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
// // //             >
// // //               <X size={32} />
// // //             </button>

// // //             <button
// // //               onClick={prevImage}
// // //               className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
// // //             >
// // //               <ChevronLeft size={32} />
// // //             </button>

// // //             <button
// // //               onClick={nextImage}
// // //               className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
// // //             >
// // //               <ChevronRight size={32} />
// // //             </button>

// // //             <img
// // //               src={filteredItems[selectedImage].image}
// // //               alt={filteredItems[selectedImage].title}
// // //               className="max-w-full max-h-full object-contain"
// // //             />
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Portfolio;







// // import React, { useState } from 'react';
// // import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// // const Portfolio: React.FC = () => {
// //   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
// //   const [activeFilter, setActiveFilter] = useState('all');

// //   const portfolioItems = [
// //     {
// //       id: 1,
// //       type: 'image',
// //       url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// //       category: 'wedding',
// //       title: 'Romantic Garden Wedding',
// //     },
// //     {
// //       id: 2,
// //       type: 'video',
// //       url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
// //       category: 'prewedding',
// //       title: 'Sunset Engagement Session (Video)',
// //     },
// //     {
// //       id: 3,
// //       type: 'image',
// //       url: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// //       category: 'child',
// //       title: 'Playful Childhood Moments',
// //     },
// //     {
// //       id: 4,
// //       type: 'video',
// //       url: 'https://www.youtube.com/embed/ysz5S6PUM-U',
// //       category: 'family',
// //       title: 'Family Video Session',
// //     },
// //     {
// //       id: 5,
// //       type: 'image',
// //       url: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// //       category: 'studio',
// //       title: 'Professional Studio Session',
// //     },
// //     {
// //       id: 6,
// //       type: 'image',
// //       url: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
// //       category: 'corporate',
// //       title: 'Executive Headshots',
// //     },
// //   ];

// //   const filters = [
// //     { key: 'all', label: 'All Work' },
// //     { key: 'wedding', label: 'Weddings' },
// //     { key: 'prewedding', label: 'Pre-Wedding' },
// //     { key: 'child', label: 'Children' },
// //     { key: 'family', label: 'Family' },
// //     { key: 'studio', label: 'Studio' },
// //     { key: 'corporate', label: 'Corporate' },
// //   ];

// //   const filteredItems =
// //     activeFilter === 'all'
// //       ? portfolioItems
// //       : portfolioItems.filter((item) => item.category === activeFilter);

// //   const nextItem = () => {
// //     if (selectedIndex !== null) {
// //       setSelectedIndex((selectedIndex + 1) % filteredItems.length);
// //     }
// //   };

// //   const prevItem = () => {
// //     if (selectedIndex !== null) {
// //       setSelectedIndex(
// //         selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1
// //       );
// //     }
// //   };

// //   return (
// //     <section id="portfolio" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6">
// //             Our Portfolio
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
// //             Each photograph or video tells a story. Explore our collection of moments that celebrate love, life, and the beauty of human connections.
// //           </p>

// //           {/* Filter Buttons */}
// //           <div className="flex flex-wrap justify-center gap-4 mb-12">
// //             {filters.map((filter) => (
// //               <button
// //                 key={filter.key}
// //                 onClick={() => setActiveFilter(filter.key)}
// //                 className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
// //                   activeFilter === filter.key
// //                     ? 'bg-yellow-400 text-black'
// //                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// //                 }`}
// //               >
// //                 {filter.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Portfolio Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //           {filteredItems.map((item, index) => (
// //             <div
// //               key={item.id}
// //               className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
// //               onClick={() => setSelectedIndex(index)}
// //             >
// //               {item.type === 'image' ? (
// //                 <img
// //                   src={item.url}
// //                   alt={item.title}
// //                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
// //                 />
// //               ) : (
// //                 <div className="relative w-full h-80 bg-black flex items-center justify-center">
// //                   <Play size={48} className="text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
// //                   <iframe
// //                     className="hidden" // Hidden here, will show only in modal
// //                     src={item.url}
// //                     title={item.title}
// //                   />
// //                 </div>
// //               )}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 <div className="absolute bottom-4 left-4 right-4">
// //                   <h3 className="text-white font-semibold text-lg">{item.title}</h3>
// //                   <p className="text-gray-200 text-sm capitalize">{item.category}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Lightbox Modal */}
// //         {selectedIndex !== null && (
// //           <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
// //             <button
// //               onClick={() => setSelectedIndex(null)}
// //               className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
// //             >
// //               <X size={32} />
// //             </button>

// //             <button
// //               onClick={prevItem}
// //               className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
// //             >
// //               <ChevronLeft size={32} />
// //             </button>

// //             <button
// //               onClick={nextItem}
// //               className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
// //             >
// //               <ChevronRight size={32} />
// //             </button>

// //             {filteredItems[selectedIndex].type === 'image' ? (
// //               <img
// //                 src={filteredItems[selectedIndex].url}
// //                 alt={filteredItems[selectedIndex].title}
// //                 className="max-w-full max-h-full object-contain"
// //               />
// //             ) : (
// //               <div className="w-full max-w-4xl aspect-video">
// //                 <iframe
// //                   src={filteredItems[selectedIndex].url}
// //                   title={filteredItems[selectedIndex].title}
// //                   className="w-full h-full rounded-lg"
// //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                   allowFullScreen
// //                 ></iframe>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Portfolio;







// import React, { useState } from 'react';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const Portfolio: React.FC = () => {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [activeFilter, setActiveFilter] = useState('all');

//   const portfolioItems = [
//     {
//       id: 1,
//       type: 'image',
//       url: '/videoone.mp4',
//       category: 'wedding',
//       title: 'Romantic Garden Wedding',
//     },
//     {
//       id: 2,
//       type: 'video',
//       url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       category: 'prewedding',
//       title: 'Sunset Engagement Session (Video)',
//     },
//     {
//       id: 3,
//       type: 'image',
//       url: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       category: 'child',
//       title: 'Playful Childhood Moments',
//     },
//     {
//       id: 4,
//       type: 'video',
//       url: 'https://www.youtube.com/embed/ysz5S6PUM-U',
//       category: 'family',
//       title: 'Family Video Session',
//     },
//   ];

//   const filters = [
//     { key: 'all', label: 'All Work' },
//     { key: 'wedding', label: 'Weddings' },
//     { key: 'prewedding', label: 'Pre-Wedding' },
//     { key: 'child', label: 'Children' },
//     { key: 'family', label: 'Family' },
//     { key: 'studio', label: 'Studio' },
//     { key: 'corporate', label: 'Corporate' },
//   ];

//   const filteredItems =
//     activeFilter === 'all'
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === activeFilter);

//   const nextItem = () => {
//     if (selectedIndex !== null) {
//       setSelectedIndex((selectedIndex + 1) % filteredItems.length);
//     }
//   };

//   const prevItem = () => {
//     if (selectedIndex !== null) {
//       setSelectedIndex(
//         selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1
//       );
//     }
//   };

//   // helper to add autoplay/loop params for YouTube cards
//   const getCardVideoUrl = (url: string) => {
//     const videoId = url.split('/embed/')[1];
//     return `${url}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0`;
//   };

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6">
//             Our Portfolio
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Each photograph or video tells a story. Explore our collection of moments that celebrate love, life, and the beauty of human connections.
//           </p>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {filters.map((filter) => (
//               <button
//                 key={filter.key}
//                 onClick={() => setActiveFilter(filter.key)}
//                 className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                   activeFilter === filter.key
//                     ? 'bg-yellow-400 text-black'
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 {filter.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Portfolio Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
//               onClick={() => setSelectedIndex(index)}
//             >
//               {item.type === 'image' ? (
//                 <img
//                   src={item.url}
//                   alt={item.title}
//                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//               ) : (
//                 <iframe
//                   src={getCardVideoUrl(item.url)}
//                   title={item.title}
//                   className="w-full h-80 object-cover"
//                   allow="autoplay; loop; muted; fullscreen"
//                 />
//               )}

//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white font-semibold text-lg">{item.title}</h3>
//                   <p className="text-gray-200 text-sm capitalize">{item.category}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Lightbox Modal */}
//         {selectedIndex !== null && (
//           <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
//             <button
//               onClick={() => setSelectedIndex(null)}
//               className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
//             >
//               <X size={32} />
//             </button>

//             <button
//               onClick={prevItem}
//               className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
//             >
//               <ChevronLeft size={32} />
//             </button>

//             <button
//               onClick={nextItem}
//               className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
//             >
//               <ChevronRight size={32} />
//             </button>

//             {filteredItems[selectedIndex].type === 'image' ? (
//               <img
//                 src={filteredItems[selectedIndex].url}
//                 alt={filteredItems[selectedIndex].title}
//                 className="max-w-full max-h-full object-contain"
//               />
//             ) : (
//               <div className="w-full max-w-4xl aspect-video">
//                 <iframe
//                   src={filteredItems[selectedIndex].url + '?autoplay=1'}
//                   title={filteredItems[selectedIndex].title}
//                   className="w-full h-full rounded-lg"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;






import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      type: 'image',
      url: '/wed-1.jpg', // example image in public/images/
      category: 'wedding',
      title: 'Romantic Garden Wedding',
    },
    {
      id: 2,
      type: 'image',
      url: '/kid-1.jpg', // example image in public/images/
      category: 'child',
      title: 'Playful Childhood Moments',
    },
    {
      id: 3,
      type: 'video',
      url: '/fam.mp4',
      category: 'family',
      title: 'Family Video Session',
    },
    {
      id: 4,
      type: 'video',
      url: '/videoone.mp4', // local video in public/videos/
      category: 'wedding',
      title: 'Sunset Engagement Session (Video)',
    },
    {
      id: 5,
      type: 'video',
      url: '/kanyadanam.mp4', // local video in public/videos/
      category: 'wedding',
      title: 'Sunset Engagement Session (Video)',
    },
   
    {
      id: 7,
      type: 'video',
      url: '/kid1.mp4',
      category: 'child',
      title: 'Playful Childhood Moments',
    },
    {
      id: 8,
      type: 'video',
      url: '/kid2.mp4',
      category: 'child',
      title: 'Playful Childhood Moments',
    },
     {
      id: 23,
      type: 'image',
      url: '/ifam-2.jpg',
      category: 'family',
      title: 'Family Photo Session',
    },
       {
      id: 25,
      type: 'image',
      url: '/ifam-1.jpg',
      category: 'family',
      title: 'Family Photo Session',
    },
    {
      id: 9,
      type: 'video',
      url: '/fam2.mp4',
      category: 'family',
      title: 'Family Video Session',
    },
    {
      id: 10,
      type: 'video',
      url: '/haldi.mp4',
      category: 'prewedding',
      title: 'Pre-Wedding Video Session',
    },
    {
      id: 11,
      type: 'video',
      url: '/haldi.mp4',
      category: 'studio',
      title: 'Family Video Session',
    },
    {
      id: 12,
      type: 'image',
      url: '/std-2.jpg',
      category: 'studio',
      title: 'Family Video Session',
    },
    {
      id: 13,
      type: 'image',
      url: '/std-1.jpg',
      category: 'studio',
      title: 'Family Video Session',
    },
    {
      id: 14,
      type: 'video',
      url: '/studio-1.mp4',
      category: 'studio',
      title: 'Family Video Session',
    },
    {
      id: 15,
      type: 'video',
      url: '/can-1.mp4',
      category: 'corporate',
      title: 'Family Video Session',
    },
    {
      id: 16,
      type: 'image',
      url: '/cand.jpg',
      category: 'corporate',
      title: 'Family Video Session',
    },
    {
      id: 17,
      type: 'image',
      url: '/cand-2.jpg',
      category: 'corporate',
      title: 'Family Video Session',
    },
    {
      id: 18,
      type: 'video',
      url: '/can-2.mp4',
      category: 'corporate',
      title: 'Family Video Session',
    },
        {
      id: 19,
      type: 'image',
      url: '/pre-2.jpg',
      category: 'prewedding',
      title: 'Pre-Wedding Video Session',
    },
    {
      id: 20,
      type: 'image',
      url: '/pre-1.jpg',
      category: 'prewedding',
      title: 'Pre-Wedding Video Session',
    },
     {
      id: 6,
      type: 'video',
      url: '/pre-wedding.mp4',
      category: 'prewedding',
      title: 'Pre-Wedding Video Session',
    },

     {
      id: 21,
      type: 'image',
      url: '/wed-2.jpg', // example image in public/images/
      category: 'wedding',
      title: 'Romantic Garden Wedding',
    },

    {
      id: 22,
      type: 'image',
      url: '/kid-2.jpg', // example image in public/images/
      category: 'child',
      title: 'Playful Childhood Moments',
    },
    
  ];

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'wedding', label: 'Weddings' },
    { key: 'prewedding', label: 'Pre-Wedding' },
    { key: 'child', label: 'Children' },
    { key: 'family', label: 'Family' },
    { key: 'studio', label: 'Studio' },
    { key: 'corporate', label: 'Corporate' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const nextItem = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  };

  const prevItem = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Each photograph or video tells a story. Explore our collection of moments that celebrate love, life, and the beauty of human connections.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <video
                  src={item.url}
                  className="w-full h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-200 text-sm capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevItem}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextItem}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight size={32} />
            </button>

            {filteredItems[selectedIndex].type === 'image' ? (
              <img
                src={filteredItems[selectedIndex].url}
                alt={filteredItems[selectedIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="w-full max-w-4xl">
                <video
                  src={filteredItems[selectedIndex].url}
                  className="w-full h-full rounded-lg"
                  controls
                  autoPlay
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
