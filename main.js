
async function getPosts()
{
    const usersData = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usersData2 = await usersData.json();
    const result = usersData2.map( function (ele){
            return `
                <div class ="box">
                    <img src="./contact-icon-illustration-isolated_23-2151903337.avif"/>
                    <h1> ${ele.name} </h1>
                    <h2>${ele.username}</h2>
                    <a href="${ele.email}">${ele.email}</a>
                    <p><i class="fa-solid fa-phone"></i> ${ele.phone}  </p>
                </div>
            `;
        });
    console.log(result);
    document.querySelector(".users").innerHTML =result;

}
getPosts();







