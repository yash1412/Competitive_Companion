{
        function getDomain(url, subdomain) {
            subdomain = subdomain || false;
        
            url = url.replace(/(https?:\/\/)?(www.)?/i, '');
        
            if (!subdomain) {
                url = url.split('.');
        
                url = url.slice(url.length - 2).join('.');
            }
        
            if (url.indexOf('/') !== -1) {
                return url.split('/')[0];
            }

            return url;
        }

        function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }

        function copyToClipboard(str) {
            const el = document.createElement('textarea');
            el.value = str;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    let url=getDomain(window.location.href);
    if(url=="codechef.com"){
        let copyText = getElementByXpath("/html/body/div[3]/div/div/main/section[1]/div/pre[1]/code").innerHTML;
        copyToClipboard(copyText);
    }
    else {window.open("https://www.codechef.com");}
}