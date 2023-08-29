let div = document.querySelectorAll('div');
let h1 = document.querySelectorAll("h1");

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

div[0].addEventListener('mouseleave',
function print(){
    setTimeout(
        function (){
            div[1].remove(h1[2]);
        },
        2000
    )
    setTimeout(
        function (){
            div[1].remove(h1[1]);
        },
        4000
    )

    setTimeout(
        function (){
            div[1].remove(h1[0]);
        },
        6000
    )
}
)


