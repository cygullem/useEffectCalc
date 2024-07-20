import { useState, useEffect } from 'react'

function App() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [operation, setOperation] = useState('add'); 

  useEffect(() => {
      if (operation === 'add') {
          setAnswer(A + B);
      } else if (operation === 'subtract') {
          setAnswer(A - B); 
      } else if (operation === 'multiplication') {
          setAnswer(A * B);
      } else if (operation === 'division') {
          setAnswer(A / B);
      }
  }, [A, B, operation]);

  return (
    <>
      <div className='flex flex-col items-center justify-center bg-slate-700 rounded-lg p-8 text-white font-medium text-3xl border'>
        <p className='w-full cursor-pointer mb-8 text-3xl font-medium'>CASIO</p>
        <input className='w-full mt-2 text-end font-medium text-3xl p-4 rounded-xl text-black' placeholder='Total' value={answer} readOnly/>

        <div className='flex flex-row items-center justify-between w-full p-2 bg-slate-400 mt-4 rounded-xl gap-4'>
          <div className='w-20 flex flex-col justify-center bg-slate-400'>
            <input placeholder='A' className=' p-2 rounded-lg text-black text-center' value={A} onChange={(e) => setA(parseInt(e.target.value))}/>
            <input placeholder='B' className=' p-2 rounded-lg mt-2 text-black text-center' value={B} onChange={(e) => setB(parseInt(e.target.value))}/>
          </div>

          <div className='btnCont w-full gap-2'>
            <button className='items-center rounded-lg p-2 bg-green-700' onClick={() => setOperation('add')}><i class="fa-solid fa-plus"></i></button>
            <button className='items-center rounded-lg p-2 bg-red-700' onClick={() => setOperation('subtract')}><i class="fa-solid fa-minus"></i></button>
            <button className='items-center rounded-lg p-2 bg-yellow-700' onClick={() => setOperation('multiplication')}><i class="fa-solid fa-xmark"></i></button>
            <button className='items-center rounded-lg p-2 bg-blue-700' onClick={() => setOperation('division')}><i class="fa-solid fa-divide"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
