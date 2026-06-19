import React from "react";
import bookTalk from "../../assets/bookTalk.png";

const tags = ["React.js", "Node.js", "TypeScript", "Socket.IO", "PostgreSQL"];

const BookTalk = () => {
    return (
        <div className='card bg-base-100 image-full overflow-hidden shadow-lg rounded-xl border-l-5 border-t-3 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
            <figure>
                <img src={bookTalk} alt='BookTalk homepage' className='object-cover' />
            </figure>
            <div className='card-body text-white'>
                <h2 className='card-title text-xl flex justify-center items-center pt-5 mb-1 font-bold'>
                    Book-Talk — Real-Time Discussion Platform
                </h2>
                <div className='flex flex-wrap gap-1.5 mb-3'>
                    {tags.map((t) => (
                        <span key={t} className='text-xs bg-white/15 border border-white/25 px-2 py-0.5 rounded-full'>
                            {t}
                        </span>
                    ))}
                </div>
                <p className='text-sm leading-relaxed text-justify opacity-90'>
                    SPA for book discussions with nested comments via recursion and real-time
                    reply notifications using Socket.IO. Features persistent read/unread
                    notifications, role-based access (visitor / user / admin), and
                    PostgreSQL-backed data management.
                </p>
                <div className='card-actions justify-end mt-2'>
                    <a href='https://www.linkedin.com/feed/update/urn:li:ugcPost:7409651411606679552/' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>Details</a>
                    <a href='https://github.com/HimelDvNath/Book-Talk' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>GitHub</a>
                    <a href='https://booktalk-1cf94.web.app/' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>Live Demo</a>
                </div>
            </div>
        </div>
    );
};

export default BookTalk;
