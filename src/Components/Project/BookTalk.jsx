import React from "react";
import bookTalk from "../../assets/bookTalk.png";

const BookTalk = () => {
    return (
        <div className='card bg-base-100 image-full overflow-hidden shadow-lg rounded-xl  border-l-5 border-t-3 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
            <figure>
                <img
                    src={bookTalk}
                    alt='BookTalk homepage'
                    className='object-cover'
                />
            </figure>

            <div className='card-body text-white'>
                <h2 className='card-title text-xl flex justify-center items-center pt-5 mb-3 font-bold'>
                    Book-Talk is a real-time book discussion platform designed
                    for book lovers.
                </h2>

                <p className='text-sm leading-relaxed text-justify opacity-90'>
                    Users can discuss books, post comments, reply to comments
                    (nested comments), and receive real-time notifications — all
                    without refreshing the page. This project focuses on
                    real-time interaction using React and Socket.IO, providing a
                    smooth and modern user experience.
                </p>

                <div className='card-actions justify-end mt-2'>
                    <a
                        href='https://www.linkedin.com/feed/update/urn:li:ugcPost:7409651411606679552/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-sm px-4'>
                        More Details
                    </a>
                    <a
                        href='https://github.com/HimelDvNath/Book-Talk?tab=readme-ov-file'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-sm px-4'>
                        Git Repo
                    </a>
                    <a
                        href='https://booktalk-1cf94.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-sm px-4'>
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookTalk;
