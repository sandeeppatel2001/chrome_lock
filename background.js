console.log("from background");
//console.log(chrome);
chrome.tabs.onActivated.addListener((tab) => {
  console.log(1);
  //console.log("chrome=", chrome);
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    console.log(2);
    console.log(current_tab_info);
    //console.log(/^https:\/\/www\.google/.test(current_tab_info.url));
  });
});
