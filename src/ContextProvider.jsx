import React, { createContext, useContext, useState } from 'react'

const LibraryContext = createContext(); 




function LibraryProvider({children}){
    const data=[
        {title:"Atomic Habbit",author:'James clear',isbn:'(877) 310-7333.',
        release:'01-01-2015'},
        {title:"Man's Search for Meaning",author:'Viktor Frankl',isbn:'(877) 310-7333.',release:'01-01-2015',
        },
        {title:"Think Straight",author:'Darius Foroux',isbn:'(877) 310-7333.',release:'01-01-2015'}
    ];
    const dataauthor=[
        {name:"James clear",dob:"22-11-1985",biography:`Hi, I’m James Clear.
    I’ve been writing at JamesClear.com about habits, decision making, and continuous improvement since 2012. I’m the author of the #1 New York Times bestseller, Atomic Habits, which has sold more than 15 million copies worldwide and has been translated into more than 50 languages.`},
       {name:"Viktor Frankl",dob:"26-03-1905",
    biography:`Viktor Frankl was a 20th century psychiatrist who founded the field of logotherapy. A Holocaust survivor, he wrote the best-selling book, Man's Search for Meaning.`
    },{
        name:"Darius Foroux",
        dob:"21-08-1987",
        biography:`Darius Foroux is the author of 7 books, and founder of The Sounding Board. A past student of business, he writes about productivity, habits, decision making, and wealth building His ideas and work have been featured in TIME, NBC, Fast Company, Inc., Observer, and many more publications. 500K+ people read his blog every month.`

    }

]
    const [book,Setbook]=useState(data);
    const [author,Setauthor]=useState(dataauthor)

    return(
        <LibraryContext.Provider value={{book,Setbook,author,Setauthor}}>
            {children}
        </LibraryContext.Provider>
    )
}

export {LibraryContext,LibraryProvider}