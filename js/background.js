//onLaunched event will be fired when the user starts this app
chrome.app.runtime.onLaunched.addListener(function(){
    chrome.app.window.create('../simiWindowMain.html',{
       'outerBounds':{
           'width':400,
           'height':500
       } 
    });
});