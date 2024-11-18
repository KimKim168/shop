import { Fugaz_One } from 'next/font/google';

// Import Fugaz One font
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Button({ text, dark , full}) {

  

  return (
    <button
    
    className={` mx-1 sm:mt-3 rounded-lg overflow-hidden duration-200 hover:opacity-60 border-1 border-solid 
      ${dark ? 'text-white bg-blue-600' : 'text-black bg-white'} ${full ? '' : ''}`}>
      <p
        className={`px-4 sm:px-6 py-2 sm:py-2 whitespace-nowrap `}
      >
        {text}
      </p>
    </button>
  );
}
