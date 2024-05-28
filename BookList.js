import React from 'react';
import BookCard from './BookCard';

const books = [
    {
        image: 'https://images.thenile.io/r1000/9780521656191.jpg' ,
        title: 'ANTOINETTE MOSES',
        author: 'John Doe',
        price: 19.99,
        description: 'Modern, original fiction for learners of English. A man is found on the street, and taken to hospital. He appears unable to tell the doctor who he is, or where he comes from, but has he really lost his memory? The man is playing a dangerous game, and really knows a lot more than he is prepared to say. When he leaves the hospital, he goes to the house of the nurse who looked after him, and events take a very sinister turn..',
    },
    // Add more book objects here
];

const BookList = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {books.map((book, index) => (
                    <div className="col-md-4" key={index}>
                        <BookCard book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
