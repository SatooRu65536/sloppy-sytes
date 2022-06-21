const btn = document.getElementById('btn');
const btn_eng = document.getElementById('btn-eng');

const generate = ((text) => {
    console.log(text);

    let i = 0;
    while (text.match(/[\S]*\(\([\S]+\)\)[\S]*/)) {
        text = text.replace('((', `<a class="hole none" onclick="c(${i})">`);
        text = text.replace('))', '</a>');
        i += 1;
    }
    text = text.replace(/\n/g, '<br>');

    document.getElementById('display-text').innerHTML = text;
});


btn.addEventListener('click', () => {
    let text = document.getElementById('text-area').value;
    $.cookie("text", text);
    generate(text);
});


btn_eng.addEventListener('click', () => {
    const eng_issue = 
    `((Imagen)) you are swimming in the sea.  \n\
    I finished reading a book ((in)) the ((last)) two hours.    \n\
    Now, he is the ((world's)) ((most)) famous actor.   \n\
    We feel a ((burst)) ((of)) power when we have energy drink. \n\
    I walk my dog ((not)) ((only)) in the morning ((but)) ((also)) in the evening.  \n\
    Mr.Green, a writer ((who)) wrote many novels, will comto our city.\n\
    ((Without)) ((enough)) water, we can't live.    \n\
    You should take the exam ((at)) your ((best)).  \n\
    We may be ((unable)) ((to)) catch take the train.`

    generate(eng_issue);
});


function c(n) {
    const hole = document.getElementsByClassName('hole');
    const class_list = hole[n].classList;

    if (class_list[1] == 'none') {
        hole[n].classList.remove('none');
    } else {
        hole[n].classList.add('none');
    }
}


const text_cookie = $.cookie('text');
console.log(text_cookie);

if (text_cookie) {
    document.getElementById('text-area').value = text_cookie;
    generate(text_cookie);
}