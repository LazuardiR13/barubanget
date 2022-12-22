import React, { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'


const IklanProfile = () => {
    const [news, setNews] = useState([])

    const getNews = async () => {
        try {
            const url = ("/api/v1/news")
            const response = await api.get(url)
            setNews(response.data)
            console.log(response.data);
        } catch { console.log("error") }
    }
    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <div className="overscroll-auto overflow-y-scroll h-96 w-5/12  mt-7 rounded-lg">
                <h2 className='text-center font-medium text-xl mb-2 border-b-2'>NEWS TERBARU</h2>
                {news.map(news => (
                    <div key={news.id}>
                        <div className=" overflow-auto flex justify-center rounded-lg ">
                            <div className="rounded-lg shadow-lg bg-white w-full h-auto mb-5 ">
                                <img className="rounded-t-lg" src={news.linkimage} alt="news" />

                                <div className="p-2">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{news.headline}</h5>
                                    <p className="text-gray-700 text-base mb-2">
                                        {news.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default IklanProfile