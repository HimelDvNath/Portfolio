import React from "react";
import shopnity from "../../assets/shopnity.png";

const tags = ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth"];

const Shopnity = () => {
    return (
        <div className='card bg-base-100 image-full overflow-hidden shadow-lg rounded-xl border-l-5 border-t-3 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg'>
            <figure>
                <img src={shopnity} alt='Shopnity homepage' className='object-cover' />
            </figure>
            <div className='card-body text-white'>
                <h2 className='card-title text-xl flex justify-center items-center pt-5 mb-1 font-bold'>
                    Shopnity — Full Stack E-Commerce Platform
                </h2>
                <div className='flex flex-wrap gap-1.5 mb-3'>
                    {tags.map((t) => (
                        <span key={t} className='text-xs bg-white/15 border border-white/25 px-2 py-0.5 rounded-full'>
                            {t}
                        </span>
                    ))}
                </div>
                <p className='text-sm leading-relaxed text-justify opacity-90'>
                    Full-stack e-commerce platform with role-based access for visitors, buyers,
                    and admins. Features product categorization, pagination, wishlist, cart,
                    multi-product checkout, mobile banking &amp; COD payments, and a complete
                    admin dashboard with product CRUD, order management, and revenue tracking.
                </p>
                <div className='card-actions justify-end mt-2'>
                    <a href='https://www.linkedin.com/feed/update/urn:li:activity:7399864012382879744/' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>Details</a>
                    <a href='https://github.com/HimelDvNath/Shopnity-E-Commerce-Website-Server' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>GitHub</a>
                    <a href='https://shopnity-e-commerce-website.web.app/' target='_blank' rel='noopener noreferrer' className='btn btn-primary btn-sm px-4'>Live Demo</a>
                </div>
            </div>
        </div>
    );
};

export default Shopnity;
