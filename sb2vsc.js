// ブックマークレット
// https://github.dev/masui/Scrapbox-VSCode => scrapbox.io/Scrapbox-VSCode にジャンプ
//
javascript:(function(){
    let a = location.href.match(/github.dev\/(.*)\/(.*)$/);
    if(a){
        window.open(`https://Scrapbox.io/${a[2]}`);
    }
})();