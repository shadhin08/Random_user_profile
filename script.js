
    fetch('https://randomuser.me/api')
    .then(res=>res.json())
    .then(data=> {
        const profile=data.results[0].picture.medium;
        var getProfileId=document.getElementById('profile');
        getProfileId.setAttribute('src', profile);


        const fullName=data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last;
        document.getElementById('name').innerText=fullName;

        console.log(data);
        const email=data.results[0].email;
        document.getElementById('email').innerText=email;

        const phone=data.results[0].phone;
        document.getElementById('phone').innerText=phone;

        const birth=data.results[0].dob.date;
        const birthday=birth.slice(0, 10)
        document.getElementById('birthday').innerText=birthday;

        const address=data.results[0].location.city+", "+data.results[0].location.country;
        document.getElementById('address').innerText=address;
    })

    function event()
    {
        const idName=document.getElementById('name');
        const idEmail=document.getElementById('email');
        const idPhone=document.getElementById('phone');
        const idBirthday=document.getElementById('birthday');
        const idAddress=document.getElementById('address');

        const bt1upper=document.getElementById('bt1upper');
        const bt1down=document.getElementById('bt1down');
        const bt2upper=document.getElementById('bt2upper');
        const bt2down=document.getElementById('bt2down');
        const bt3upper=document.getElementById('bt3upper');
        const bt3down=document.getElementById('bt3down');
        const bt4upper=document.getElementById('bt4upper');
        const bt4down=document.getElementById('bt4down');
        const bt5upper=document.getElementById('bt5upper');
        const bt5down=document.getElementById('bt5down');
        function displayHTML(res)
        {
            if(res=='bt1')
            {
                idName.style.display="block";
                bt1upper.style.top="-60px"
                bt1down.style.top="0px"
            }
            else
            {
                idName.style.display="none";
                bt1upper.style.top="0px"
                bt1down.style.top="60px"
            }
            if(res=='bt2')
            {
                idEmail.style.display="block";
                bt2upper.style.top="-60px"
                bt2down.style.top="0px"
            }
            else
            {
                idEmail.style.display="none";
                bt2upper.style.top="0px"
                bt2down.style.top="60px"
            }
            if(res=='bt3')
            {
                idPhone.style.display="block";
                bt3upper.style.top="-60px"
                bt3down.style.top="0px"
            }
            else
            {
                idPhone.style.display="none";
                bt3upper.style.top="0px"
                bt3down.style.top="60px"
            }
            if(res=='bt4')
            {
                idBirthday.style.display="block";
                bt4upper.style.top="-60px"
                bt4down.style.top="0px"
            }
            else
            {
                idBirthday.style.display="none";
                bt4upper.style.top="0px"
                bt4down.style.top="60px"
            }
            if(res=='bt5')
            {
                idAddress.style.display="block";
                bt5upper.style.top="-60px"
                bt5down.style.top="0px"
            }
            else
            {
                idAddress.style.display="none";
                bt5upper.style.top="0px"
                bt5down.style.top="60px"
            }

        }

        const name=document.getElementById('bt1')

        name.addEventListener('mouseover', function()
        {
            displayHTML('bt1');
        });

        const email=document.getElementById('bt2');
        email.addEventListener('mouseover', function()
        {
            displayHTML('bt2');
        });

        const phone=document.getElementById('bt3');
        phone.addEventListener('mouseover', function()
        {
            displayHTML('bt3');
        });

        const birthday=document.getElementById('bt4');
        birthday.addEventListener('mouseover', function()
        {
            displayHTML('bt4');
        });

        const address=document.getElementById('bt5');
        address.addEventListener('mouseover', function()
        {
            displayHTML('bt5');
        });
    }
    event();

