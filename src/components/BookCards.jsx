import * as React from "react";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "../animations";

import { books } from "../constants";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";

const BookCards = () => {
  return (
    <>
      {books.map((book, index) => {
        if (index % 2 === 0) {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="flex pb-20 sm:w-screen xs:w-screen sm:px-2 xs:px-2"
            >
              <div className="flex flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col relative px-10 sm:px-6 xs:px-4 bg-card-bg w-full min-h-[250px] shadow-[20px_0px_100px_rgba(146,128,94,0.7)] border-4 rounded-lg border-card-border">
                <div className="flex-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] w-1/2 lg:w-full md:w-full sm:w-full xs:w-full pt-7">
                  <p className="text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold font-serif-italic text-card-text">
                    {book.title}
                  </p>
                  <p className="pt-5 text-xl font-bold text-card-text font-serif">
                    {book.author}
                  </p>
                  <p className="pt-4 text-md font-semibold text-card-text font-serif">
                    {book.synopsis}
                  </p>
                  <p className="flex flex-row font-serif 3xl:space-x-10 2xl:space-x-7 space-x-5 md:space-x-3 sm:space-x-2 xs:space-x-1 mb-2 flex-auto pt-8 sm:pt-4 xs:pt-4 text-card-text">
                    {book.tags.map((tag) => (
                      <p
                        className="text-card-button-text font-serif font-semibold bg-card-button rounded-md px-1 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] transition  hover:-translate-y-1"
                        key={tag}
                      >
                        {tag}{" "}
                      </p>
                    ))}
                  </p>
                  <div className="flex flex-row mb-4 font-serif ">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="icon"
                      className="mt-8 p-2 lg-mr-8 md:mr-8 sm:mr-8 xs:mr-8 flex flex-row w-1/3 min-w-fit lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] text-card-button-text font-semibold bg-card-button rounded-md hover:bg-card-button-hover hover:text-card-button-text-hover"
                    >
                      <PersonalVideoIcon />
                      <p className=" px-2">Link to book</p>
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex justify-center transition lg:pr-8 md:pr-8 sm:pr-8 xs:pr-8 hover:-translate-y-2">
                  <div className="w-1/2 h-3/4 m-4">
                    <img
                      src={book.demo}
                      alt={book.title}
                      className="rounded border"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        } else {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="flex pb-20 sm:w-screen xs:w-screen sm:px-2 xs:px-2"
            >
              <div className="flex flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col relative px-10 sm:px-6 xs:px-4 bg-card-bg w-full min-h-[250px] shadow-[20px_0px_100px_rgba(146,128,94,0.7)] border-4 rounded-lg border-card-border">
                <div className="flex-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] w-1/2 lg:w-full md:w-full sm:w-full xs:w-full pt-7">
                  <p className="text-4xl  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-serif-italic font-bold text-card-text">
                    {book.title}
                  </p>
                  <p className="pt-5 font-serif text-xl font-bold text-card-text">
                    {book.author}
                  </p>
                  <p className="pt-4 font-serif text-md font-semibold text-card-text">
                    {book.synopsis}
                  </p>
                  <p className="flex flex-row font-serif 3xl:space-x-10 2xl:space-x-7 space-x-5 md:space-x-3 sm:space-x-2 xs:space-x-1 mb-2 flex-auto pt-8 sm:pt-4 xs:pt-4 text-card-text">
                    {book.tags.map((tag) => (
                      <p
                        className="text-card-button-text font-semibold bg-card-button rounded-md px-1 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] transition  hover:-translate-y-1"
                        key={tag}
                      >
                        {tag}{" "}
                      </p>
                    ))}
                  </p>
                  <div className="flex font-serif flex-row mb-4 ">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="icon"
                      className="mt-8 p-2 lg-mr-8 md:mr-8 sm:mr-8 xs:mr-8 flex flex-row w-1/3 min-w-fit lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] text-card-button-text font-semibold bg-card-button rounded-md hover:bg-card-button-hover hover:text-card-button-text-hover"
                    >
                      <PersonalVideoIcon />
                      <p className=" px-2">Link to book</p>
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex justify-center transition lg:pr-8 md:pr-8 sm:pr-8 xs:pr-8 hover:-translate-y-2">
                  <div className="w-1/2 h-3/4 m-4">
                    <img
                      src={book.demo}
                      alt={book.title}
                      className="rounded border"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        }
      })}
    </>
  );
};

export default BookCards;
