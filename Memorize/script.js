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
We may be ((unable)) (('to)) catch take the train.\n\n\
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

    document.getElementById('text-area').value = eng_issue;
    generate(eng_issue);
});

btn_society.addEventListener('click', () => {
    const society_issue = `人は生まれながらに((人権))をもつが、人権が保障されるためには、憲法の役割が大きい。 \n \
憲法はおもな人権を列挙し、政府による人権侵害を禁止するとともに、権利保障のために政府が必要な施策を行うことを求める。 \n \
日本国憲法第11条は((基本的人権))の保障を明示し、第13条は個人が個人として尊重されながら ((個人の尊重))、 幸福に生活すること ((幸福追求権))そのものを、人権として規定している。 \n\n \
人権思想によれば、人はだれでも生まれながらに、さまざまな権利を等しくもっている。 \n \
したがって、人権の根底には、人間の平等という考え方がある。 \n \
こうした趣旨から憲法第14条の「((法の下の平等))は、((人種))や((信条))、((性別))、((社会的身分))などによる差別を否定している。 \n \
この条項はさまざまな差別を、基本的人権の尊重の原理から改めていくうえで非常に大切な役割を果たしている。 \n \
((両性の平等))や((選挙権に関する))平等の定めは、 ((平等権))をあらためて確認した規定で、明治憲法にはなかったものである。 \n \
しかし、実際にはわたしたちの周囲には、多くの差別問題がある。 \n \
植民地支配に由来する((在日韓国・朝鮮人))問題など、在日外国人に対する((社会的差別))はその一つである。 \n \
((被差別部落))出身者への差別、((アイヌ民族))に対する差別、((男女間))の不平等、((障がい者))への差別や偏見なども大きな問題であり、平等権の実現に向け、不断の努力が必要である。 \n \
差別の解消のためには、社会的に影響力のある地位を、マイノリティ出身者に枠として割り当てる((アファーマティブ・アクション))のようなやり方もあり、欧米では、入学や就職などに際し、女性や社会的弱者、マイノリティなどに積極的な優遇措置をとる国がある。 \n \n \
18世紀に欧米で基本的人権が宣言されたとき、そのおもな内容をなしていたのは、個人が国家権力による((束縛))や((社会的身分))から自由に行動する権利、つまり「((国家))からの自由」であった。 \n \
これを((自由権))とよぶ。 \n \
((精神の自由))なしには人格の尊重はありえない。 \n \
憲法は、((思想および良心))の自由を中心に、((信教))の自由、((集会))・((結社))・((表現))の自由、((学問))の自由を定めている。 \n \
((信教))の自由との関連で、国が宗教活動をしたり特定の宗教団体に特権を与えたりすることは、 ((政教分離の原則))によって禁止される。 \n \
この原則は、戦前、((国家神道))が強制された日本の歴史をふまえ、尊重されなければならない。 \n \
((表現))の自由はほかの人々に自らの見解を表明する権利であり、((集会))・((結社))の自由は意見を同じくする人が集まる権利である。 \n \
こうした権利を保障するために、((検閲))を禁止することや、((通信の秘密))を侵してはならないことが規定されている。 \n \
精神の自由は単なる「((内面の自由))」をこえて((参政権))を生かすもとになるものであり、民主政治を存続させていくうえで不可欠である。 \n \n \
((身体))の自由が簡単に奪われたり恣意的に罰せられたりするようでは、((人格の尊重))は実現できない。 \n \
法律にない刑罰は科せられないという((罪刑法定主義))は近代法の重要な原則の一つであり、刑事裁判にかけられた被告人にも、さまざまな権利が認められている。 \n \
憲法は、法律で定められた手続きなしに生命や自由が奪われたり、処罰されたりしないこと((法定手続きの保障))や、合法であった行為をのちの法で罰することはできないこと((遡及処罰の禁止))、裁判が確定したのちにふたたび罪を問われないこと((一事不再理))などを定めている。 \n \
訴えられた被告人は有罪が確定するまでは無罪と推定されること((無罪の推定)) や、裁判は証拠にもとづいて行われること ((証拠主義))、逮捕や家宅捜索などには裁判官が発行する令状が必要なこと((令状主義))や、逮捕された者が供述を拒む権利((黙秘権))をもつことなども保障されている。 \n \
どんな人も、((奴隷的))に扱われてはならないし、刑罰以外で((苦役))を強制されることはない。 \n \
刑罰に関しても、((残虐))な刑は禁止されている。 \n \n \
人がさまざまな自由を享受するためには、収入の途や生活の基盤が不可欠である。 \n \
そのため、((財産権))の保障が必要であり、生活の基盤を得るために((職業選択))の自由と((営業))の自由が認められなければならない。 \n \
ただし、((経済活動))の自由は無制限なものではなく、「((公共の福祉))」によって制限されうる。 \n \n \
また、((居住・移転))の自由も保障され、さらに個人の意思によって((外国へ移住))したり、((国籍を離脱))したりする自由も保障されている。 \n \
しかし、((無国籍))になる自由は認められていない。 \n \n \
((自由権))が「((国家))からの自由」であるのに対し、((社会権))は、((失業や貧困))などの社会問題を解決し、人間らしい暮らしを保障するよう国家に求める権利である。 \n \
人が生活上の必要性を満たされ、((尊厳))のある生活をおくることを保障する権利である。 \n \
憲法第25条は「(すべて国民は、((健康で文化的))な((最低限度の生活))を((営む権利))を有する)」と定め、国は社会保障などの充実に努力しなければならないとしている。 \n \
最高裁は、この条文は国に政治的・道義的義務を課したものにすぎず、それ自体が法的な効力をもつものではないという考え((プログラム規定説))をとるが、法的効力を認めるべきだという考え方もある。 \n \
生活の苦しい人や児童・高齢者などの弱者の((生存権))を保障するため、((生活保護法))、((児童福祉法))、((老人福祉法))などが制定された。 \n \
朝日訴訟、堀木訴訟などの訴訟では、((生存権))の保障範囲について、政府に裁量の余地がどこまであるかが争われた。 \n \n \
人間らしい生活を実現し、さらに充実した精神生活をおくるためには教育の機会が与えられることが重要である。 \n \
憲法第26条は「その能力に応じて、ひとしく((教育を受ける))権利」があるとし、((義務教育))の無償を定めている。 \n \
こうした方向を進めるための法律として、1947年に((教育基本法))が制定された(2006年改正)。 \n \n \
人問らしい生活をおくるには、労働の機会が保障され、労働条件が整えられなければならない。 \n \
憲法第27条は、すべての国民は「((勤労の権利))」をもつとし、これを実現するために、職場を紹介したり、雇用を促進したりすることを政府の任務としている。 \n \
さらに憲法第28条は、職場で弱い立場に立つ労働者の権利を保護するため、労働組合を結成する権利((団結権))、労働組合をとおして使用者と賃金やその他の労働条件などについて交渉する権利((団体交渉権))、交渉手段としてストライキなどを行う権利( ((団体行動権))、または((争議権))ともいう)を認めている(これらをあわせて((労働三権))という)。 \n \
((労働三法))は((労働者))の権利の保障のために定められたものである。 \n \
さまざまな人権が確立されるためには、人々が政府に対して権利保障を要求したり、人権侵害を訴え出たりすることが、まず権利として保障されていなければならない。 \n \
積極的に政府に働きかける権利が((参政権))であり、成年に達すればだれでも((選挙権))をもつ((普通選挙制度))が定められている。 \n \
国民が国政について意見を述べる((請願権))も認められている。 \n \
このほか、国民がかかわる直接民主制的な制度として、憲法改正の際の((国民投票))や((最高裁判所裁判官の国民審査))、特定の自治体で行われる((特別法の住民投票))も認められている。 \n \n \
権利が侵害された場合には、裁判を受ける権利がある。 \n \
また、公務員の不法行為によって損害を受けた場合には国や地方公共団体に対する損害賠償を求める権利があり、これにもとづいて((国家賠償法))が定められている。 \n \
抑留・拘禁された者が裁判で無罪となった場合には刑事補償を受ける権利があり、これにもとづいて((刑事補償法))が定められている。 \n \n \
憲法は、国民の権利とともに国民の三つの義務について述べている。 \n \
((納税の義務))、((子どもに普通教育を受けさせる義務))、((勤労の義務))である。 \n \
明治憲法との最も大きな違いは((兵役))の義務がなくなったことである。 \n \
国民は主権者として責任ある行動をとり、正当な権利は堂々と主張する一方、他人の権利をみだりに侵害してはならない。 \n \n \
人間は社会的存在であり、基本的人権といえどもほかの人々の権利と調整されなければならない。 \n \
憲法は国民の自由や権利について、「これを濫用してはならないのであつて、常に公共の福祉のためにこれを利用する責任を負ふ」としている。 \n \
ただし、公共の福祉の名のもとに正当な権利まで制限されることがないように注意する必要がある。 \n \n \
社会権の成立経緯にみられるように、人権は歴史のなかで発展する。 \n \
現代においても、いくつかの新しい人権がとなえられるようになった。 \n \
きれいな水や空気、じゅうぶんな日照、美しい景観など、環境のなかで暮らすことは人間にとって不可欠であり、これを一種の人権ととらえるのが((環境権))である。 \n \
日本では、急速な産業化のなかで、生産性や開発が優先され、環境への配慮が足りな公害問題などが生じ、乱開発によって、自然環境や都市破壊された。 \n \
これに対して、健康と生活を守るために、福追求権などを根拠に、((環境権))が主張されるようになった。 \n \n \
プライバシーとは、他人にむやみに知られたくない個人的な情報をさし、これが保護されないと安心して暮らせない。 \n \
今日では、通信技術などの発達で、個人情報の取得は技術的にきわめて容易になっており、政府やマスメディア、企業などがわたしたちの個人情報をみだりに公開したり、勝手に利用したりしないよう、((プライバシー権))を確立する必要がある。 \n \
((プライバシー権))は、プライパシーの侵害を禁止し、自分についての情報は原則として本人が管理するという内容をもっており、((幸福追求権))と((人格権))が、この権利の根拠とされる。 \n \
2003年に個人情報保護関連5法が制定され、本人への情報開示や第三者への提供制限などが定められた。 \n \
一方、住民票に番号をつけ一元的に管理する住民基本台帳ネットワークに加えて、2016年には国民の所得や納税、社会保障などに関する手続きを一元化するマイナンバー制度が発足した。 \n \
個人情報が集中管理されることで、基本的人権が侵されないよう注意する必要がある。 \n \n \
政治についての情報は国民が参政権を有効に活用するために欠かせない。 \n \
政治家の政治資金などが適切なものか、行政府が適切かつ公正に職務を行っているか、などについて知ることは、民主政治にとってきわめて重要である。 \n \
こうした情報を求める権利が知る権利であり、その根拠は参政権や表現の自由に求められる。 \n \
今日、国および地方公共団体における情報公開制度が整いつつある。 \n \
その一方で、外交、防衛、テロなどにかかわる国家機密を特定秘密に指定する((特定秘密保護法))が制定され、((報道))の自由や((知る権利))を制約しないか懸念されている。 \n \
一般の人々(私人)のプライバシーは極力保護されなければならないが、政治家など責任ある立場の人々(公人)については、知る権利との関係で、プライバシーの範囲は制約されると考えられている。 \n \
知る権利に関連して、人々がマスメディアなどの情報源にアクセス(接近)して、広く意見を表明できるよう保障する((アクセス権))や、報道によってそこなわれた利益の回復を要求する((反論権))なども主張されている。 \n \n \
どのように生き、どう死ぬのか。 \n \
急速に発達してきている医療をどこまで受け、どこから先は拒否するのかなど、生き方に関して個人が決めるという内容をもつ自己決定権も主張されている。 \n \
具体的には医療の方法や尊厳死など、自己の生命や身体に関するもの、妊娠や出産など家庭生活に関するものなどがあげられる。 \n \
こうした((自己決定権))は、((幸福追求権))にもとづく。 \n \n \
人権保障は、それぞれの国内の問題として始まったが、今日では、国境をこえて守られるべきものとなっている。 \n \
人権が、人が生まれながらにもつ((自然権))である以上、当然の方向性であるともいえよう。 \n \
国連で採択された((世界人権宣言))や((国際人権規約))はさまざまな権利を定めている。 \n \
((人種差別撤廃条約))、 ((女子差別撤廃条約)) ((子ども(児童)の権利条約))などの多くの国際的な条約も定められてきている。 \n \
成年男子に比べ遅れがちであった女性や子どもの権利保障が、国際条約がきっかけとなって進むこともある。 \n \
((女子差別撤廃条約))の批准に向けて、((男女雇用機会均等法))が成立(1986年施行)したことなどである。 \n \
国際的な人権保障のためには、アムネスティ・インターナショナルなどのNGO(非政府組織)も大きな役割を果たしている。 \n \
外国人が国内でもつ権利に関しては、外国人という理由で不当な差別や追害が許されないのは当然である。 \n \
歴史的な理由で日本に定住している外国人の権利保障についても議論が進められており、彼らが地方自治体の参政権をもつようにすべきという主張もある。 \n \
また、特定の民族や国籍の人々を排する差別的言動が、ヘイトスピーチ(憎悪表現)として問題になっており、これによる人権侵害を防止するための啓発活動が行われているほか、対策のための法律も制定されている。 \n \n \
平和主義は日本国憲法の最も重要な柱の一つである。 \n \
アジアを中心に大きな被害をもたらし、自国民も多くの犠牲をはらった悲惨な戦争への反省から、憲法前文は「((政府))の行為によつて再び((戦争の惨禍))が起ることのないやうにする」覚悟のうえに憲法が制定されたことを示した。 \n \
世界の人々が「((平和))のうちに((生存))する権利を有する」という宣言は、((平和的生存権))の考え方を示している。 \n \
これをふまえて憲法第9条1項は「((戦争の放棄))」を明記し、さらに第9条2項では軍隊などの「((戦力))」をもたず、((交戦権))ももたないとする。 \n \
また、戦中に軍部が独走した経験をふまえ、((シビリアン・コントロール))の原則が規定された。 \n \n \
日本国憲法は徹底した平和主義をかかげて出発したが、世界はすぐに米ソ対立の冷戦時代に突入した。 \n \
1950年に朝鮮戦争が勃発すると、連合国軍総司令部(GHO)は((警察予備隊))をつくることを命じ、((警察予備隊))は((保安隊))をへて、1954年には((自衛隊))となった。 \n \
自衛隊は、「我が国の平和と独立を守り、国の安全を保つ」ことなどを目的としている。 \n \
自衛隊をめぐっては、それが憲法第9条に違反するかどうかが長い間にわたって論じられてきた。 \n \
自衛隊は、憲法が保持しないとする「戦カ」にあたるので違憲とする見解があるが、憲法も他国に侵略された際の国家の自衛権((個別的自衛権))まで否定するものではなく、「((自衛のための必要最小限度の実力))」をもつのは憲法に違反しないという立場が政府の見解となった。 \n \
その一方で、同盟国が攻撃された場合に、日本が攻撃されていないにもかかわらず武力を行使する集団的自衛権は、国家が権利としてはもっているが、憲法によってその行使は認められないとしたのが政府見解であった。 \n \
「必要最小限度の実力」の範囲をめぐっても意見の対立があり、これについて政府は専守防衛と非核三原則(「((核兵器))を((持たず))、((つくらず))、((持ちこませず))」)を政策としてかかげてきた。 \n \
このほかに、平和主義にかかわる国の方針として、武器などの輸出を対象国によって禁止すべきなどとした((武器輸出三原則))があった(2014年に((防衛装備移転三原則))に変更)。 \n \
この間、自衛隊は着実に増強され、日本の防衛費は世界有数の額に達している。 \n \
近年では、アメリカからの武器購入額が増大している。 \n \n \
1951年、日本はサンフランシスコ平和条約の締結によって独立を達成すると同時に((日米安全保障条約))を結び、冷戦のなかでアメリカ軍の駐留継続と基地使用を認めた。 \n \
その後、1960年には日本の領域に対する武力攻撃に対して日米が共同防衛の義務を負うことなど、より双務性を強めた日米相互協力及び((安全保障条約))へと改定された。 \n \
この改定に対しては強い反対運動がくり広げられたが、1970年以降は自動延長されている。 \n \
こうして((日本の安全保障))は在日米軍と自衛隊の拡充によってになわれることになった。 \n \
しかし、アメリカ軍の駐留経費の日本の負担が、いわゆる「思いやり予算」を含めて大きいことや、日本でのアメリカ軍の法的地位を定めた日米地位協定のあり方などについて、さまざまな問題点が指摘されている。 \n \
とりわけ、基地の大部分が集中する沖縄では、事故や騒音などに加えて、米兵の犯罪が日米地位協定によって特別扱いされるなどの問題がある。 \n \n \
冷戦終結により、安全保障をめぐる状況が変化し、地域紛争や非国家集団による戦闘行為などが目立つようになったこともあり、自衛隊の性格も変容していった。 \n \
湾岸戦争を機に、((国連平和維持活動(PKO)))への自衛隊の参加が議論され、1992年にPKO協力法が制定された。 \n \
その結果、自衛隊がカンボジアなどに派遣された。 \n \
また、冷戦終結にともない.日米安保体制も再定義された。 \n \
日本の「周辺事態」の際の日米協力について新しい((ガイドライン))がつくられ、((ガイドライン関連法))が制定されたのはその一環である。 \n \
2001年のアメリカでの「((同時多発テロ))」を契機に((テロ対策特別措置法))が制定され、また、2003年のイラク戦争に際しては((イラク復興支援特別措置法))により、それぞれ自衛隊が海外に派遣された。 \n \
2003年以降には、日本周辺での有事(非常事態)への対応に関する有事法制が定められた。 \n \
また、2009年にはソマリア沖などで海賊対策に自衛隊が参加するための((海賊対処法))が制定された。 \n \
2013年には、首相と関係大臣らが国家の安全保障に関する重要事項について審議する((国家安全保障会議))(日本版NSC)が新設された。 \n \
そして、2014年に政府は従来の憲法解釈を変更し、密接な関係にある他国への攻撃が自国の存立を覆す「明白な危険」がある場合には、((集団的自衛権))も行使できると閣議決定した。 \n \
さらに2015年には、日米の防衛協力について「周辺事態」という制約を撤廃する形で再度新しいガイドラインが策定され、その後、((安全保障関連法))が制定された。 \n \
これに対しては憲法第9条で認められる自衛の範囲をこえており違憲なのではないかという指摘もある。 \n \n \
世界的な米軍再編の流れのなか、在日米軍についても見直しが行われ、日米両政府はその再編について合意した。 \n \
沖縄の海兵隊の一部撤退や普天間基地の移設などが合意された一方、そのための多額の費用を日本が負担することになり、さらに自衛隊司令部の一部がアメリカ軍の横田基地に移転するなどアメリカ軍と自衛隊との連携がいっそう強化されている。 \n \
冷戦終結にもかかわらず、東アジアでは外交・安全保障上の問題が多い。 \n \
朝鮮半島では、2000年に初の南北首脳会談が行われ和平機運が生まれたが、その後の北朝鮮の核開発問題などは周辺諸国を中心に緊張をもたらしている。 \n \
台湾海峡をはさんで中国と台湾との緊張が高まることが何度かあり、南シナ海のスプラトリー(南沙)諸島をめぐる周辺諸国の対立もある。 \n \
こうした問題を背景に、日本と周辺諸国との外交関係は必ずしも順調に推移していないが、日本は平和主義の原則を堅持し、地域の緊張緩和に向けてねばり強く努力していく必要がある。 \n \ `

    document.getElementById('text-area').value = society_issue;
    generate(society_issue);
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
