let div = document.querySelectorAll('div');


div[0].addEventListener('mouseenter',
    function print(){
        setTimeout(
            function (){
                div[1].innerHTML = `<h1> ABDELQADER TAREK </h1>`;
            },
            2000
        )
        setTimeout(
            function (){
                div[1].innerHTML += `<h1> i'm 27  </h1>`;
            },
            4000
        )

        setTimeout(
            function (){
                div[1].innerHTML += `<h1> i'm full stack web developer </h1>`;
            },
            6000
        )
    }
)

