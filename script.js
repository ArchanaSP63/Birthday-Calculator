
const quoteURL = 'https://type.fit/api/quotes'


$(document).ready(()=>{
    $.getJSON(quoteURL, (response)=>{
        console.log(response);
        let quote = response;       
        const random = Math.floor(Math.random() * quote.length);
        console.log(quote[random]);
        addQuoteToContainer(random);
        function addQuoteToContainer(random){
            document.getElementById('quote').innerText =`"${quote[random].text}" `
            document.getElementById('quote').innerHTML +=
            `<p class="text-center fs-5 fst-italic">${quote[random].author}</P>`
        }       
        
    })
})
