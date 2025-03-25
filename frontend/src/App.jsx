import { useState } from 'react';
import './App.css';

function App() {
  
  const [selectedImage, setSelectedImage] = useState('https://lh3.googleusercontent.com/snTjRW1KY17rb8k3GOYThAu103MQ6fmFQgpSSIORvoEv8rOq5S6U0bjl71yUR3AfMck2zT6_Z4qXwa8-pAPSVIR8tSpPrBQhQFs5oQ=e365-pa-nu-s0-rw');

  
  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className='flex'>
        <div>
          <img 
            src="https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-7kAnuMn2JYM8SouH9sUO1Y-5decaa2561233114d97a43fceaa78f4f-Docs_Full_Logo.svg" 
            alt="Logo" 
          />
          <p className='text-5xl mt-4 ml-14 font-bold'>online</p>
          <p className='text-5xl mt-3 ml-14 font-bold'>collaborative</p>
          <p className='text-5xl mt-3 ml-14 font-bold'>Documents</p>
          <p className='mt-3'>AI-powered documents to help you and your team create and</p>
          <p>collaborate on content.</p>

          <button 
            type="button" 
            className="focus:outline-none text-white ml-24 mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 "
          >
            SignUp
          </button>
        </div>

        <div className=''>
          <img 
            src="https://lh3.googleusercontent.com/Z46v0WUwJTOMu4_KY4Z46AFSfo5C4z3UdTMOsbHKDI4tRRsK3fElJVKzmUapYydds5tifA-XXelhBaNtI0x9Un4DnyN2VPlu_nQv8A=e365-pa-nu-rw-w1416" 
            className='h-110' 
            alt="Illustration"
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-1/2">
          <video width="100%" autoPlay muted>
            <source 
              src="https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-2OatdVfBoMyW0INXNXSExr-87ca16a2fc29ea9c70d098fcb1780114-23582_Docs_Help_Me_Create_Video_04.compressed.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-1/2 pl-10">
          <h2 className="text-4xl font-bold">Get more done with Gemini in Docs</h2>
          <p className="mt-4 text-xl">
            Using a few simple prompts, create professional, stylized and structured documents with images, tables, and more. 
            Get help refining your content, see the latest summary of your work, and ask questions to improve and finalize your document. 
            Try Gemini for Google Workspace today.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center text-center mt-20">
        <div>
          <h2 className="text-4xl font-bold">Effortlessly create documents</h2>
          <p className="mt-4 text-xl">Never start a document from scratch – get started with templates and</p>
          <p className='mt-2 text-xl'>building blocks to get a professional look from the off.</p>
        </div>
      </div>

      
      <div className="flex items-center space-x-8 mt-10">
        <div>
          <p 
            className="text-xl mb-4 cursor-pointer" 
            onClick={() => handleClick('https://lh3.googleusercontent.com/snTjRW1KY17rb8k3GOYThAu103MQ6fmFQgpSSIORvoEv8rOq5S6U0bjl71yUR3AfMck2zT6_Z4qXwa8-pAPSVIR8tSpPrBQhQFs5oQ=e365-pa-nu-s0-rw')}
          >
            Get a head start on your document with smart canvas
          </p>
          <p 
            className="text-xl mb-4 cursor-pointer" 
            onClick={() => handleClick('https://lh3.googleusercontent.com/ZTkoTAX9Bb_tHTW_1KMeTKtHO6tq9-S4C5SJte_6fGE3xYGI_rKMS7AY4A2_mAyyCID9KqOjiMC3G3bvTBYw2x2di9DheaddRZAv=e365-pa-nu-s0-rw')}
          >
            Easily populate your document with rich details
          </p>
          <p 
            className="text-xl mb-4 cursor-pointer" 
            onClick={() => handleClick('https://lh3.googleusercontent.com/er3CWnoN2UWCO2C5FVuIj8xNkRoltmsW9_bnlppVxThtlQ0eGlYDzvpYQxyCiBeTudA0yscL0Oq17qRcRXsSqTXVh6nlsAn8R1rx=e365-pa-nu-s0-rw')}
          >
            Remove page breaks and write without limits
          </p>
          <p 
            className="text-xl mb-4 cursor-pointer" 
            onClick={() => handleClick('https://lh3.googleusercontent.com/OrWMguUaJ-_UXljVsLx6eq_Bsgg8NyaEcIFokC9QvObcQu6MHglCZZMpBXnZwCz7FkNBOx4PCRBzlCfJOgPgT9qc-NDgzaaQl1on=e365-pa-nu-s0-rw')}
          >
            Stay organised with document tabs
          </p>
        </div>

        <div>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Selected Illustration" 
              className="w-110 h-110"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
