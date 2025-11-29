import React from "react";
import json from "../assets/JSON.png";
const Blogs = () => {
    const openDrawer = () => {
        <div className='drawer drawer-end'>
            <input id='my-drawer-5' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content'>
                {/* Page content here */}
                <label
                    htmlFor='my-drawer-5'
                    className='drawer-button btn btn-primary'>
                    Open drawer
                </label>
            </div>
            <div className='drawer-side'>
                <label
                    htmlFor='my-drawer-5'
                    aria-label='close sidebar'
                    className='drawer-overlay'></label>
                <ul className='menu bg-base-200 min-h-full w-2/3 p-4'>
                    {/* Sidebar content here */}
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </div>;
    };
    return (
        <div className='bg-gray-50 py-20 flex flex-col items-center justify-center'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10'>
                My <span className='text-orange-500'>Blogs</span>
                <span className='block w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full'></span>
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='card bg-base-100 w-96 shadow-sm'>
                    <figure>
                        <img src={json} alt='json pic' />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>
                            Why JSON Over Other Formats
                        </h2>

                        <div className='card-actions justify-end'>
                            <div className='drawer drawer-end'>
                                <input
                                    id='my-drawer-5'
                                    type='checkbox'
                                    className='drawer-toggle'
                                />
                                <div className='drawer-content'>
                                    {/* Page content here */}
                                    <label
                                        htmlFor='my-drawer-5'
                                        className='drawer-button btn btn-primary'>
                                        Read Article
                                    </label>
                                </div>
                                <div className='drawer-side'>
                                    <label
                                        htmlFor='my-drawer-5'
                                        aria-label='close sidebar'
                                        className='drawer-overlay'></label>
                                    <ul className='menu bg-gray-500 min-h-full w-3/4 p-4'>
                                        <div className='card bg-base-100 w-full  shadow-sm'>
                                            <figure className='px-10 pt-10'>
                                                <img
                                                    src={json}
                                                    alt='json figure'
                                                    className='rounded-xl w-full h-[400px]'
                                                />
                                            </figure>
                                            <div className='card-body items-center text-left'>
                                                <section className='bg-gray-50 py-16 px-6 md:px-20'>
                                                    <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10'>
                                                        <h1 className='text-4xl font-bold text-orange-600 mb-6 text-center'>
                                                            Why JSON Over Other
                                                            Formats
                                                        </h1>
                                                        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
                                                            Introduction to JSON
                                                        </h2>
                                                        <p className='text-gray-700 mb-6 leading-relaxed'>
                                                            JSON (JavaScript
                                                            Object Notation) is
                                                            a lightweight and
                                                            widely used
                                                            data-interchange
                                                            format in modern web
                                                            development. It is
                                                            simple,
                                                            human-readable, and
                                                            easy for machines to
                                                            parse and generate.
                                                            Although derived
                                                            from JavaScript
                                                            (ECMA-262, 1999),
                                                            JSON is
                                                            language-independent
                                                            and compatible with
                                                            most programming
                                                            languages such as C,
                                                            C++, C#, Java,
                                                            JavaScript, Python,
                                                            and Perl. Its
                                                            simplicity,
                                                            compactness, and
                                                            compatibility with
                                                            modern programming
                                                            environments have
                                                            made JSON the
                                                            <span className='text-orange-500 font-semibold'>
                                                                {" "}
                                                                de facto{" "}
                                                            </span>
                                                            standard for data
                                                            exchange in web
                                                            APIs, databases, and
                                                            distributed systems.
                                                        </p>
                                                        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
                                                            Core Structures of
                                                            JSON
                                                        </h2>
                                                        <p className='text-gray-700 mb-4 leading-relaxed'>
                                                            JSON is built upon
                                                            two fundamental
                                                            structures:
                                                        </p>

                                                        <ul className='list-disc list-inside text-gray-700 mb-6 space-y-2'>
                                                            <li>
                                                                <strong>
                                                                    Name/Value
                                                                    Pairs:
                                                                </strong>{" "}
                                                                A collection of
                                                                key-value pairs
                                                                enclosed in
                                                                curly braces{" "}
                                                                <code>
                                                                    {"{}"}
                                                                </code>
                                                                .
                                                            </li>
                                                        </ul>

                                                        <pre className='bg-gray-100 text-sm text-gray-800 p-4 rounded-lg overflow-x-auto mb-6'>
                                                            {`{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
}`}
                                                        </pre>

                                                        <ul className='list-disc list-inside text-gray-700 mb-6 space-y-2'>
                                                            <li>
                                                                <strong>
                                                                    Ordered
                                                                    Lists of
                                                                    Values:
                                                                </strong>{" "}
                                                                A collection of
                                                                ordered values
                                                                enclosed in
                                                                square brackets{" "}
                                                                <code>[]</code>.
                                                            </li>
                                                        </ul>

                                                        <pre className='bg-gray-100 text-sm text-gray-800 p-4 rounded-lg overflow-x-auto mb-6'>
                                                            {`["Apple", "Banana", "Cherry"]`}
                                                        </pre>

                                                        <p className='text-gray-700 mb-6 leading-relaxed'>
                                                            These two flexible
                                                            structures allow
                                                            JSON to represent
                                                            complex and nested
                                                            data easily across
                                                            various programming
                                                            languages and
                                                            systems.
                                                        </p>

                                                        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
                                                            How JSON Works
                                                        </h2>
                                                        <p className='text-gray-700 mb-6 leading-relaxed'>
                                                            JSON functions by transforming data structures into plain text for transmission and converting them back into data structures upon receipt. The process includes three main stages:
                                                        </p>

                                                        <ul className='list-decimal list-inside text-gray-700 space-y-3 mb-6'>
                                                            <li>
                                                                <strong>
                                                                    Serialization
                                                                    (Sending
                                                                    Data):
                                                                </strong>{" "}
                                                                Native data structures (e.g., JavaScript objects or Python dictionaries) are converted into JSON-formatted strings using built-in methods like JSON.stringify() or language-specific libraries. 
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Transmission:
                                                                </strong>{" "}
                                                                The serialized JSON string is transmitted over a network, typically within the body of an HTTP request or response, especially in RESTful APIs and web services.
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Deserialization
                                                                    (Receiving
                                                                    Data):
                                                                </strong>{" "}
                                                                The receiving system reads the JSON string and converts it back into native data structures using JSON parsers (e.g., JSON.parse() in JavaScript or json.loads() in Python).
                                                            </li>
                                                        </ul>

                                                        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
                                                            Comparison with
                                                            Other Data Formats
                                                        </h2>

                                                        <div className='space-y-4 text-gray-700 mb-8'>
                                                            <p>
                                                                <strong>
                                                                    JSON vs.
                                                                    XML:
                                                                </strong>{" "}
                                                                JSON is simpler and easier to read than XML. It uses key-value pairs, while XML uses nested tags that make data longer and harder to read. JSON is also faster to parse and supports data types like numbers, booleans, and arrays. XML treats everything as text and needs more resources to process. 
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    JSON vs.
                                                                    CSV:
                                                                </strong>{" "}
                                                                JSON can store complex and nested data, while CSV can only handle simple, table like data with rows and columns. JSON is more flexible and can include extra information like metadata. CSV is easier for small datasets, like spreadsheets. 
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    JSON vs.
                                                                    YAML:
                                                                </strong>{" "}
                                                                YAML looks cleaner and is easier for people to read, but it’s sensitive to spaces and indentation, which can cause errors. JSON follows strict formatting rules, making it less error-prone. 
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    JSON vs.
                                                                    BSON:
                                                                </strong>{" "}
                                                                BSON is a binary version of JSON used in databases like MongoDB. It supports more data types and works faster for computers, but people can’t read it easily. BSON files are also larger. JSON is lighter, easier to debug. 
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    JSON vs.
                                                                    Protobuf:
                                                                </strong>{" "}
                                                                Protobuf, made by Google, is faster and smaller than JSON because it uses binary data and needs a fixed schema. However, it’s harder to read and less flexible. JSON doesn’t need a schema and is easy to read and use.
                                                            </p>
                                                        </div>

                                                        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
                                                            Why JSON Is the Most
                                                            Preferred Format
                                                        </h2>

                                                        <ul className='list-disc list-inside text-gray-700 space-y-3'>
                                                            <li>
                                                                <strong>
                                                                    Simplicity
                                                                    and
                                                                    Readability:
                                                                </strong>{" "}
                                                                JSON uses a clear, minimal syntax consisting of objects, arrays, strings, numbers, booleans, and null values. This makes it intuitive, easy to learn, and ideal for manual inspection, debugging, and logging. 
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Seamless
                                                                    Integration
                                                                    with
                                                                    JavaScript:
                                                                </strong>{" "}
                                                                JSON’s structure directly mirrors JavaScript objects and arrays. Native functions like JSON.parse() and JSON.stringify() are built into browsers and Node.js, enabling frictionless integration between client and server in web applications. 
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Broad
                                                                    Language
                                                                    Support:
                                                                </strong>{" "}
                                                                Virtually all programming languages provide built-in or external libraries for parsing and generating JSON. This broad compatibility enables seamless data exchange across heterogeneous systems, platforms, and technologies. 
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Compactness
                                                                    and
                                                                    Efficiency:
                                                                </strong>{" "}
                                                                Compared to formats like XML, JSON reduces unnecessary markup, minimizing data size and improving transmission speed. This is particularly beneficial for bandwidth-sensitive and mobile applications.
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Interoperability
                                                                    and
                                                                    Adoption:
                                                                </strong>{" "}
                                                               JSON’s standardized specification (RFC 8259) and early adoption in RESTful APIs, NoSQL databases (e.g., MongoDB, CouchDB), and microservices have cemented it as a universal standard. Most modern web frameworks and cloud services natively support JSON communication. 
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Balance of
                                                                    Human and
                                                                    Machine
                                                                    Usability:
                                                                </strong>{" "}
                                                                JSON’s plain-text nature allows transparency in data pipelines, easy validation using tools like JSON Schema, and transformation via tools like JQ. It achieves an ideal balance between human accessibility and machine efficiency. 
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Compatibility
                                                                    with Modern
                                                                    Architectures:
                                                                </strong>{" "}
                                                                JSON integrates naturally with microservices, serverless architectures, mobile applications, and single-page web apps (SPAs). It also aligns well with document-oriented databases and flexible, schema-evolving systems common in agile development. 
                                                            </li>
                                                            <li>
                                                                <strong>
                                                                    Ecosystem
                                                                    Momentum:
                                                                </strong>{" "}
                                                                JSON’s adoption by major platforms (Google, Amazon, Microsoft, and others) has led to widespread tool support, documentation, and interoperability. This network effect reinforces its dominance as the default data interchange format.
                                                            </li>
                                                        </ul>
                                                        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
                                                           Conclusion
                                                        </h2>                
                                                        <p className='text-gray-700 mt-6 leading-relaxed'>
                                                            JSON’s design rooted in simplicity, universality, and efficiency has made it the backbone of modern data interchange. Its widespread support across programming languages, frameworks, and architectures ensures reliable communication between diverse systems. Whether in web APIs, IoT devices, or distributed systems, JSON continues to be the most practical and preferred data format for developers worldwide.
                                                        </p>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
