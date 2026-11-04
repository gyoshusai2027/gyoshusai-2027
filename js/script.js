
/* =========================
   暁秀祭2027 JavaScript
========================= */

// 開催日が決まったら日付を設定する
// 例：2027-05-16T09:00:00+09:00
const EVENT_DATE = null;


/* =========================
   カウントダウン
========================= */

function updateCountdown() {
  if (!EVENT_DATE) return;

  const target = new Date(EVENT_DATE).getTime();
  const now = Date.now();
  const difference = target - now;

  const countdownNumber = document.querySelector(".countdown-number");

  if (difference <= 0) {
    if (countdownNumber) {
      countdownNumber.textContent = "開催中！";
    }
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (countdownNumber) {
    countdownNumber.textContent = `${days}日`;
  }
}

// ページ読み込み時に実行
updateCountdown();

// 1分ごとに更新
setInterval(updateCountdown, 60000);


/* =========================
   ページ読み込み完了
========================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log("暁秀祭2027 公式サイトへようこそ！");
});

