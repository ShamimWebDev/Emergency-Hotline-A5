function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// heart icon counting feature added
const hearts = document.querySelectorAll(".click-heart-icon");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const count = getElement("count-heart");
    count.innerText = parseInt(count.innerText) + 1;
  });
}

// Call Buttons Feature
document.addEventListener("DOMContentLoaded", function () {
  let callBtn = document.querySelectorAll(".btn-call");
  let coinBtn = document.querySelectorAll(".header-right span");
  let coin = coinBtn[1];
  let callHistory = document.querySelector(".call-history + div");
  let clearBtn = document.getElementById("clear-all-calls");

  clearBtn.addEventListener("click", function () {
    callHistory.innerHTML = "";
  });

  for (var i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener("click", function () {
      let card = this.closest(".product-cart");
      let serviceName = card.querySelector("h2").innerText;
      let serviceNumber = card.querySelector("h3").innerText;
      let coins = parseInt(coin.innerText);

      if (coins < 20) {
        alert(
          "you don't have sufficient coin,to make a call you need 20 coin!!"
        );
        return;
      }

      coins = coins - 20;
      coin.innerText = coins;
      alert("Calling " + serviceName + serviceNumber + "...");

      let historyCall = document.createElement("div");
      historyCall.className =
        "call-list bg-[#f1dcdc] flex gap-6 rounded-[10px] p-2 mt-2";

      let name = document.createElement("h3");
      name.className = "font-bold text-[15px]";
      name.innerText = serviceName;

      let number = document.createElement("p");
      number.className = "text-[#5c5c5c]";
      number.innerText = serviceNumber;

      let time = document.createElement("p");
      time.innerText = new Date().toLocaleTimeString();

      let leftDiv = document.createElement("div");
      leftDiv.appendChild(name);
      leftDiv.appendChild(number);

      let rightDiv = document.createElement("div");
      rightDiv.appendChild(time);

      historyCall.appendChild(leftDiv);
      historyCall.appendChild(rightDiv);

      callHistory.appendChild(historyCall);
    });
  }
});



