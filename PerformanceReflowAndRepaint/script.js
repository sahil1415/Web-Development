
// REFLOW - The process of calculating the position of an element or object before rendering on the screen.
//  This process is very computational heavy
// REPAINT - THe process of rendering any element or object on the screen pixel by pixel

// TO Optimize the performance of the website we need to minimize the REFLOW and REPAINT

// DOCUMENT FRAGMENT - A light weight document object which can be used to improve performance and minimize reflow and repaint
// case 1 - 

const t1 = performance.now();
for(let i=0; i<100; i++){
    let para = document.createElement('p');
    para.textContent = "This is the " + i + " paragraph";
    // Reflow and repaint
    document.body.appendChild(para);
}
const t2 = performance.now()
// 100 eflow and 100 repaint
console.log("Total time taken without performance optimization- "+ (t2-t1));


// Case 2 - 

const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i=0; i<100; i++){
    let para = document.createElement('p');
    para.textContent = "This  is the " + i + "paragraph";
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);
// 1 reflow and 1 repaint
const t4 = performance.now();
console.log("Total time taken with performance optimization- " + (t4-t3));



const t5 = performance.now();
let docFrag = document.createDocumentFragment();
for(let i=0; i<100; i++){
    let para = document.createElement('p');
    para.textContent = "This is the " + i + "paragraph";
    docFrag.appendChild(para);
}

document.body.appendChild(docFrag);

const t6 = performance.now();
console.log("Total time taken with document fragment- " + (t6-t5));