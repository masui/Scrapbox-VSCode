//
// VSCode Webを活用するためのブックマークレット
// https://github.dev/masui/Scrapbox-VSCode ⇔ https://scrapbox.io/Scrapbox-VSCode
//
// タイトル取得手法がイマイチだが仕方ない?
// window.scrapbox.Project.name だとURLの名前しか取得できないので .title を使ってる
//
javascript:(function(){
    let a;
    if(a = location.href.match(/github.(dev|com)\/(.*)\/(.*)$/)){
        location.href = `https://Scrapbox.io/${a[3]}`;
    }
    else if(a = location.href.match(/scrapbox.io\/([\w\-]+)\/?/i)){
        let title = $('.title')[0].innerHTML;
        location.href = `https://github.dev/masui/${title}`;
    }
})();