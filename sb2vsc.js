// ブックマークレット
javascript:(function(){
    let a = location.href.match(/github.dev\/(.*)\/(.*)$/);
    if(a){
        window.open(`https://Scrapbox.io/${a[2]}`);
    }
})();