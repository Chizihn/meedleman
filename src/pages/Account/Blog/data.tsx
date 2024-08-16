import blogPostImage from "../../../assets/images/blank-profile-picture-973460_960_720.webp";

const Blogs = [
  {
    id: 0,
    blogImg: { blogPostImage },
    title: "computer programming language",
    content:
      "computer programming language, any of various languages for expressing a set of detailed instructions for a digital computer. Such instructions can be executed directly when they are in the computer manufacturer-specific numerical form known as machine language, after a simple substitution process when expressed in a corresponding assembly language, or after translation from some “higher-level” language. Although there are many computer languages, relatively few are widely used.Machine and assembly languages are 'level', requiring a programmer to manage explicitly all of a computer’s idiosyncratic features of data storage and operation. In contrast, high-level languages shield a programmer from worrying about such considerations and provide a notation that is more easily written and read by programmers.",

    date: "May 5th, 2024",
    status: "News",
  },
  {
    id: 1,
    blogImg: { blogPostImage },
    title: "Machine and assembly languages",
    content:
      "A machine language consists of the numeric codes for the operations that a particular computer can execute directly. The codes are strings of 0s and 1s, or binary digits (“bits”), which are frequently converted both from and to hexadecimal (base 16) for human viewing and modification. Machine language instructions typically use some bits to represent operations, such as addition, and some to represent operands, or perhaps the location of the next instruction. Machine language is difficult to read and write, since it does not resemble conventional mathematical notation or human language, and its codes vary from computer to computer. Assembly language is one level above machine language. It uses short mnemonic codes for instructions and allows the programmer to introduce names for blocks of memory that hold data. One might thus write “add pay, total” instead of “0110101100101000” for an instruction that adds two numbers.",
    date: "January 15th, 2024",
    status: "Update",
  },
  {
    id: 2,
    blogImg: { blogPostImage },
    title: "Education-oriented languages",
    content:
      "BASIC (beginner’s all-purpose symbolic instruction code) was designed at Dartmouth College in the mid-1960s by John Kemeny and Thomas Kurtz. It was intended to be easy to learn by novices, particularly non-computer science majors, and to run well on a time-sharing computer with many users. It had simple data structures and notation and it was interpreted: a BASIC program was translated line-by-line and executed as it was translated, which made it easy to locate programming errors.Its small size and simplicity also made BASIC a popular language for early personal computers. Its recent forms have adopted many of the data and control structures of other contemporary languages, which makes it more powerful but less convenient for beginners.",
    date: "March 25th, 2024",
    category: "Announcement",
  },
  {
    id: 3,
    blogImg: { blogPostImage },
    title: "Object-oriented languages",
    content:
      "Object-oriented languages help to manage complexity in large programs. Objects package data and the operations on them so that only the operations are publicly accessible and internal details of the data structures are hidden. This information hiding made large-scale programming easier by allowing a programmer to think about each part of the program in isolation. In addition, objects may be derived from more general ones, “inheriting” their capabilities. Such an object hierarchy made it possible to define specialized objects without repeating all that is in the more general ones. Object-oriented programming began with the Simula language (1967), which added information hiding to ALGOL. Another influential object-oriented language was Smalltalk (1980), in which a program was a set of objects that interacted by sending messages to one another.",
    date: "Feb 2nd, 2024",
    status: "News",
  },
];

export default Blogs;
