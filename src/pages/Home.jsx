import Sidebar from "../components/Sidebar";
import Feedback from "../components/Feedback";
import { useState } from "react";
import CardContainer from "../components/CardContainer";

const Home = () => {
  const [feedback, setFeedback] = useState(false);
  const [viewType, setViewType] = useState("grid");

  return (
    <>
      <div className="flex">
        <Sidebar
          viewType={viewType}
          setViewType={setViewType}
          setFeedback={setFeedback}
        />
        <CardContainer viewType={viewType} />
      </div>
      {feedback && <Feedback setFeedback={setFeedback} />}
    </>
  );
};

export default Home;

/**

import { useState } from 'react'
import { X, Grid, List } from 'lucide-react'

interface NewsItem {
  id: number
  title: string
  description: string
  timestamp: string
  image: string
}

export default function NewsFeed() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid')
  
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Sed volutpat vitae id eleifend. Commodo...",
      description: "Interdum pretium porttitor nibh cursus...",
      timestamp: "Mon, 21 Dec 2020 14:57 GMT",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      title: "Risus natoque porta eget vestibulum...",
      description: "Nec facilisis duis venenatis nulla porta...",
      timestamp: "Mon, 21 Dec 2020 14:57 GMT",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Magnis quisque non ullamcorper mus...",
      description: "Amet vitae rhoncus nisi tellus eget ut vulputate...",
      timestamp: "Mon, 21 Dec 2020 14:57 GMT",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 4,
      title: "Eu pellentesque aenean vel commodo in. Nibh...",
      description: "Nullam tempus nisl laoreet arcu sit eget...",
      timestamp: "Mon, 21 Dec 2020 14:57 GMT",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 5,
      title: "Ut vestibulum amet orci lacus potenti eu cras...",
      description: "Nulla gravida id quam rutrum. Aenean tempus..",
      timestamp: "Mon, 21 Dec 2020 14:57 GMT",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 6,
      title: "Pretium duis dolor morbi rhoncus eleifend. Puru...",
      description: "At vulputate ultricies sed euismod nulla. Sed..",
      timestamp: "Mon, 21 Dec 2020 14:57 GMT",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header Section }
      <div className="flex items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
        <img
          src="/placeholder.svg?height=40&width=40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h1 className="font-semibold text-gray-800">Hi Reader,</h1>
          <p className="text-gray-600 text-sm">Here's your News!</p>
        </div>
      </div>

      { View Toggle }
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <h2 className="font-semibold text-gray-800 mb-4">View Toggle</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setViewType('grid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              viewType === 'grid'
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Grid className="w-4 h-4" />
            Grid
          </button>
          <button
            onClick={() => setViewType('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              viewType === 'list'
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <List className="w-4 h-4" />
            List
          </button>
        </div>
      </div>

      { Feedback Section }
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <h2 className="font-semibold text-gray-800 mb-4">Have a Feedback?</h2>
        <button className="bg-emerald-400 text-white px-6 py-2 rounded-md hover:bg-emerald-500 transition-colors">
          We're Listening!
        </button>
      </div>

      { News Grid }
      <div className={`grid ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6 mb-8`}>
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt=""
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <time className="text-gray-400 text-xs">{item.timestamp}</time>
            </div>
          </div>
        ))}
      </div>

      { Pagination }
      <div className="flex justify-center gap-2">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded-full ${
              page === 1
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
          »
        </button>
      </div>
    </div>
  )
}

*/
