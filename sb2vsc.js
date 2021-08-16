// ブックマークレット
// https://github.dev/masui/Scrapbox-VSCode => scrapbox.io/Scrapbox-VSCode にジャンプ
//
javascript:(function(){
    let a;
    if(a = location.href.match(/github.dev\/(.*)\/(.*)$/)){
        window.open(`https://Scrapbox.io/${a[2]}`);
    }
})();