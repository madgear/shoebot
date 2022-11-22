var formname = document.getElementsByName("product_form")[0];
var shoesize = document.getElementsByName("size")[0];
var selectbox;
var addcartbutton;
var itemcartname;
var myshoesize = "0";
var myserial = "0000000000";
var mcode = "";
var currentcartitem = "0";
var itemcount = document.getElementsByTagName("span");
chrome.storage.sync.get("mykey", function (e) {
    myserial = e.mykey;
});
chrome.storage.sync.get("machinecode", function (f) {
    mcode = f.machinecode;
});
function getitemcount() {
    for (var no = 0; no < itemcount.length; no++) {
        if (itemcount[no].getAttribute("class") == itemcartname) {
            if (itemcount[no].innerHTML == "0") {
                setTimeout("addToCart()", 250);
            } else {
                currentcartitem = itemcount[no].innerHTML;
                setTimeout("gotocheckout()", 250);
            }
        }
    }
}
switch (window.location.host) {
    case "www.footlocker.com":
        addcartbutton = document.getElementsByName("pdp_addtocart")[0];
        itemcartname = "item_count_value";
        if (document.getElementById("product_sizes") == null) {
            selectbox = "false";
        } else {
            selectbox = "true";
        }
        chrome.storage.sync.get("footlockersize", function (a) {
            myshoesize = a.footlockersize;
        });
        break;
    case "www.eastbay.com":
        addcartbutton = document.getElementById("addToCartLink");
        itemcartname = "value item_count_value";
        if (document.getElementById("pdp_addToCart").style.display === "inline-block") {
            selectbox = "true";
        } else {
            selectbox = "false";
        }
        chrome.storage.sync.get("eastbaysize", function (b) {
            myshoesize = b.eastbaysize;
        });
        break;
    case "www.footaction.com":
        addcartbutton = document.getElementById("addToCartLink");
        itemcartname = "item_count_value";
        if (document.getElementById("pdp_addToCart").style.display === "inline-block") {
            selectbox = "true";
        } else {
            selectbox = "false";
        }
        chrome.storage.sync.get("footactionsize", function (c) {
            myshoesize = c.footactionsize;
        });
        break;
    case "www.champssports.com":
        addcartbutton = document.getElementById("addToCartLink");
        itemcartname = "item_count_value";
        if (document.getElementById("pdp_addToCart").style.display === "inline-block") {
            selectbox = "true";
        } else {
            selectbox = "false";
        }
        chrome.storage.sync.get("champsportssize", function (d) {
            myshoesize = d.champsportssize;
        });
        break;
}
function gotocheckout() {
    window.location = "https://" + window.location.host + "/checkout/";
}
function runscript() {
    var genserial = "DR0524" + mcode + "01AR34";
    if (genserial == myserial) {
        if (selectbox == "false") {
            setTimeout("runscript()", 250);
        } else {
            setTimeout("getitemcount()", 250);
        }
    } else {
        alert("Please check on your registration... tnx!");
    }
}
function addToCart() {
    if (myshoesize != "0") {
        shoesize.value = myshoesize;
        addcartbutton.click();
        setTimeout("addToCart()", 250);
    } else {
        setTimeout("runscript()", 250);
    }
}
setTimeout("runscript()", 250);
