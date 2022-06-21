const word = document.getElementById('word')
const canswer = document.getElementById('canswer')
const cbx = document.getElementById('cbx')
const random = document.getElementById('random')
const number = document.getElementById('number')
const num = document.getElementById('num')

//頭おかしい
const words = {
  'artificial': "人工",
  'intelligece': "知能",
  'artificially': "人工的な",
  'software': "ソフトウェア",
  'system': "システム",
  'electronics': "電子機器",
  'function': "機能",
  'spam': "迷惑メール",
  'folder': "フォルダー",
  'navigation': "ナビゲーション",
  'route': "ルート",
  'destination': "目的地",
  'air-conditioner': "エアコン",
  'refrigerator': "冷蔵庫",
  'capacity': "能力",
  'usage': "使い方",
  'develop': "発展する",
  "tend to 'do' ~": "〜しがちである",
  'home electronics': "家電製品",
  "help 'O' 'V(原)'": "'O'が'V'するのを助ける",
  'spam mail': "迷惑メール",
  'be limited to ~': "〜に制限される",
  'advance': "進歩する",
  'suppose': "仮定する",
  'recognize': "認識する",
  'characteristic': "特徴",
  'distinguish': "区別する",
  'process': "過程",
  'it is believed that ~': "〜だと信じられている",
  "want 'O' to 'do'": "'O'に〜して欲しい",
  'in the past': "昔は",
  "on 'ones' own": "自力で",
  "how to 'do'": "〜の仕方",
  "distinguish 'A' from 'B'": "'A'と'B'を区別する",
  "the way 'S' 'V'": "'S'が'V'する方法",
  "automatic": "自動の",
  "driving": "運転",
  "traffic": "交通",
  "mobile": "携帯式の",
  "translation": "翻訳",
  "anywhere": "どこでも",
  "disease": "病気",
  "robot": "ロボット",
  "rapidly": "急速に",
  "nursing": "看護",
  "medical": "医学の",
  "tiring": "骨の折れる",
  "activity": "活動",
  "sound": "〜のように聞こえる",
  "bright": "明るい",
  "present": "現在の",
  "exceed": "超える",
  "describe": "を描く",
  "fictional": "作りごとの",
  "development": "発達",
  "avoid": "避ける",
  "potential": "潜在的な",
  "risk": "危険（性）",
  "beneficial": "役に立つ",
  "spread into ~": "〜に広がる",
  "at ~ pace": "〜のペースで",
  "no longer ~": "もはや〜ない",
  "pay attention to ~": "〜に注意を払う",
  "emperor": "皇帝",
  "penguin": "ペンギン",
  "centimeter": "センチメートル",
  "ability": "能力",
  "dive": "飛び込む",
  "life-threatening": "命に関わる",
  "extreme": "極度の",
  "blizzard": "地吹雪",
  "minus": "マイナス",
  "survive": "生き残る",
  "fascinating": "魅力的な",
  "instructive": "教育的な",
  "Antarctica": "南極大陸",
  "up to ~": "〜に至るまで",
  "collective": "集団的な",
  "behave": "行動",
  "collectively": "集団的に",
  "freezing": "凍てつくような",
  "huddling": "ハドリング",
  "huddle": "身を寄せ合う",
  "rotate": "交替する",
  "see 'O' 'V(過分)'": "'O'が〜しているのを見る",
  "in a group": "群れをなして",
  "for instance": "たとえば",
  "in cooperation": "協力して",
  "get close to ~": "接近する",
  "take turns 'V(進)'": "順番に〜する",
  "be peculiar to ~": "〜に特有の",
  "behind": "の後ろに",
  "hatch": "（卵が）かえる",
  "nutritious": "栄養のある",
  "liquid": "液体",
  "squeeze": "搾り出す",
  "feed": "餌をやる",
  "strength": "力",
  "literally": "文字通り",
  "sacrifice": "を犠牲にする",
  "keep 'O' 'C'": "'O'を'C'のままにする",
  "lay an egg": "卵を産む",
  "go out to ~": "〜へ出掛けていく",
  "for weeks": "何週間",
  "out of ~": "〜の外へ",
  "at last": "ついに",
  "use up": "使い果たす",
  "hesitate": "ためらう",
  "edge": "縁",
  "ice": "氷",
  "predator": "捕食動物",
  "seal": "アザラシ",
  "killer whale": "シャチ",
  "eventually": "ついに",
  "brave": "勇敢な",
  "confirm": "確認する",
  "hear of ~": "〜のことを聞く",
  "see 'O' 'V(進)'": "'O'が'V'しているのを見る",
  "dive off ~": "〜から飛び込む",
  "try out ~": "〜を試してみる"
}
let words_len = 0
let words_key = []
let words_val = []
let now = true
let past = now
let i = -1

for (let i in words) {
  words_len++
  words_key.push(i)
  words_val.push(words[i])
}

touch()

function touch() {
  if (now) {
    now = false
    change()
  } else {
    now = true
    check()
  }
}

function change() {
  n = Number(number.value)

  if (random.checked) {
    i = Math.floor(Math.random() * words_len)
  } else {
    i += 1
    if (i >= words_len) {
      i = 0
    }
  }

  if (n > 0 && n < words_len + 1) {
    console.log('number ok');
    i = n
    number.value = null
  } else if (n) {
    console.log('number 不適切');
    number.value = '1 ~ ' + String(words_len)
  } else {
    number.value = null
  }

  if (cbx.checked) {
    past = true
    console.log('1- checkedだよ');

    let w = words_key[i]
    word.innerText = w
  } else {
    past = false
    console.log('1- checkedじゃないよ');

    let w = words_val[i]
    word.innerText = w
  }

  canswer.innerText = null
  num.innerText = null
}

function check() {
  canswer.innerText = words_val[i]

  if (past) {
    console.log('2- checkedだよ');
    canswer.innerText = words_val[i]
    num_disp()
  } else {
    console.log('2- checkedじゃないよ');
    canswer.innerText = words_key[i]
    num_disp()
  }
}

function num_disp(){
  if (i < 23) num.innerText = 'Part9-1 (' + i + ')'
  else if (i < 36) num.innerText = 'Part9-2 (' + i + ')'
  else if (i < 51) num.innerText = 'Part9-3 (' + i + ')'
  else if (i < 64) num.innerText = 'Part9-4 (' + i + ')'
  else if (i < 78) num.innerText = 'Part1-1 (' + i + ')'
  else if (i < 92) num.innerText = 'Part1-2 (' + i + ')'
  else if (i < 108) num.innerText = 'Part1-3 (' + i + ')'
  else if (i < 121) num.innerText = 'Part1-4 (' + i + ')'
}
