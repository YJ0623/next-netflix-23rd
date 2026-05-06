import Image from 'next/image';
import search from '@/public/icon_search.svg';
import close from '@/public/icon_close2.svg';

const mockTopSearches = [
    {
        id: 1,
        title: 'Citiation',
        // image: '/citiation.jpg',
    },
    {
        id: 2,
        title: 'The Witcher',
        // image: '/oloture.jpg',
    }
]

export default function SearchPage() {
  return (
    <div className="flex flex-col w-full h-dvh bg-black pt-11">
      <div className="flex flex-row items-center justify-center w-full h-13 bg-gray-800">
        <Image
          src={search}
          alt="search icon"
          width={20}
          height={20}
          className="mr-2"
        />
        <input
          type="text"
          placeholder="Search for a show, movie, genre, e.t.c."
          className="w-67.5 bg-gray-800 text-gray-600 placeholder:text-gray-600 border-none focus:outline-none"
        />
        <Image
          src={close}
          alt="close icon"
          width={16}
          height={16}
          className="ml-5"
          loading="eager"
        />
      </div>

      <div className='text-heading1 text-white ml-4 my-3.5'>Top Searches</div>

      {mockTopSearches.map((item) => (
        <div key={item.id} className='flex flex-row w-full h-19 bg-gray-800 text-white my-0.5'>
            {/* <Image src={item.image} alt={item.title} width={146} height={76} className='bg-white' /> */}
            <div className='flex w-full h-full items-center ml-4.5'>{item.title}</div>
        </div>
      ))}
    </div>
  );
}
