var webview = Titanium.UI.createWebView({url:'index.html'});
    var window = Titanium.UI.createWindow();
    window.add(webview);
    window.open({modal:true});
	