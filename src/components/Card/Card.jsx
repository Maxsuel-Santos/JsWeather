/* eslint-disable linebreak-style */

import React from 'react';

function Card() {
  return (

    <div className="bg-white p-6 mt-10 rounded-lg shadow-xl">

      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">Dom Basílio</span>
        <span className="text-slate-500 text-sm font-medium">Bahia, Brasil</span>
      </div>

      <div className="font-bold text-slate-700 flex mt-4 mb-2">
        <span className="text-8xl">27</span>
        <span className="text-3xl mt-2">°C</span>
      </div>

      <div className="text-center">
        <span className="block">Ícone</span>
        <span className="text-slate-700 font-medium">Nublado</span>
      </div>

    </div>

  );
}

export default Card;
