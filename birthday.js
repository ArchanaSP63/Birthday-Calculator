const quoteURL = 'https://type.fit/api/quotes'
import{auth, signOut, db, ref, get, child, remove, set} from './firebase.js'
$(document).ready(()=>{
        let name = localStorage.getItem('name')
        let bday = localStorage.getItem('bday')
        $($('p')[0]).text('Hi, ' + name)
        if(name){
            bday = bday.split('-')
            console.log(bday)
            let today = new Date();
            let year = today.getFullYear()
            // let today = new Date().toLocaleDateString()
            let age = today.getFullYear() - Number(bday[0]);
            today = today.setHours(0,0,0,0);
            let upcomingBday;


            if(Number(bday[2])==29 && Number(bday[1])==2){
                if(year % 4 == 0){
                    upcomingBday = new Date(year, Number(bday[1])-1, Number(bday[2]));
                }else{
                    upcomingBday = new Date(year+1, Number(bday[1])-1, Number(bday[2]));
                }                
            }else{
                upcomingBday = new Date(year, Number(bday[1])-1, Number(bday[2]));
            }

            console.log(upcomingBday)
            console.log(today)
                
            if(today > upcomingBday) {
                upcomingBday.setFullYear(year + 1);
            }
            
            console.log(upcomingBday)
            var one_day = 24 * 60 * 60 * 1000;
                
            let daysLeft = Math.floor((upcomingBday - today) / (one_day));
            // if(upcomingBday.getFullYear()%4 == 0 && upcomingBday.getDate() == 29 && upcomingBday.getMonth()== 1){
            //     daysLeft -= 1
            // }


            console.log(daysLeft) 

            // No need to calculate people older than 199 yo. :) 
            if(daysLeft === 0){
                document.getElementById("result").innerText = `HAPPY BIRTHDAY, ${name}!`;

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
            } else if (daysLeft  && age < 200) {
                document.getElementById("result").innerText = `${daysLeft} DAYS LEFT `;
                document.getElementById("second").innerText = `UNTIL YOUR BIRTHDAY!`;  
            }   
        }    
        else{
            $('.container').empty()
            let $infor = $(`<h1>Please <a href='index.html'>login</a> </h1>`)
            $('.container').append($infor)
        }   
          
        

    $($('button')[0]).on('click', ()=>{

        signOut(auth)
        .then(() => {
            // Sign-out successful.
            localStorage.removeItem('name')
            localStorage.removeItem('bday')
            window.location.href="index.html"
          })
        .catch((error) => {
            console.log(error)  
        });
    })
    

})