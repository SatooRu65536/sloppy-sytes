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
    `あなたは今、海で泳いでいると想像してください。
((Imagen)) you are swimming in the sea.
私はこの2週間で1冊の本を読み終えました。
I finished reading a book ((in)) the ((last)) two hours.
彼は今、世界で最も有名な俳優です。
Now, he is the ((world's)) ((most)) famous actor.
エナジードリンクを飲むと、私たちはわき起こる活力を感じます。
We feel a ((burst)) ((of)) power when we have energy drink.
私は朝だけでなく、夕方も犬を散歩させます。
I walk my dog ((not)) ((only)) in the morning ((but)) ((also)) in the evening.

多くの小説を書いた作家のグリーン氏が、私たちの市にやってきます。
Mr.Green, a writer ((who)) wrote many novels, will comto our city.
十分な水がなければ、私たちは生きていく事ができません。
((Without)) ((enough)) water, we can't live.
あなたは最良の状態で試験を受けるべきです。
You should take the exam ((at)) your ((best)).
私たちはその電車に乗る事ができないかもしれません。
We may be ((unable)) (('to)) catch take the train.

この新しいロボットは多くの人々に使用されるかもしれません。
This new robot might ((be)) ((used)) by many people.
多くの観光客が毎年、日本を訪れます。
A ((lot)) ((of)) number toturists visit Japan every year.
この手紙を読めば、あなたは彼の気持ちを理解するようになるでしょう。
If you read this letter, you will ((come)) ((to)) understand his feelings.
彼は親のお金に依存していません。
He doesn't ((depend)) ((on)) his parent's money.
私は朝食に1本のジュースを飲みます。
I drink a ((bottle)) ((of)) vegetable juice for breakfast.
私たちは毎日適度に運動するべきです。
We should do some exercises ((in)) ((moderation)) every day.

生徒たちは明日、公園を掃除するのを手伝うつもりです。
The students are going to ((help)) ((clean)) the park tomorrow.
私はときどき父が車を洗うのを手伝います。
I sometimes ((help)) ((wash)) his car.
私たちはステーキを注文しました。加えて、サラダとスープを注文しました。
We ordered steak. ((In)) ((addition)) we ordered salad and soup.
確かにあなたの考えはいいですが、私はあなたに賛成することはできません。
It is ((true)) your idea is good, ((but)) I can't agree with you.
こういうわけで、私はカナダで働くことを決心したのです。
((This)) is ((why)) I decided to work in Canada.

その男性はガンで死にました。
The man ((died)) ((of)) cancer.
彼女の病気は悪化し始めました。
Her illness began to ((get)) ((wrose)).
10年前はほんの一握りの女性しかこの会社では働いていませんでした。
Only a ((handful)) ((of)) women worked at this company ten years ago.
私たちはなんとか駅まで歩いて行きました。
We ((managed)) ((to)) walk to the station.
悪天候にも関わらず、多くの人々がそのイベントに参加しました。
Many people joined the event ((in)) ((spite)) of the bad weather.

アンは40歳を超えていましたが、若いままでした。
Although Ann was over forty, she ((remain)) ((young)).
その絵は先週、美術館で見ることができました。
The picture ((could)) ((be)) seen in the museum last week.
私にはミミちゃんと呼ばれる友達がいます。
I have a friend ((called)) Mimi-chan.
その古い英語の本を読むことは簡単ではありませんでした。
((It)) was not easy ((to)) read the old English book.
遠くで男性が手を振っているのが見えます。
I see a man waving his hands ((far)) ((away)).

その博物館を設計したのが私の父です。
((It)) was my grandfather ((that)) designed the museum.
彼は東京に店を開きましたが、それはとても人気になりました。
He opened a shop in Tokyo, ((which)) became very popular.
このようにして、私は自分の市に関するレポートを書きました。
((In)) this ((way)), I wrote a report aboutmy city.
あなたが読みたいときはいつでもこの本を読んでもいいです。
You can read this book ((whenever)) you want to.
私たちは競技場までバスの代わりにタクシーに乗りました。
We took a taxi ((instead)) ((of)) a bus to the stadium.

何千もの人々がその祭りに参加しました。
((Thousands)) ((of)) people joined the festival.
たとえそのテニスの試合に負けるかもしれないとしても、彼女は最善を尽くしました。
She did her best ((even)) ((if)) she might lose the tennis match.
彼はその会社を辞職しました。
He ((resigned)) ((from)) the company.
私たちは抗議して会議に出席しませんでした。
We didn't attend the meeting ((in)) ((protest)).
法律上の理由でここに建物を建設することができません。
You can't construct any buildings here ((on)) legal ((grounds)).`

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
