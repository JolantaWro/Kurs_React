import React, {useEffect, useState} from 'react';

const BookInfo = ({isbn}) => {
    const [bookIsbn, setBook] = useState('')
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`

    const getTitle = async () => {
        const response = await fetch(url)
        const data = await response.json()
        const [value] = data.items
        setBook(value.volumeInfo.title)
    }

    useEffect(() => {
        getTitle()
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(url)
    //         const title = await response.json()
    //         const [book] = title.items
    //         setBook(book.volumeInfo.title)
    //     }
    //     fetchData()
    // }, [])

    return (
        <div>
            {!bookIsbn ? <h1>Ustalam tytuł książki...</h1> : <h1>{bookIsbn}</h1>}
        </div>
    );
};

export default BookInfo;