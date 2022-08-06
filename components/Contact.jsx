import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { images } from "../constants";
import InputMask from "react-input-mask";

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        // e.preventDefault();

        // db.collection("contacts")
        //     .add({
        //         name: name,
        //         phone: phone,
        //         email: email,
        //         subject: subject,
        //         message: message,
        //     })
        //     .catch((err) => {
        //         alert(err.message);
        //     });

        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <section id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full ">
                            <div>
                                <Image
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src={images.contact}
                                    alt="/"
                                />
                            </div>
                            <div>
                                <h2 className="py-2">Xasanov Javohir</h2>
                                <p>Front-End Developer</p>
                                <p className="py-4">
                                    I am available for freelance or full-time positions. Contact
                                    me and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">Connect With Me</p>
                                <div className="flex items-center justify-between py-4">
                                    <a
                                        href="https://www.linkedin.com/in/javohir-xasanov-40a186237/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/xasanof17/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaGithub />
                                        </div>
                                    </a>

                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <Link href="/resume">
                                        <a>
                                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <BsFillPersonLinesFill />
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form
                                onSubmit={handleSubmit}
                                action="https://getform.io/f/8381372d-b684-45ea-8682-5d9b2fe19b0b"
                                method="POST"
                                encType="multipart/form-data"
                                className="form"
                            >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                                            type="text"
                                            name="name"
                                            // value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            autoComplete="off"
                                            autoCapitalize="off"
                                            autoCorrect="off"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Phone Number
                                        </label>
                                        <InputMask
                                            mask={"+\\9\\9\\8\\ 99 999 99 99"}
                                            className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                                            type="tel"
                                            name="phone"
                                            // value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            autoComplete="off"
                                            autoCapitalize="off"
                                            autoCorrect="off"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                                        type="email"
                                        name="email"
                                        // value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        autoCorrect="off"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                                        type="text"
                                        name="subject"
                                        // value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        autoCorrect="off"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                                        rows="10"
                                        name="message"
                                        // value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        autoCorrect="off"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full p-4 text-white bg-blue-500 mt-4 focus:outline-none focus:ring focus:border-blue-500 z-10">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <a>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                <HiOutlineChevronDoubleUp
                                    className="text-[#5651e5]"
                                    size={30}
                                />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;
