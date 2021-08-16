// ブックマークレット
// https://github.dev/masui/Scrapbox-VSCode => scrapbox.io/Scrapbox-VSCode にジャンプ
//
javascript:(function(){
    let a;
    if(a = location.href.match(/github.dev\/(.*)\/(.*)$/)){
        window.open(`https://Scrapbox.io/${a[2]}`);
    }
    else if(a = location.href.match(/scrapbox.io\/([\w\-]+)\/?/i)){
        window.open(`https://github.dev/masui/${a[1]}`);
    }
})();