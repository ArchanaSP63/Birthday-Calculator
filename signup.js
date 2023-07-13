import {auth, createUserWithEmailAndPassword, db, ref, set} from './firebase.js'
$(document).ready(()=>{
    $('button').on('click', (e)=>{
        e.preventDefault()
        $('#first-name').siblings('p').css('display', 'none')
        $('#first-name').removeClass('warning')
        $('#last-name').removeClass('warning')
        $('#last-name').siblings('p').css('display', 'none')
        $('#birthday').removeClass('warning')
        $('#birthday').siblings('p').css('display', 'none')
        $('#signup-email').siblings('p').css('display', 'none')
        $('#signup-email').removeClass('warning')
        $('#signup-password').removeClass('warning')
        $('#signup-password').siblings('p').css('display', 'none')
        
        const firstName = $($('.form-control')[0]).val()
        const lastName = $($('.form-control')[1]).val()
        const birthdate = $($('.form-control')[2]).val()
        const email = $($('.form-control')[3]).val()
        const password = $($('.form-control')[4]).val()
        
        let reEmail = /[a-z]+@[a-z]+\.[a-z]+/
        let rePassword = /[a-zA-Z0-9]{6,20}/
        if(firstName.length == ""){
            // show the error for firstname
            $('#first-name').addClass('warning')
            $('#first-name').siblings('p').css('display', 'block')            
        }else if(lastName.length == ""){
            // show the error for lastname
            $('#last-name').addClass('warning')
            $('#last-name').siblings('p').css('display', 'block')
        }else if(birthdate.length == ""){
            // show the error for birthdate
            $('#birthday').addClass('warning')
            $('#birthday').siblings('p').css('display', 'block')
        }else if(!reEmail.test(email)){
            // show the error for email
            $('#signup-email').addClass('warning')
            $('#signup-email').siblings('p').css('display', 'block')
        }else if(!rePassword.test(password)){
            // show the error for password
            $('#signup-password').addClass('warning')
            $('#signup-password').siblings('p').css('display', 'block')
        }else{
            console.log(firstName)
            console.log(lastName)
            console.log(birthdate)
            console.log(email)
            console.log(password)
        
            // create a new user
            const userData = {FirstName: firstName, LastName: lastName,
                    Birthdate: birthdate, Email: email, Password: password, 
                    }
                
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                console.log(userCredential.user)
                // save the user into database
                const userKey = userCredential.user.uid
                set(ref(db, 'Users/' + userKey), userData)
                .then(()=>{
                    window.location.href='index.html'
                    })
                })
            }

        })
    })

