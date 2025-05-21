//Pgm 5
//Library System

const books =[
        {title: 'Book A', isBorrowed : false},
        {title: 'Book B', isBorrowed : true},
        {title: 'Book C', isBorrowed : false}
]
const booksfree =[];
function isBorrowedCnt()
{
        let iCnt =0;
        for(let i =0; i< books.length; i++)
        {
        if(books[i].isBorrowed == true)
        {
                iCnt++;
                console.log("This book is borrowed",books[i].title);
        }
        else
        {
                booksfree.push(books[i]);
        }    
        }
        return iCnt;
}
iCount =isBorrowedCnt();
console.log("Number of books borrowed are:",iCount);
console.log(booksfree);
