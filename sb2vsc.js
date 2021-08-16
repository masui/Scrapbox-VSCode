// ブックマークレット
// https://github.dev/masui/Scrapbox-VSCode => scrapbox.io/Scrapbox-VSCode にジャンプ
//
javascript:(function(){
    let a;
    if(a = location.href.match(/github.dev\/(.*)\/(.*)$/)){
        location.href = `https://Scrapbox.io/${a[2]}`;
    }
    else if(a = location.href.match(/scrapbox.io\/([\w\-]+)\/?/i)){
        let title = $('.title')[0].innerHTML;
        location.href = `https://github.dev/masui/${title}`;
    }
})();
// タイトル取得手法がイマイチ...