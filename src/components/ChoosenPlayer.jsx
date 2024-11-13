import React from 'react'
import PropTypes from 'prop-types';
export default function ChoosenPlayer({player,handleRemovePlayer}) {
    const {
        player_name,
        player_type,
        batting_style,
        bowling_style,
        player_image,
      } = player;
  return (
    <div className="flex justify-between items-center p-6 border rounded-2xl">
        <div className="flex justify-center gap-4 items-center">
          <img src={player_image} alt="" className="w-20 h-20 rounded-2xl object-cover"/>
          <div>
            <h2 className="font-semibold text-2xl text-primary-text">{player_name}</h2>
            <p className="text-primary-text/60">{batting_style} {player_type==='All-rounder'||player_type==="Bowler"?`, ${bowling_style}`:''}</p>
          </div>
        </div>
        <div>
        <button onClick={()=>handleRemovePlayer(player)} className="text-[#F14749]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        </div>
    </div>
  )
}
ChoosenPlayer.propTypes={
  handleRemovePlayer: PropTypes.func.isRequired
}
