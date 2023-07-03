import React from 'react'
import styles from "@/app/styles/common.module.css"
import MovieCard from "@/app/components/MovieCard";

const Movie = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
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