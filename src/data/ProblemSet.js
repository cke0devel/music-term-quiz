const ProblemSetData = [{
    id: 1,
    title: '표정을 나타내는 용어',
    dictionary: [
        { word: 'animato', mean : ['생기있게'] },
        { word: 'amabile', mean : ['사랑스럽게'] },
        { word: 'appasionato', mean : ['정열적으로'] },
        { word: 'a ballata', mean : ['발라드 풍으로'] },
        { word: 'alla marcia', mean : ['행진곡 풍으로'] },
        { word: 'arioso', mean : ['노래하듯이'] },
        { word: 'brillante', mean : ['화려하게', '찬란하게'] },
        { word: 'calmato', mean : ['조용하게'] },
        { word: 'cantabile', mean : ['노래하듯이'] },
        { word: 'capricioso', mean : ['들뜬듯이', '제멋대로'] },
        { word: 'comodo', mean : ['평온하게'] },
        { word: 'con allegrezza', mean : ['쾌활하게'] },
        { word: 'con brio', mean : ['생기있게'] },
        { word: 'con energia', mean : ['기세를 올려서'] },
        { word: 'con forza', mean : ['세게'] },
        { word: 'con fuoco', mean : ['열열하게'] },
        { word: 'con moto', mean : ['감동적으로'] },
        { word: 'con sentimento', mean : ['감정있게'] },
        { word: 'con tenerezza', mean : ['우아하게'] },
        { word: 'declamando', mean : ['낭독하듯이'] },
        { word: 'delicato', mean : ['섬세하게'] },
        { word: 'distinto', mean : ['또렷하게'] },
        { word: 'dolore, doloroso', mean : ['가슴 아픈듯이'] },
        { word: 'elegante', mean : ['우아하게', '품위있게'] },
        { word: 'energico', mean : ['정력적으로'] },
        { word: 'eroico', mean : ['영웅적으로'] },
        { word: 'espressivo', mean : ['표정을 담아서'] },
        { word: 'feroce', mean : ['거칠게'] },
        { word: 'fioco', mean : ['연약하게'] },
        { word: 'furioso', mean : ['미친듯이'] },
        { word: 'generoso', mean : ['고귀하게'] },
        { word: 'gentile', mean : ['사랑스럽고 귀엽게'] },
        { word: 'giocoso', mean : ['즐겁게'] },
        { word: 'grandioso', mean : ['웅대하게'] },
        { word: 'grave', mean : ['무겁게', '엄숙하게'] },
        { word: 'grazioso, con grazia', mean : ['사랑스럽고 우아하게'] },
        { word: 'innocente', mean : ['순진하게, 어린마음으로'] },
        { word: 'lamentoso, lamentabile', mean : ['슬픈 마음으로'] },
        { word: 'largamente', mean : ['폭이 넓게'] },
        { word: 'leggiero', mean : ['경쾌하게'] },
        { word: 'liberamente', mean : ['자유롭게'] },
        { word: 'marciale,marziale', mean : ['행진곡처럼'] },
        { word: 'nobile', mean : ['고귀하게'] },
        { word: 'ostinato', mean : ['끈덕지게'] },
        { word: 'parlando', mean : ['지꺼리듯이', '말하듯이'] },
        { word: 'passionato', mean : ['정열적으로'] },
        { word: 'pastorale', mean : ['목가 풍으로'] },
        { word: 'pesante', mean : ['무겁게'] },
        { word: 'piacevele', mean : ['귀엽게'] },
        { word: 'rapido', mean : ['재빠르게'] },
        { word: 'religioso', mean : ['경건하게'] },
        { word: 'risoluto', mean : ['결연히'] },
        { word: 'rusticana', mean : ['소박하게'] },
        { word: 'saltato', mean : ['깡총깡총 뛰듯이'] },
        { word: 'scherzando', mean : ['경쾌하고 우스꽝스럽게'] },
        { word: 'semplice', mean : ['단순하게'] },
        { word: 'sensibile', mean : ['예민하게'] },
        { word: 'serioso', mean : ['점잖게'] },
        { word: 'soave', mean : ['사랑스럽게'] },
        { word: 'sospirando', mean : ['탄식하듯이'] },
        { word: 'sostenuto', mean : ['음의 길이를 충분히'] },
        { word: 'spirituoso, con spirito', mean : ['생생하게'] },
        { word: 'subito', mean : ['곧', '갑자기'] },
        { word: 'tempestoso', mean : ['격렬하게'] },
        { word: 'tranquillo', mean : ['조용히'] },
        { word: 'veloce', mean : ['급히'] },
        { word: 'vigoroso', mean : ['힘차게'] },
    ],
}, {
    id: 2,
    title: '빠르기를 나타내는 말',
    dictionary: [
        { word: 'accelerando(accel.)', mean : ['점점 빠르게'] },
        { word: 'stringendo(string.)', mean : ['점점 빠르게'] },
        { word: 'poco a poco animato', mean : ['점점 빠르게'] },
        { word: 'ritardando(rit.)', mean : ['점점 느리게'] },
        { word: 'rallentando(rall.)', mean : ['점점 느리게'] },
        { word: 'lentando', mean : ['점점 느리게'] },
        { word: 'slentando', mean : ['점점 느리게'] },
        { word: 'morendo', mean : ['숨이 끊어져 가듯이'] },
        { word: 'perdendosi', mean : ['사라지듯이'] },
        { word: 'smorendo', mean : ['꺼져가듯이'] },
        { word: 'smorzando', mean : ['소리만 작아지게 꺼져가듯이'] },
        { word: 'calando', mean : ['점점 평온하게(소리 작아지고 템포도 느려짐)'] },
        { word: 'mancando', mean : ['점점 평온하게'] },
        { word: 'allargando', mean : ['점점 느려지면서 폭이 넓고 세게'] },
        { word: 'largando', mean : ['점점 느려지면서 폭이 넓고 세게'] },
        { word: 'meno mosso', mean : ['빠르기를 조금 늦춰서'] },
        { word: 'piu mosso', mean : ['더욱 발랄하게'] },
        { word: 'a piacere', mean : ['자유롭게', '좋을대로'] },
        { word: 'ad libitum(ad lib.)', mean : ['임의대로'] },
        { word: 'tempo rubato', mean : ['임의대로(느리거나 빠르거나 자연스럽게 한다)'] },
        { word: 'a tempo', mean : ['본디 빠르기로'] },
        { word: 'Tempo Primo(Tempo 1)', mean : ['처음 빠르기로'] },
        { word: 'tempo ordinario', mean : ['본디의 박자로'] },
        { word: 'tempo guisto', mean : ['정확한 박자로'] },
        { word: 'listesso tempo', mean : ['같은 빠르기로'] },
        { word: 'medesimo tempo', mean : ['같은 빠르기로'] },
        { word: 'alla', mean : ['~풍으로'] },
        { word: 'assai', mean : ['매우'] },
        { word: 'con', mean : ['~을 가지고'] },
        { word: 'ma non troppo', mean : ['지나치치 않게'] },
        { word: 'meno', mean : ['~보다 적게'] },
        { word: 'molto', mean : ['매우'] },
        { word: 'non tanto', mean : ['너무 지나치지 않게'] },
        { word: 'ossia', mean : ['또는', '혹은', '그것이 아니면'] },
        { word: 'piu', mean : ['더욱'] },
        { word: 'poco', mean : ['약간'] },
        { word: 'poco a poco', mean : ['조금씩'] },
        { word: 'quasi', mean : ['거의 ~처럼'] },
        { word: 'stretto', mean : ['서두르는 느낌을 가지고'] },
        { word: 'agitato', mean : ['급하고 긴장된 느낌을 가지고'] },
        { word: 'piu mosso', mean : ['더 움직임을 가지고'] },
        { word: 'retenuto', mean : ['갑작스럽게 앞부분보다 느려지게'] },
    ],
},/* {
    id: 3,
    title: '용어3',
    dictionary: [
        { word: 'word1', mean : ['설명1'] },
        { word: 'word2', mean : ['설명2'] },
        { word: 'word3', mean : ['설명3'] },
        { word: 'word4', mean : ['설명4'] },
        { word: 'word5', mean : ['설명5'] },
    ],
}*/];

export { ProblemSetData };
