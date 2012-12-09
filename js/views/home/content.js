var Home = Home || {};
Home.setCity = function (cityId) {
    for (var i = 0, city; city = Home.cities.city[i]; i++) {
        if (city.id == cityId) {
            Home.city = city;
            break;
        }
    }
};
Home.setRegion = function (regionId) {
    for (var i = 0, region; region = Home.regions.region[i]; i++) {
        if (region.id == regionId) {
            Home.region = region;
            break;
        }
    }
};
Home.setCity(Home.user.user[0].cityId);
Home.setRegion(Home.user.user[0].regionId);
Home.pageSize = 5;
Home.drawList = function () {
    var $ideaList =  $("#ideaList");
    var template = '<div class="ideaList">' +
                       '<div class="ideaContent">' +
                           '<div class="about">'+
                               '<div class="user">' +
                                   '<img class="headPhoto"/>' +
                                   '<label class="userName userInfo"></label>' +
                               '</div>' +
                               /*'<div class="createLocation">'+
                                   '<label class="city locationLabel"></label>' +
                                   '<label class="range locationLabel"></label>' +
                               '</div>'+*/
                           '</div>'+
                           '<img class="contentPicture" />' +
                           '<div class="title"></div>' +
                       '</div>' +
                       '<div class="info"><span class="infoLabel">支持:<span class="collectNum"></span></span>'+
                       '<span class="infoLabel">评论:<span class="commentNum"></span></span></span>'+
                       // '<div class="option">' +
                           // '<span class="collect tab"><span class="collectNum num"></span>收藏</span>' +
                           // '<span class="support tab">支持</span>' +
                           // '<span class="comment tab"><span class="commentNum num"></span>评论</span>' +
                       // '</div>' +
                   '</div>';
    $.getJSON("../js/fakeData/ideaList.json", function(data) {
        $.each(data.ideaList, function(n, idea) {
            $ideaList.append(template);
            var offSet = Home.pageSize * (Home.pageNum - 1);
            var $currentIdeaList = $($(".ideaList")[n + offSet]);
            if (!idea.ideaPicture) {
                $currentIdeaList.find(".contentPicture").remove();
                $currentIdeaList.find(".title").css("width", "76%");
            } else {
                $currentIdeaList.find(".contentPicture").attr("src", idea.ideaPicture);
            }
            $currentIdeaList.find(".userName").html(idea.userName);
            $currentIdeaList.find(".city").html(idea.city);
            $currentIdeaList.find(".range").html(idea.range);
            $currentIdeaList.find(".title").html(idea.title);
            $currentIdeaList.find(".collectNum").html(idea.collectNum);
            $currentIdeaList.find(".commentNum").html(idea.commentNum); 
            $currentIdeaList.find(".headPhoto").attr("src", idea.headPhoto);
            
            $currentIdeaList.find(".ideaContent").on("tap", function(){
                window.location.href = "ideaDetail.html";
            });
            
            $currentIdeaList.find(".user").off().on("tap", function(event){
                event.stopPropagation();
                window.location.href = "viewProfile.html";
                //$.mobile.changePage("viewProfile.html");
            });
        });
    });
}
Home.queryData = function() {
    if (!Home.fakeData) {
        console.log("Fake data is not ready!");
        return;
    }
    Home.drawList();
};
Home.initPage = function() {
    Home.pageNum = 1;
    $("#ideaList").empty();
    Home.queryData();
};
$(document).on('pageinit', function() {
    Home.initPage();
    
    $("#tabOption").off().on("click", "div[class=\"ui-radio\"]", function() {
        if ($(this).find("input").attr("id") == "question") {
            $("#selection").html($(this).find("label span span:first").html() + " ");
        } else {
            $("#selection").html("想法 - " + $(this).find("label span span:first").html() + " ");
        }
        history.back();
    });
    
    $("body").off().on("tap", "a" ,function() {
        if (this.id == "more") {        
            Home.pageNum ++;
            Home.queryData();
        } else if (this.id == "option") {
            window.location.href = "optionList.html";
        } else if (this.id == "create") {
            window.location.href = "createIdea.html";
        } else if (this.id == "location") {
            window.location.href = "cityList.html";
        }
    });
});