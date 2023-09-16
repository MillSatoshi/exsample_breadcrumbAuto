document.addEventListener("DOMContentLoaded", function () {
  function createBreadcrumb() {
  
    var isOmission = true;
    var separator = " / ";
  
    var breadcrumbContainer = document.getElementById("breadcrumb");
    
    var url = window.location.protocol + "//";
      
    // ページのURLを取得
    var urlParts =  (window.location.hostname + window.location.pathname).split("/").filter(part => part !== "");
    
    //　ローカル環境のテスト用に使いたい場合。
    //var urlParts =  ("www.exsample.com/onlineShop/products/season/jacket/woman/coat/E01234456/").split("/").filter(part => part !== "");
        
    // パンくずリストの初期化
    breadcrumbContainer.innerHTML = "";
    
    // 6階層以上の場合、[ホーム][urlParts[0]] ... [urlParts[i - 1]][urlParts[i]]のみ表示させる
    if(isOmission == true && urlParts.Length >= 6){
    // 最初の2個と最後の2個を抽出
     urlParts = urlParts.slice(0, 2).concat(urlParts.slice(-2));
    }
        
    // 各セグメントをパンくずリストに追加
    for (var i = 0; i < urlParts.length; i++) {
      var breadcrumbItem = document.createElement("a");
      url += "/" + urlParts[i];
      if( i == 0 ){
      breadcrumbItem.textContent = "ホーム";
      breadcrumbItem.href = url;
      breadcrumbItem.classList.add("breadcrumb-item");
      }else if (i == urlParts.length - 1){
      breadcrumbItem.textContent = urlParts[i];
      breadcrumbItem.classList.add("breadcrumb-latest-item");
      }else{
      breadcrumbItem.textContent = urlParts[i];
      breadcrumbItem.href = url;
      breadcrumbItem.classList.add("breadcrumb-item");
      }
      
      breadcrumbContainer.appendChild(breadcrumbItem);

      // パンくず区切りを追加
      if (i < urlParts.length - 1) {
        var urlSeparator = document.createElement("span");
        urlSeparator.textContent = separator;
        breadcrumbContainer.appendChild(urlSeparator);
      }
    }
  }

  // ページが読み込まれたらパンくずリストを生成
  createBreadcrumb();
});