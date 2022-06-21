const word = document.getElementById('word')
const canswer = document.getElementById('canswer')
const cbx = document.getElementById('cbx')
const random = document.getElementById('random')
const number = document.getElementById('number')
const num = document.getElementById('num')
const memorize_cbx = document.getElementById('memorize_cbx')

//頭おかしい
const words = {
  "2-1": "-----",
  "awake": "用心深い",
  "caffein": "カフェイン",
  "burst": "突発",
  "tiredness": "疲労",
  "alertness": "注意力",
  "pain": "痛み",
  "reliever": "緩和するもの",
  "bar": "棒、板",
  "particular": "独特の",
  "social": "社会の",
  "ritual": "習慣",
  "use": "使用",
  "cafe": "カフェ",
  "ceremony": "儀式",
  "energy drink": "エナジードリンク",
  "not only A but also B": "Aだけではなく、Bもまた",
  "pain reliver": "鎮痛剤",
  "chocolate bar": "板チョコレート",
  "2-2": "-----",
  "consume": "摂取（消費）する",
  "unhealthy": "健康に悪い",
  "typically": "一般的に",
  "physically": "肉体的に",
  "emotionally": "感情的に",
  "rest": "休息",
  "consumption": "摂取（消費）",
  "indicate": "を示す",
  "certain": "とある",
  "cancer": "ガン",
  "bone": "骨",
  "proof": "証拠",
  "at one's best": "最良の状態で",
  "2-3": "-----",
  "regularly": "定期的に",
  "depend": "依存",
  "negative": "良くない",
  "headache": "頭痛",
  "reduce": "を減らす",
  "despite": "にも関わらず",
  "concern": "懸念",
  "general": "一般的な",
  "moderation": "適度",
  "milligram": "ミリグラム",
  "depend on ~": "に依存する",
  "soft drink": "ソフトドリンク",
  "in moderation": "適度に",
  "2-4": "-----",
  "recent": "最近の",
  "suggest": "示唆する",
  "ease": "を和らげる",
  "muscle": "筋肉",
  "contain": "を含む",
  "illness": "病気",
  "including": "を含めて",
  "reaction": "反応",
  "temporary": "一時的な",
  "properly": "適切に",
  "fight against ~": "と闘う",
  "a number of ~": "多くの〜",
  "in addition": "加えて",
  "it is true (that) ~, but ...": "確かに（本当に）",
  "This is why ~": "こういうわけで〜",
  "3-1": "-----",
  "tuberculosis": "結核",
  "worse": "より悪い",
  "possibility": "可能性",
  "segregate": "を差別する",
  "separate": "を分離する",
  "handful": "一握り",
  "hurdle": "障害、困難",
  "manage": "をなんとかやり遂げる",
  "spite": "にも関わらず",
  "difficulty": "困難",
  "die of ~": "で死ぬ",
  "watch 'O' '動(原)'": "'O'が〜するのを見る",
  "get wrose": "悪化する",
  "African-American": "アフリカ系アメリカ人",
  "a handful of ~": "一握りの",
  "medical school": "医学校",
  "manage to 'do'": "なんとか〜する",
  "in spite of ~": "〜にも関わらず",
  "3-2": "-----",
  "outstanding": "傑出した",
  "athlete": "スポーツ選手",
  "schoolarship": "奨学金",
  "football": "アメリカンフットボール",
  "captain": "キャプテン",
  "track": "陸上競技",
  "remain": "依然として〜のままである",
  "medicine": "医学",
  "lifelong": "生涯続く",
  "procedure": "処置",
  "transfusion": "輸血",
  "fresh": "新鮮な",
  "As a result": "その結果",
  "far away": "遠くで",
  "3-3": "-----",
  "solid": "個体の",
  "cell": "細胞",
  "plasma": "血しょう",
  "store": "を貯蔵する",
  "whenever": "するときはいつでも",
  "wherever": "するところはどこでも",
  "discovery": "発見",
  "bank": "銀行",
  "wound": "を負傷させる",
  "ship": "を輸送する",
  "injured": "傷ついた",
  "cross": "十字架",
  "red blood cell": "赤血球",
  "set up": "を設立する",
  "blood bank": "血液銀行",
  "instead of": "の代わりに",
  "the American Red Cross": "アメリカ赤十字社",
  "3-4": "-----",
  "donate": "を提供する",
  "dislike": "を嫌う",
  "resign": "辞職する",
  "protest": "抗議する",
  "racial": "人種の",
  "right": "権利",
  "reformer": "改革者",
  "persuade": "説得する",
  "organisation": "組織",
  "racist": "人種差別的な",
  "prove": "を証明する",
  "worth": "価値",
  "thousand of ~": "何千もの",
  "black": "黒人（の）",
  "separate from ~": "と分けて、区別して",
  "even if ~": "たとえ〜だとして",
  "resign from ~": "を辞職する",
  "in protest": "抗議して",
  "on ~ grounds": "の理由で",
  "civil rights": "公民権"
}

const words_old = {
  'artificial': "人工",
  'intelligence': "知能",
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
  "blizzard": "雪吹雪",
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


let punctuation = []
let words_len = 0
let words_key = []
let words_val = []
let notyet_list = []
let now = true
let past = now
let i = 0
let c = 0

function touch() {
  look(0);

  if (now) {
    now = false
    change()
  } else {
    now = true
    check()
  }
}

function change() {
  memorize_cbx.checked = false

  n = number.value
  if (n) n = Number(n)

  if (random.checked) {
    $.cookie("random", 'true');
    ud_memorize_cbxs()
    if (notyet_list.length > 0) {
      j = Math.floor(Math.random() * notyet_list.length)
      i = notyet_list[j]
    } else {
      i = 9999
    }

  } else {
    $.cookie("random", 'false');
    if (i == 9999) i = 0
    const old_i = i
    i += 1
    ud_memorize_cbxs()

    while (true) {
      if (notyet_list.includes(i)) {
        break
      }
      if (i == old_i) {
        i = 9999
        break
      }

      i += 1
      if (i >= words_len) {
        i = 0
      }
    }
    $.cookie("last", i);
  }

  if (n > 0 && n < words_len) {
    i = n - 1
    number.value = null
  } else if (n) {
    number.value = '1 ~ ' + String(words_len)
  } else {
    number.value = null
  }

  if (cbx.checked) {
    $.cookie("cbx", 'true');
    past = true

    if (i == '9999') {
      word.innerText = '全て覚えているようです😗'
    } else {
      let w = words_key[i]
      word.innerText = w
    }
  } else {
    $.cookie("cbx", 'false');
    past = false

    if (i == '9999') {
      word.innerText = '全て覚えているようです😗'
    } else {
      let w = words_val[i]
      word.innerText = w
    }
  }

  canswer.innerText = null
  num.innerText = null
}

function check() {
  canswer.innerText = words_val[i]
  if (i == 9999) {
    canswer.innerText = ''
  } else if (past) {
    canswer.innerText = words_val[i]
    num_disp()
  } else {
    canswer.innerText = words_key[i]
    num_disp()
  }
}

function num_disp() {
  const j = i + 1
  if (i < punctuation[1]) num.innerText = 'Part2-1 (' + j + ')'
  else if (i < punctuation[2]) num.innerText = 'Part2-2 (' + j + ')'
  else if (i < punctuation[3]) num.innerText = 'Part2-3 (' + j + ')'
  else if (i < punctuation[4]) num.innerText = 'Part2-4 (' + j + ')'
  else if (i < punctuation[5]) num.innerText = 'Part3-1 (' + j + ')'
  else if (i < punctuation[6]) num.innerText = 'Part3-2 (' + j + ')'
  else if (i < punctuation[7]) num.innerText = 'Part3-3 (' + j + ')'
  else num.innerText = 'Part3-4 (' + j + ')'
}

function memorized_all_click() {
  const m_label = document.getElementById('memorized_all_label')
  const c = memorized_all.checked
  const memorized = document.getElementsByClassName('memorized')
  if (c) {
    m_label.innerHTML = '全て外す'
    for (m in memorized) {
      memorized[m].checked = true
    }
  } else {
    m_label.innerHTML = '全てチェック'
    for (m in memorized) {
      memorized[m].checked = false
    }
  }
}

function memorized() {
  const memorized_c = document.getElementsByClassName('memorized');
  if (memorize_cbx.checked) {
    memorized_c[i + 1].checked = true
  } else {
    memorized_c[i + 1].checked = false
  }
  ud_memorize_cbx(i)
}

function ud_memorize_cbxs() {
  const memorized_c = document.getElementsByClassName('memorized');
  notyet_list = []

  for (let i = 0; i < memorized_c.length; i++) {
    if (memorized_c[i].checked) {
      $.cookie(words_key[i], 'true');
    } else {
      $.cookie(words_key[i], 'false');
      notyet_list.push(i - 1);
    }
  }
}

function ud_memorize_cbx(c) {
  const memorized_c = document.getElementsByClassName('memorized');

  if (memorized_c[c].checked) {
    $.cookie(words_key[c], 'true');
  } else {
    $.cookie(words_key[c], 'false');
  }
}

function look(mode) {
  if (mode == 0) {
    document.getElementById('is_memorized').style.display = 'none';
    document.getElementById('look').style.display = 'block';
  } else {
    document.getElementById('is_memorized').style.display = 'block';
    document.getElementById('look').style.display = 'none';
  }
}

function first() {
  const condition_cbx = $.cookie("cbx");
  const condition_random = $.cookie("random");
  if (condition_cbx == 'true')
    cbx.checked = true
  if (condition_random == 'true')
    random.checked = true
  const cookie_i = $.cookie("last")
  console.log('this',cookie_i);
  if (cookie_i) i = Number(cookie_i);

  const range_id = document.getElementById('range')
  const is_memorized = document.getElementById('is_memorized')
  const memorized_c = document.getElementsByClassName('memorized');
  let new_element = document.createElement('div');
  let condition = '';

  new_element.textContent = words[0];
  new_element.className = 'lesson';
  is_memorized.appendChild(new_element);

  for (let w in words) {
    if (words[w] == '-----') {
      try {
        let range_c = document.getElementsByClassName('range_c')
        let range_len = range_c.length - 1;

        let text_content = range_c[range_len].textContent
        range_c[range_len].innerHTML = text_content + String(words_len - 1)
      } catch (e) {
        console.log(e);
      }

      new_element = document.createElement('p');
      punctuation.push(words_len)
      new_element.textContent = `Part ${w} → ${words_len} 〜`;
      new_element.className = 'range_c';
      range_id.appendChild(new_element);

      new_element = document.createElement('h4');
      new_element.innerHTML = w;
      is_memorized.appendChild(new_element);

    } else {
      
      words_len++
      new_element = document.createElement('div');
      new_element.innerHTML = `<label for="${w}" onclick="ud_memorize_cbx(${words_len})"><input type="checkbox" class="memorized" id="${w}" />${words_len}: ${w} (${words[w]})</label>`
      is_memorized.appendChild(new_element);
      
      words_key.push(w)
      words_val.push(words[w])
      condition = $.cookie(`${w}`);
      if (condition == 'true') {
        memorized_c[words_len-1].checked = true
        console.log(words_len);
      }
    }
  }


  let range_c = document.getElementsByClassName('range_c')
  let range_len = range_c.length - 1;
  let text_content = range_c[range_len].textContent
  range_c[range_len].innerHTML = text_content + String(words_len - 1)

  touch()
}

first()
