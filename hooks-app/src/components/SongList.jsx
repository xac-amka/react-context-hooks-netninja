import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';
// We use useEffect hook in class component as lifecycle method
// When we use functional components we don't have access to those lifecycle methods
// In the past if we wanted to run some code that updates state, normally we had to use class component and hook into lifecycle method. Now we use this useEffect hook instead of using class component
// We use useEffect for database
const SongList = () => {
    const [songs, setSongs] = useState([
        {id: 1, title: 'Rokitbay - Microphone'},
        {id: 2, title: 'Linken park - Numb'},
        {id: 3, title: 'Mizura - Toko eto todaro'},
        {id: 4, title: 'Ed Sheeran - Song of Fire'}
    ]);
    const [age, setAge] = useState(21);
    const addSong = (title) => {
        // const title = quer
        setSongs([...songs, { title, id: uuidv4()}])
    }
    // This runs every time data updates or component rerenders
    useEffect(()=> {
        console.log('useEffect hook run', songs)
    }, [songs])
    useEffect(()=> {
        console.log('useEffect hook run', age)
    }, [age])
    return (
        <div className="song-list">
            <ul>
                { songs.map( song => {
                    return <li key={song.id}>{song.title}</li>
                }) }
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={()=> setAge(age+1)}>Add 1 to age: {age}</button>
        </div>
    )
}

export default SongList;