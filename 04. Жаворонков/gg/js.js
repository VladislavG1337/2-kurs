let white=document.querySelector(".white");
let button=document.querySelector(".button");
let image=document.querySelector(".image");
let main=document.querySelector("#main");
let body=document.querySelector(".backIMAGE");
let delte=document.querySelector(".dom");
let boxing=document.querySelector("#box");
let boxUP=document.querySelector("#boxUP");
let bitton=document.querySelector(".bitton");
let bba=document.querySelector(".bba");
let kke=document.querySelector(".kke");
let mark=document.querySelector(".marquee");
button.addEventListener('click',function()
{
jQuery("body").append('<audio src="1.mp3" autoplay></audio>');
    image.src='9fc4b74c65deacdefb260b047afa523e950dafb0r1-205-37_00.gif';
    image.style.width='2000px';
    image.style.height='500px';
    mark.remove();
    $("h1").text('Хачу Пятёрачку');
    jQuery("h1").css("color", "white");
    main.className="bo";
    body.className="babax";
    setTimeout(() => { box.className="box2"; }, 1000);
    setTimeout(() => { box.className="bo"; }, 2500);
    setTimeout(() => { box.className="box2"; }, 4500);
    setTimeout(() => { box.style.marginLeft="0"; }, 2500);
    setTimeout(() => { box.className="bo"; }, 7500);
    setTimeout(() => { box.className="box2"; }, 10000);
    setTimeout(() => { box.style.marginLeft="70%"; }, 7500);
    setTimeout(() => { box.className="bo"; }, 13000);
    setTimeout(() => { boxUP.className="box2"; }, 14000);
    setTimeout(() => { boxUP.style.marginLeft="0"; }, 13500);
    setTimeout(() => { boxUP.style.height="400px"; }, 13500);/*воспользуйся boxup когда рикардо ударит себя ,и когда появиться лицо рекардо  растяни почти на весь экран*/
    setTimeout(() => { boxUP.className="bo"; }, 14700);
    setTimeout(() => { boxUP.className="box3"; }, 15000);
    setTimeout(() => { boxUP.style.marginLeft="40%"; }, 14800);
    setTimeout(() => { boxUP.style.height="600px"; }, 14800);
    setTimeout(() => { boxUP.style.width="700px"; }, 14800)
    setTimeout(() => { boxUP.className="bo"; }, 17600);
    setTimeout(() => { boxUP.style.height="1000px"; }, 17700);
    setTimeout(() => { boxUP.style.width="1800px"; }, 17700);
    setTimeout(() => { body.className="box4"; }, 17700);
    $("div.dom").empty()
})
bitton.addEventListener('click',function()
{
jQuery("body").append('<audio src="2.mp3" autoplay></audio>');
    image.src='9fc4b74c65deacdefb260b047afa523e950dafb0r1-205-37_00.gif';
    image.style.width='2000px';
    image.style.height='350px';
    $("h1").text('Хачу Пятёрачку');
    jQuery("h1").css("color", "white");
    main.className="bo";
    body.className="babax";
    setTimeout(() => { mark.remove(); }, 15000);
    setTimeout(() => { boxUP.className="box3"; }, 15000);
    setTimeout(() => { boxUP.className="bo"; }, 17600);
    setTimeout(() => { box.className="box5"; }, 18000);
    setTimeout(() => { boxUP.className="box5"; }, 18000);
    setTimeout(() => { main.className="box1"; }, 18000);  
    setTimeout(() => { boxUP.style.marginLeft="0"; }, 14800);
    setTimeout(() => { body.className="box6"; }, 17700); 
    $("div.dom").empty()
})

        