const btn = document.getElementById('btn');
const btn_eng = document.getElementById('btn-eng');
const btn_society = document.getElementById('btn-society');
const width = document.getElementById('width');

const generate = ((text) => {
    console.log(text);

    let i = 0;
    while (text.match(/[\S]*\(\([\S]+\)\)[\S]*/)) {
        text = text.replace('((', `<span class="hole none" onclick="tauch(${i})">`);
        text = text.replace('))', '</span>');
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
    const eng_issue = `あなたは今、海で泳いでいると想像してください。\n\
((Imagen)) you are swimming in the sea.\n\
私はこの2週間で1冊の本を読み終えました。\n\
I finished reading a book ((in)) the ((last)) two hours.\n\
彼は今、世界で最も有名な俳優です。\n\
Now, he is the ((world's)) ((most)) famous actor.\n\
エナジードリンクを飲むと、私たちはわき起こる活力を感じます。\n\
We feel a ((burst)) ((of)) power when we have energy drink.\n\
私は朝だけでなく、夕方も犬を散歩させます。\n\
I walk my dog ((not)) ((only)) in the morning ((but)) ((also)) in the evening.\n\n\
多くの小説を書いた作家のグリーン氏が、私たちの市にやってきます。\n\
Mr.Green, a writer ((who)) wrote many novels, will comto our city.\n\
十分な水がなければ、私たちは生きていく事ができません。\n\
((Without)) ((enough)) water, we can't live.\n\
あなたは最良の状態で試験を受けるべきです。\n\
You should take the exam ((at)) your ((best)).\n\
私たちはその電車に乗る事ができないかもしれません。\n\
We may be ((unable)) ((to)) catch take the train.\n\n\
この新しいロボットは多くの人々に使用されるかもしれません。\n\
This new robot might ((be)) ((used)) by many people.\n\
多くの観光客が毎年、日本を訪れます。\n\
A ((lot)) ((of)) number toturists visit Japan every year.\n\
この手紙を読めば、あなたは彼の気持ちを理解するようになるでしょう。\n\
If you read this letter, you will ((come)) ((to)) understand his feelings.\n\
彼は親のお金に依存していません。\n\
He doesn't ((depend)) ((on)) his parent's money.\n\
私は朝食に1本のジュースを飲みます。\n\
I drink a ((bottle)) ((of)) vegetable juice for breakfast.\n\
私たちは毎日適度に運動するべきです。\n\
We should do some exercises ((in)) ((moderation)) every day.\n\n\
生徒たちは明日、公園を掃除するのを手伝うつもりです。\n\
The students are going to ((help)) ((clean)) the park tomorrow.\n\
私はときどき父が車を洗うのを手伝います。\n\
I sometimes ((help)) ((wash)) his car.\n\
私たちはステーキを注文しました。加えて、サラダとスープを注文しました。\n\
We ordered steak. ((In)) ((addition)) we ordered salad and soup.\n\
確かにあなたの考えはいいですが、私はあなたに賛成することはできません。\n\
It is ((true)) your idea is good, ((but)) I can't agree with you.\n\
こういうわけで、私はカナダで働くことを決心したのです。\n\
((This)) is ((why)) I decided to work in Canada.\n\n\
その男性はガンで死にました。\n\
The man ((died)) ((of)) cancer.\n\
彼女の病気は悪化し始めました。\n\
Her illness began to ((get)) ((wrose)).\n\
10年前はほんの一握りの女性しかこの会社では働いていませんでした。\n\
Only a ((handful)) ((of)) women worked at this company ten years ago.\n\
私たちはなんとか駅まで歩いて行きました。\n\
We ((managed)) ((to)) walk to the station.\n\
悪天候にも関わらず、多くの人々がそのイベントに参加しました。\n\
Many people joined the event ((in)) ((spite)) of the bad weather.\n\n\
アンは40歳を超えていましたが、若いままでした。\n\
Although Ann was over forty, she ((remain)) ((young)).\n\
その絵は先週、美術館で見ることができました。\n\
The picture ((could)) ((be)) seen in the museum last week.\n\
私にはミミちゃんと呼ばれる友達がいます。\n\
I have a friend ((called)) Mimi-chan.\n\
その古い英語の本を読むことは簡単ではありませんでした。\n\
((It)) was not easy ((to)) read the old English book.\n\
遠くで男性が手を振っているのが見えます。\n\
I see a man waving his hands ((far)) ((away)).\n\n\
その博物館を設計したのが私の父です。\n\
((It)) was my grandfather ((that)) designed the museum.\n\
彼は東京に店を開きましたが、それはとても人気になりました。\n\
He opened a shop in Tokyo, ((which)) became very popular.\n\
このようにして、私は自分の市に関するレポートを書きました。\n\
((In)) this ((way)), I wrote a report aboutmy city.\n\
あなたが読みたいときはいつでもこの本を読んでもいいです。\n\
You can read this book ((whenever)) you want to.\n\
私たちは競技場までバスの代わりにタクシーに乗りました。\n\
We took a taxi ((instead)) ((of)) a bus to the stadium.\n\n\
何千もの人々がその祭りに参加しました。\n\
((Thousands)) ((of)) people joined the festival.\n\
たとえそのテニスの試合に負けるかもしれないとしても、彼女は最善を尽くしました。\n\
She did her best ((even)) ((if)) she might lose the tennis match.\n\
彼はその会社を辞職しました。\n\
He ((resigned)) ((from)) the company.\n\
私たちは抗議して会議に出席しませんでした。\n\
We didn't attend the meeting ((in)) ((protest)).\n\
法律上の理由でここに建物を建設することができません。\n\
You can't construct any buildings here ((on)) legal ((grounds)).\n\n\
授業中は起きていなければなりません。 \n\
You must ((stay))  ((awake)) during class. \n\
私たちはこの3時間でたくさん食べました。  \n\
We ate a lot in ((the))  ((last)) three hours. \n\
私たちの学校はインターネットの使用を認めています。  \n\
Our school allows the ((use))  ((of)) the Internet. \n\
母は7時に私を起こします。 \n\
My mother ((wakes)) me ((up)) at seven. \n\
そのサッカーチームは試合開始時に最良の状態でした。 \n\
The soccer team was ((at)) its ((best)) when the game started. \n\
自転車に乗ることができない子どもが何人かいます。 \n\
There are some children who are ((unable)) to ride a bike. \n\
多くの大学生がすでに職を見つけました。 \n\
A ((number))  ((of)) university students have already found jobs. \n\
努力したにも関わらず,彼女はテニスの試合に勝てませんでした。  \n\
 ((Despite)) her effort, she wasn't able to win the tennis game. \n\
あなたは米やパンを適度に食べなければなりません。  \n\
You must eat rice or bread ((in))  ((moderation)) . \n\
あなたの寄付はがんと闘う人々を助けます。 \n\
Your donation will help people who ((fight))  ((against)) cancer. \n\
確かにスマートフォンは高価ですが,機能がたくさんあります。 \n\
It is ((true)) that smartphones are expensive, ((but)) they have a lot of functions. \n\
喫煙はあなたの身体に悪影響を与えます。  \n\
Smoking has negative ((effects))  ((on)) your body. \n\
その調査によるとがんで死ぬ子どもの数が減少しています。  \n\
The study shows that fewer children ((die))  ((of)) cancer. \n\
一握りの人だけがその事実を知っていました。  \n\
Only a ((handful))  ((of)) people knew the fact. \n\
私はなんとかして最終電車に乗りました。  \n\
I ((managed))  ((to)) get on the last train. \n\
彼らは英語を話すよう期待されています。  \n\
They are ((expected))  ((to)) speak English. \n\
彼は数分の間,沈黙したままでした。 \n\
He ((remained)) silent for a few minutes.  \n\
遠くで鳥が歌っているのが聞こえますか。 \n\
Can you hear birds singing ((far))  ((away)) ? \n\
このようにして彼は故郷から出て行きました。 \n\
In ((this))  ((way)) , he got out of his hometown \n\.
彼らは家でテレビを見る代わりに外で遊びました。 \n\
They played outside ((instead))  ((of)) watching TV at home.  \n\
彼女は初の女性会長になりました。 \n\
She became ((the))  ((first)) female president.  \n\
この図書館には何千冊もの本があります。 \n\
This library has ((thousands))  ((of)) books.  \n\
私は先月辞職しました。 \n\
I ((resigned))  ((from)) my job last month.  \n\
彼は健康上の理由から軍を辞めました。 \n\
He left the Army ((on)) health ((grounds)) .`

    generate(eng_issue);
});

btn_society.addEventListener('click', () => {
    const eng_issue = ``

    generate(eng_issue);
});


width.addEventListener('input', () => {
    const w = width.value;
    const hole = document.getElementsByClassName('hole');

    for (let i = 0; i < hole.length; i++) {
        if (w == 0) hole[i].style.width = 'auto';
        else if (w == 201) hole[i].style.width = 'auto';
        else hole[i].style.width = w + 'px';
    }
});


const tauch = (n) => {
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
