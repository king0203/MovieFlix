import React from 'react'
import styles from "@/app/styles/common.module.css"
import MovieCard from "@/app/components/MovieCard";

const Movie = async () => {

    const url = process.env.RAPID_KEY
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '780399042emsh00c2f12456e70a3p13aa9fjsnd96f61ebb0f4',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };
    
    
    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
  return (
    <>
         <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Movie